import postData from './postData.js';

const signUp = document.querySelector('.signUp');
signUp.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = e.target.username.value.trim();
  const password = e.target.password.value.trim();
  const repeatPassword = e.target.repeatPassword.value.trim();
  postData({ username, repeatPassword, password }, '/sign-up')
    .then((res) => {
      if (res === 'AUTH') {
        window.location.href = '/user';
      }
    });
});
