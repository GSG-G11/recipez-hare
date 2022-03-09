export default () => {
  let result = '';
  try {
    result = JSON.parse(atob(Object.fromEntries(new URLSearchParams(document.cookie)).info.split('.')[1]));
  } catch (e) {
    return { username: '' };
  }
  return result;
};
