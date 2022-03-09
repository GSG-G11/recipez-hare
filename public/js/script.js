// eslint-disable-next-line import/extensions
import postData from './postData.js';
import getUserInfoFromCookie from './getUserInfoFromCookie.js';

// console.log(getUserInfoFromCookie());

const login = document.querySelector('#login');
const reciepes = document.querySelector('#addReciepe');

fetch('/user/getRecipes')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

login?.addEventListener('submit', (e) => {
  e.preventDefault();
  const { username, password } = e.target;
  postData(
    { username: username.value.trim(), password: password.value.trim() },
    '/log-in',
  ).then((res) => {
    if (res === 'AUTH') {
      window.location.href = '/user';
    }
  });
});

reciepes?.addEventListener('submit', (e) => {
  e.preventDefault();
  const { title, detail, userId } = e.target;
  postData(
    {
      title: title.value.trim(),
      detail: detail.value.trim(),
      userId: userId.value.trim(),
    },
    '/user/addReciepes',
  );
});
