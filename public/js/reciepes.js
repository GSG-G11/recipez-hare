const cards = document.querySelector('.cards');
const renderDom = ((obj) => {
  console.log(obj);
  const card = document.createElement('div');
  card.className = 'card';
  const headerCard = document.createElement('div');
  headerCard.className = 'headerCard';
  const publicherInfo = document.createElement('div');
  publicherInfo.className = 'publicherInfo';
  const userImage = document.createElement('img');
  userImage.src = './users.jpeg';
  const title = document.createElement('p');
  title.className = 'userName';
  title.textContent = 'farah';
  publicherInfo.appendChild(userImage);
  publicherInfo.appendChild(title);
  headerCard.append(publicherInfo);

  const content = document.createElement('div');
  content.className = 'contant';

  const image = document.createElement('img');
  image.className = 'img';
  image.src = obj.image_url;

  const div2 = document.createElement('div');
  const caption = document.createElement('p');
  caption.className = 'caption';
  caption.textContent = obj.details;
  content.append(image, div2);

  div2.append(caption);
  card.append(headerCard, content);
  cards.append(card);
});
