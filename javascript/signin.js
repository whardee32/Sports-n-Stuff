const cookieValue = document.cookie.split('; ').find(cookie => cookie.startsWith('username='));
const username = cookieValue ? cookieValue.split('=')[1] : '';

if (username) {
    navText1.textContent = username;
    navText1.classList.add('underline');
};

// Check if the user is already signed in
window.onload = function () {
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