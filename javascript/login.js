//const signInForm = document.getElementById('signInForm');
//const usernameDisplay = document.getElementById('usernameDisplay');

//signInForm.addEventListener('submit', (event) => {
  //event.preventDefault(); // Prevent default form submission behavior
  //const username = document.getElementById('username').value;
  //usernameDisplay.textContent = `${username}`;
//});

const signInForm = document.getElementById('signInForm');
const navText1 = document.querySelector('.navtext1');

signInForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  const username = document.getElementById('username').value;
  navText1.textContent = username;
  navText1.classList.add('underline'); // Add a class for underlining
  
  // Set username in cookie
  document.cookie = `username=${username}`;
});