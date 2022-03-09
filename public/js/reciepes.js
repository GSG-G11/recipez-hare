const cards = document.querySelector('.cards');
const renderDom = ((obj) => {
  const card = document.createElement('div');
  card.className = 'card';
  const headerCard = document.createElement('div');
  headerCard.className = 'headerCard';
  const publicherInfo = document.createElement('div');
  publicherInfo.className = 'publicherInfo';

  const title = document.createElement('p');
  title.className = 'userName';
  title.textContent = obj.username;

  publicherInfo.appendChild(title);
  headerCard.append(publicherInfo);

  const content = document.createElement('div');
  content.className = 'contant';

  const image = document.createElement('img');
  image.className = 'img';
  image.src = './hero-bg.jpg';

  const div2 = document.createElement('div');
  const titleRecipy = document.createElement('p');
  titleRecipy.className = 'caption';
  titleRecipy.textContent = obj.title;
  const detail = document.createElement('p');
  detail.className = 'caption';
  detail.textContent = obj.details;

  content.append(image, div2);

  div2.append(titleRecipy);
  div2.append(detail);
  card.append(headerCard, content);
  cards.append(card);
});
