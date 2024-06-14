function gotComments(postsIndex) {
  if (posts[postsIndex]['comments'].length == 0) {
    return /*html*/`
      <p class="comments">Bisher keine Kommentare</p>
    `;
  } else {
    return /*html*/`
      <p id="comments${postsIndex}" class="comments" onclick="renderComments(${postsIndex})">Alle ${posts[postsIndex]['comments'].length} Kommentare zeigen</p>
    `;
  }
}

function insertFollowerSuggest(userIndex) {
  return /*html*/`
    <div class="profile">
      <img src="${users[userIndex]['profilePic']}" class="profilePic" alt="">
      <div class="followTag">
        <p class="topLine">${users[userIndex]['name']}</p>
        <p class="bottomLine">Vorschlag für dich</p>
      </div>
        <a href="#" class="topLine" onclick="follow(${userIndex})">Folgen</a>
    </div>
  `;
}

function insertStories(userIndex) {
  return /*html*/`
    <div class="gradientBorder">
      <img src="${users[userIndex]['profilePic']}" class="profilePic" alt="">
      <img src="assets/icons/circle-xmark-solid-red.svg" class="behind" alt="red x mark" onclick="deFollow(${userIndex})">
    </div>
	`;
}

function liked(postsIndex) {
  if (posts[postsIndex]['liked'] == true) {
    return /*html*/`
      <img src="assets/icons/heart-solid-main.svg" class="postIcon" id="heart${postsIndex}" onclick="pressLike(${postsIndex})">
    `;
  } else {
    return /*html*/`
      <img src="assets/icons/heart-regular-main.svg" class="postIcon" id="heart${postsIndex}" onclick="pressLike(${postsIndex})">
    `;
  }
}

function renderCommentsText(postsIndex, commentsIndex) {
  return /*html*/`
    <p class="commentsName">${posts[postsIndex]['comments'][commentsIndex]['name']}</p>
    <p class="commentsText">${posts[postsIndex]['comments'][commentsIndex]['comment']}</p>
	`;
}

function renderMid(postsIndex) {
  let part = document.getElementById(`midPost${postsIndex}`);
  part.innerHTML = '';
  part.innerHTML = /*html*/`
    <div class="iconsPost">
      ${liked(postsIndex)}
      <img src="assets/icons/comments-regular-main.svg" class="postIcon" alt="">
      <img src="assets/icons/share-from-square-regular-main.svg" class="postIcon" alt="">
    </div>
    <div class="bottomPostText">
      <p class="description">${posts[postsIndex]['description']}</p>
      <p class="likes">${posts[postsIndex]['likes']} Likes</p>
      ${gotComments(postsIndex)}
    </div>
    <div id="commentsSeen${postsIndex}" class="d-none commentsSeen customScroll"></div>
      <div class="inputField">
        <input type="text" id="selfComment${postsIndex}" placeholder="Kommentieren....">
        <button class="sendComment" onclick="addComment(${postsIndex})">
          <img src="assets/icons/paper-plane-regular-gold.svg" class="navIcon" alt="">
          <img src="assets/icons/paper-plane-solid-gold.svg" class="hoverIcon" alt="">
        </button>
      </div>
    </div>
  `;
}

function renderTop(postsIndex) {
  return /*html*/`
    <div class="post">
      <div class="topPost">
        <img src="${posts[postsIndex]['profilePic']}" class="profilePic" alt="">
        <div class="topPostRight">
          <div class="topPostInfo">
            <p class="topLine">${posts[postsIndex]['name']}</p>
            <p class="bottomLine">${posts[postsIndex]['location']}</p>
          </div>
          <p class="timePost">${timeAgo(posts[postsIndex]['time'])}</p>
        </div>
      </div>
      <div class="imagePost">
        <img src="${posts[postsIndex]['img']}" class="imgPost" alt="">
      </div>
      <div id="midPost${postsIndex}" class="bottomPost">
        <div class="iconsPost">
          ${liked(postsIndex)}
          <img src="assets/icons/comments-regular-main.svg" class="postIcon" alt="">
          <img src="assets/icons/share-from-square-regular-main.svg" class="postIcon" alt="">
        </div>
        <div class="bottomPostText">
          <p class="description">${posts[postsIndex]['description']}</p>
          <p class="likes">${posts[postsIndex]['likes']} Likes</p>
          ${gotComments(postsIndex)}
        </div>
        <div id="commentsSeen${postsIndex}" class="d-none commentsSeen customScroll"></div>
        <div class="inputField">
          <input type="text" id="selfComment${postsIndex}" placeholder="Kommentieren....">
          <button class="sendComment" onclick="addComment(${postsIndex})">
            <img src="assets/icons/paper-plane-regular-gold.svg" class="navIcon" alt="">
            <img src="assets/icons/paper-plane-solid-gold.svg" class="hoverIcon" alt="">
          </button>
        </div>
      </div>
    </div>   
	`;
}

function staticFollowerSuggest() {
  return /*html*/`
    <div class="profile">
      <img src="${activeUser[0]['profilePic']}" class="profilePic" alt="">
      <div class="followTag">
        <p class="topLine">${activeUser[0]['name']}</p>
        <p class="bottomLine">${activeUser[0]['clearName']}</p>
      </div>
      <a href="#" class="topLine">Wechseln</a>
    </div>
    <div class="profile gap">
      <p class="topLine">Vorschläge für dich</p>
      <a href="#" class="topLine">Alle Ansehen</a>
    </div>
  `;
}