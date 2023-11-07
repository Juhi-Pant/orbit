AWS.config.update({
    region: 'us-east-1',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:5342b0ad-10f2-4654-84f0-f578e6824f71' 
    })
  });
  
  