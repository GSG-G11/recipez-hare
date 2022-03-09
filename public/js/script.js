// eslint-disable-next-line import/extensions
import postData from './postData.js';

const login = document.querySelector('#login');

login.addEventListener('submit', (e) => {
  e.preventDefault();
  const { username, password } = e.target;
  postData({ username: username.value.trim(), password: password.value.trim() }, '/log-in')
    .then((res) => {
      if (res === 'AUTH') {
        window.location.href = '/user';
      }
    });
});
