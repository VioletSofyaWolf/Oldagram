const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

const likeBtn = document.getElementById('like-btn');
const postBtn = document.getElementById('post-btn');
const postLikes = document.getElementById('post-likes');

const post = document.getElementById('post');

renderPosts();

function renderPosts() {
  for (let i = 0; i < posts.length; i++) {
    post.innerHTML += `
    
      <section class="user-info">
        <img class="avatar-image" src="${posts[i].avatar}" />
        <div class="info">
          <p class="name">${posts[i].name}</p>
          <p class="location">${posts[i].location}</p>
        </div>

      </section>
      <img id="post-btn" class="post-image" src="${posts[i].post}" />

      <section class="post-icons">
        <img id="like-btn" class="icon-image" src="./images/icon-heart.png" />
        <img class="icon-image" src="./images/icon-comment.png" />
        <img class="icon-image" src="./images/icon-dm.png" />
      </section>

      <section class="post-info">
        <p id="post-likes" class="likes">${posts[i].likes} likes</p>
        <p class="username"><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
      </section>

    `;
  }
}

// function addLike() {
//   postLikes.innerHTML = `${posts[0].likes++} likes`;
//   console.log('Clicked!');
// }

// likeBtn.addEventListener('dblclick', addLike);
// postBtn.addEventListener('dblclick', addLike);
