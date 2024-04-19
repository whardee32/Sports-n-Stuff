
const signInForm = document.getElementById('signInForm');
const navText1 = document.querySelector('.navtext1');

signInForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const username = document.getElementById('username').value;
  navText1.textContent = username;
  navText1.classList.add('underline'); 
  
 
  document.cookie = `username=${username}`;
});