// Initialize Amazon Cognito
AWSCognito.config.region = 'us-east-1'; // e.g. us-east-1

var poolData = {
    UserPoolId : 'us-east-1_xGFc2iByb',
    ClientId : '1b3s0p4fl0nf08hvouglapc40a'
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
