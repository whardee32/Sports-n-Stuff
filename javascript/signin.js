<script>
  // Function to handle sign-in submission
  function signIn() {
    // Get the username from the form
    var username = document.getElementById("username").value;
    // Assuming authentication is successful, you would typically store the username in a session or cookie
    // For demonstration purposes, I'll just use localStorage to store the username temporarily
    localStorage.setItem("loggedInUsername", username);
    // Replace "Account" navigation link with the signed-in username
    var accountLink = document.querySelector('.nav-item1 a[href="signin.html"]');
    if (accountLink) {
      accountLink.innerHTML = '<span class="navtext">' + username + '</span>';
      accountLink.href = '#'; // Optionally, change the link target
    }
  }

  // Check if the user is already signed in
  window.onload = function() {
    var loggedInUsername = localStorage.getItem("loggedInUsername");
    if (loggedInUsername) {
      // Replace "Account" navigation link with the signed-in username
      var accountLink = document.querySelector('.nav-item1 a[href="signin.html"]');
      if (accountLink) {
        accountLink.innerHTML = '<span class="navtext">' + loggedInUsername + '</span>';
        accountLink.href = '#'; // Optionally, change the link target
      }
    }
  };
</script>