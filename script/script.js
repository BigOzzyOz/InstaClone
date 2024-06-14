getArray();

function render() {
  renderStories();
  renderfollowSuggest();
  renderPosts();
}

function renderStories() {
  let countStories = 0;
  let stories = document.getElementById('storiesSuggest');

  stories.innerHTML = '';
  for (let i = 0; i < users.length; i++) {
    if (users[i]['followed'] == true && countStories < 5) {
      stories.innerHTML += insertStories(i);
      countStories++;
    }
  }
}

function renderfollowSuggest() {
  let countFollower = 0;
  let followSuggest = document.getElementById('followSuggest');
  followSuggest.innerHTML = '';
  followSuggest.innerHTML += staticFollowerSuggest();
  for (let i = 0; i < users.length; i++) {
    if (users[i]['followed'] == false && countFollower < 10) {
      followSuggest.innerHTML += insertFollowerSuggest(i);
      countFollower++;
    }
  }
}

function renderPosts() {
  let post = document.getElementById('postings');
  post.innerHTML = '';
  for (let i = 0; i < posts.length; i++) {
    post.innerHTML += renderTop(i);
  }
}

function renderComments(postsIndex) {
  let comment = document.getElementById(`commentsSeen${postsIndex}`);
  let commentsLength = posts[postsIndex]['comments'].length;
  comment.innerHTML = '';
  for (let i = 0; i < commentsLength; i++) {
    comment.innerHTML += renderCommentsText(postsIndex, i);
  };
  document.getElementById(`comments${postsIndex}`).onclick = function () { renderMid(postsIndex); };
  comment.classList.remove('d-none');
}

function addComment(postIndex) {
  let name = activeUser[0]['name'];
  let newComment = document.getElementById(`selfComment${postIndex}`);
  if (newComment.value !== '') {
    posts[postIndex]['comments'].unshift({ 'name': name, 'comment': newComment.value });
    newComment.value = '';
    renderMid(postIndex);
    renderComments(postIndex);
    setArray();
  } else {
    alert('Bitte Kommentarfeld Ausfüllen');
  }
}

function pressLike(postsIndex) {
  let heart = document.getElementById(`heart${postsIndex}`);

  if (posts[postsIndex]['liked'] == true) {
    posts[postsIndex]['liked'] = false;
    posts[postsIndex]['likes'] = posts[postsIndex]['likes'] - 1;
  } else {
    posts[postsIndex]['liked'] = true;
    posts[postsIndex]['likes'] = posts[postsIndex]['likes'] + 1;
  }
  renderMid(postsIndex);
  setArray();
}

function addPost() {
  if (document.getElementById('newLoc').value !== '' && document.getElementById('newImg').value !== '' && document.getElementById('newDes').value !== '') {
    posts.push({ 'profilePic': activeUser[0]['profilePic'], 'name': activeUser[0]['name'], 'location': document.getElementById('newLoc').value, 'img': document.getElementById('newImg').value, 'description': document.getElementById('newDes').value, 'time': new Date(), 'liked': false, 'likes': 0, 'comments': [] });
    renderPosts();
    closePost();
    setArray();
  } else {
    alert('Bitte Alle Felder Ausfüllen');
  }
}

function createPost() {
  document.getElementById('createPost').classList.remove('d-none');
}

function closePost() {
  document.getElementById('newLoc').value = '';
  document.getElementById('newImg').value = '';
  document.getElementById('newDes').value = '';
  document.getElementById('createPost').classList.add('d-none');
}

function follow(userIndex) {
  users[userIndex]['followed'] = true;

  renderStories();
  renderfollowSuggest();
  setArray();
}

function deFollow(userIndex) {
  users[userIndex]['followed'] = false;

  renderStories();
  renderfollowSuggest();
  setArray();
}