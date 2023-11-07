// Initialize Facebook SDK
window.fbAsyncInit = function() {
    FB.init({
      appId: '676860667352401',
      cookie: true,
      xfbml: true,
      version: 'v17.0'
    });
  };
  
  // Add Event Listener for Facebook Login Button
  document.getElementById('facebookLogin').addEventListener('click', function() {
    FB.login(function(response) {
      if (response.status === 'connected') {
        var accessToken = response.authResponse.accessToken;
        
        // Perform AJAX request to Flask backend for token verification
        fetch('/verify_facebook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 'access_token': accessToken })
        }).then(response => response.json())
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
          
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        console.log('User not authorized.');
      } else {
        // The person is not logged into Facebook.
        console.log('User not logged in.');
      }
    }, {scope: 'email'});  // Request email scope
  });
  
  // Optional: Log a page view for analytics purposes, if required
  // FB.AppEvents.logPageView();
  