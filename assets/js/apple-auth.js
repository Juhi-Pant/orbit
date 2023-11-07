// Initialize Apple Sign In
document.addEventListener('DOMContentLoaded', function() {
    if (window.AppleID) {
      AppleID.auth.init({
        clientId : 'top.orbit.your.peer.group.signin',
        redirectURI: 'https://orbit.top/src/home/dashboard/index',
        scope : 'name email',
        state : 'state' // optional but recommended
      });
    }
  });
  
  // Function to handle the Apple Sign In
  function handleAppleSignIn() {
    AppleID.auth.signIn();
  }
  
  // Listen for a successful Apple Sign-In
  document.addEventListener('AppleIDSignInOnSuccess', (data) => {
    const user = data.detail.user;
    const authorizationCode = data.detail.authorization.code;  // Send this to your server for verification
  
    // Perform AJAX request to Flask backend
    fetch('/verify_apple', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'authorization_code': authorizationCode })
    }).then(response => response.json())
      .then(data => {
        if (data.error) {
          console.error('Error during verification:', data.error);
        } else {
          // Redirect the user to the dashboard or handle other logic
          window.location.href = 'https://orbit.top/src/home/dashboard/index';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
  