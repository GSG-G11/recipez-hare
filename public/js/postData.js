const postData = (data, url) => fetch(url, { method: 'POST', headers: { 'Content-type': 'application/json' }, body: JSON.stringify(data) })
  .then((obj) => obj.json())
  .catch((err) => console.log(err));

export default postData;
