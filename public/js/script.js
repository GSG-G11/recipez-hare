// eslint-disable-next-line import/extensions
import postData from './postData.js';
import getUserInfoFromCookie from './getUserInfoFromCookie.js';

const plusIcon = document.querySelector('#plus');
const recipySection = document.querySelector('.createRecipy');
const closeIcon = document.querySelector('#close');
const addBtn = document.querySelector('#btn');

console.log(getUserInfoFromCookie());

const login = document.querySelector('#login');
const reciepes = document.querySelector('#addReciepe');

login?.addEventListener('submit', (e) => {
  e.preventDefault();
  const { username, password } = e.target;
  postData({ username: username.value.trim(), password: password.value.trim() }, '/log-in')
    .then((res) => {
      if (res === 'AUTH') {
        window.location.href = '/user';
      }
    });
});

reciepes?.addEventListener('submit', (e) => {
  e.preventDefault();
  const { title, detail, userId } = e.target;
  postData({ title: title.value.trim(), detail: detail.value.trim(), userId: Number(userId.value.trim()) }, '/user/addReciepes');
});

plusIcon.addEventListener('click', () => {
  recipySection.style.display = 'flex';

  plusIcon.style.color = '#000';
});

addBtn.addEventListener('click', () => {
  recipySection.style.display = 'none';

  plusIcon.style.color = '#FFC300';
});
closeIcon.addEventListener('click', () => {
  recipySection.style.display = 'none';

  plusIcon.style.color = '#FFC300';
});
