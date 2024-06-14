function timeAgo(postTime) {
  let now = new Date();
  let postDate = new Date(postTime);
  let diffInSeconds = Math.floor((now - postDate) / 1000);
  let getUnit = (unitInSeconds, unitName, pluralSuffix = 'e') => {
    let unit = Math.floor(diffInSeconds / unitInSeconds);
    return unit ? `${unit} ${unitName}${unit > 1 ? pluralSuffix : ''}` : null;
  };
  return getUnit(60 * 60 * 24 * 30, 'Monat', 'e') ||
    getUnit(60 * 60 * 24, 'Tag', 'e') ||
    getUnit(60 * 60, 'Stunde', 'n') ||
    getUnit(60, 'Minute', 'n') ||
    (diffInSeconds < 60 ? 'gerade eben' : null);
}

function getArray() {
  users = loadArray('users') || users;
  posts = loadArray('posts') || posts;
  activeUser = loadArray('activeUser') || activeUser;
}

function loadArray(key) {
  x = localStorage.getItem(key);
  if (x) {
    return JSON.parse(x);
  } else {
    setArray();
  }
}

function setArray() {
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('posts', JSON.stringify(posts));
  localStorage.setItem('activeUser', JSON.stringify(activeUser));
}