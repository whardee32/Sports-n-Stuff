let toggler = document.getElementById("switch1")

toggler.addEventListener('click', () => {
    if (toggler.checked === true) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"
    }
});

const navText1 = document.querySelector('.navtext1');

// Get username from cookie
const cookieValue = document.cookie.split('; ').find(cookie => cookie.startsWith('username='));
const username = cookieValue ? cookieValue.split('=')[1] : '';

if (username) {
  navText1.textContent = username;
  navText1.classList.add('underline'); // Add a class for underlining
}