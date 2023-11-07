// AWS Cognito configurations
AWSCognito.config.region = 'us-east-1';

var poolData = {
    UserPoolId: 'us-east-1_xGFc2iByb',
    ClientId: '1b3s0p4fl0nf08hvouglapc40a'
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// Function to sign up a new user
function signUp(username, password, email) {
    var attributeList = [];
    var dataEmail = {
        Name: 'email',
        Value: email
    };
    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    attributeList.push(attributeEmail);

    userPool.signUp(username, password, attributeList, null, function(err, result) {
        if (err) {
            if (err.code === 'UsernameExistsException') {
                console.error('Username already exists');
            } else if (err.code === 'InvalidPasswordException') {
                console.error('Invalid password format');
            } else {
                console.error(err.message || JSON.stringify(err));
            }
            return;
        }
        var cognitoUser = result.user;
        console.log('User registration successful:', cognitoUser.getUsername());
    });
}

// Function to authenticate a user
function authenticate(username, password) {
    var authenticationData = {
        Username: username,
        Password: password
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    
    var userData = {
        Username: username,
        Pool: userPool
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
            var accessToken = result.getAccessToken().getJwtToken();
            console.log('Authentication successful', accessToken);
            validateToken(accessToken);
            window.location.href = 'https://orbit.top/src/home/dashboard/index'; // Redirect
        },
        onFailure: function(err) {
            if (err.code === 'UserNotFoundException') {
                console.error('User does not exist');
            } else if (err.code === 'NotAuthorizedException') {
                console.error('Incorrect password');
            } else {
                console.error('Authentication failed', err);
            }
        },
        newPasswordRequired: function(userAttributes, requiredAttributes) {
            console.log('New password required');
        }
    });
}

// Function to validate the token
function validateToken(accessToken) {
    fetch('/verify_cognito', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'access_token': accessToken })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Token verification failed:', data.error);
        } else {
            console.log('Token verified successfully');
        }
    })
    .catch(error => console.error('Error:', error));
}
