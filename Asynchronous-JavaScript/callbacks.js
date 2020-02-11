const posts_callbacks = [
  { title: 'Post One', body: 'This is post one in callbacks.js' },
  { title: 'Post Two', body: 'This is post two in callbacks.js' }
];

function getPosts_callbacks() {
  setTimeout(() => {
    let output = '';
    posts_callbacks.forEach((post, index) => {
      output += `<li>${post.title} - ${post.body}</li>`;
    });
    document.getElementById('callback').innerHTML = output;
  }, 50);
}

function createPost_callbacks(post, callback) {
  setTimeout(() => {
    posts_callbacks.push(post);
    callback();
  }, 60);
}

createPost_callbacks({ title: 'Post Three', body: 'This is post three in callbacks.js' }, getPosts_callbacks);