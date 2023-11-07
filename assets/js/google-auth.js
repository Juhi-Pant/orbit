// Function triggered when the user successfully signs in
function onSignIn(googleUser) {
    // Retrieve ID token from the signed-in user object
    var id_token = googleUser.getAuthResponse().id_token;
    
    // Send the token to your server for verification using AJAX
    fetch('/verify_google', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'id_token': id_token })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error during verification:', data.error);
        } else {
            // Redirect the user to the dashboard
            window.location.href = 'https://orbit.top/src/home/dashboard/index';
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Initialize Google Sign-In
function init() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            // CHANGE: Replace with your Google Client ID
            client_id: '377371872467-m5ji7d6re9v17q9pqnempijvchenjg8u.apps.googleusercontent.com'
        });
    });
}

// Call `init` to initialize Google Sign-In
init();
