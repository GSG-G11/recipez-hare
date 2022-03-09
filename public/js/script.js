// eslint-disable-next-line import/extensions
import postData from './postData.js';
import getUserInfoFromCookie from './getUserInfoFromCookie.js';

const cards = document.querySelector('.cards');
const plusIcon = document.querySelector('#plus');
const recipySection = document.querySelector('.createRecipy');
const closeIcon = document.querySelector('#close');
const addBtn = document.querySelector('#btn');
const login = document.querySelector('#login');
const reciepes = document.querySelector('#addReciepe');
const name = document.querySelector('#name');
const userInfo = getUserInfoFromCookie();
console.log(getUserInfoFromCookie());
name.textContent = userInfo.username;

fetch('/user/getRecipes')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((object) => {
      renderDom(object);
    });
  })
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
  const { title, detail } = e.target;
  cards.textContent = '';

  postData({ title: title.value.trim(), detail: detail.value.trim(), userId: userInfo.id }, '/user/addReciepes');

  fetch('/user/getRecipes')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((object) => {
        renderDom(object);
      });
    })
    .catch((err) => console.log(err));
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
