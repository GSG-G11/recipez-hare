export default () => JSON.parse(atob(Object.fromEntries(new URLSearchParams(document.cookie)).info.split('.')[1])) || 'no cookie';
