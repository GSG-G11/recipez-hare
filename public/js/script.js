// eslint-disable-next-line import/extensions
import postData from './postData.js';
import getUserInfoFromCookie from './getUserInfoFromCookie.js';

const plusIcon = document.querySelector('#plus');
const recipySection = document.querySelector('.createRecipy');
const closeIcon = document.querySelector('#close');
const addBtn = document.querySelector('#btn');
const name = document.querySelector('#name');
const logOut = document.querySelector('#logOut');
const reciepes = document.querySelector('#addReciepe');

const userInfo = getUserInfoFromCookie();
name.textContent = userInfo.username;

fetch('/user/getRecipes')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((object) => {
      renderDom(object);
    });
  })
  .catch((err) => console.log(err));

/// /log out in front
/* document.cookie = 'info=;';
  window.location.href = '/'; */

reciepes?.addEventListener('submit', (e) => {
  e.preventDefault();
  const { title, detail } = e.target;

  postData({ title: title.value.trim(), detail: detail.value.trim(), userId: userInfo.id }, '/user/addReciepes')
    .then((data) => renderDom(data[0]))
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
