const posts = [
  { title: 'Post One', body: 'This is post one in promises.js' },
  { title: 'Post Two', body: 'This is post two in promises.js' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title} - ${post.body}</li>`;
    });
    document.getElementById('promises').innerHTML = output;
  }, 1000);
}

console.log()

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

/*
Using individual then/catch 
createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(err => console.log(err));
*/


/*
// Promise.all:
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, 'Goodbye')
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
  res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then(values =>
    console.log(values)
);
*/


// Async / Await version of Promise.all
async function init() {
  await createPost({ title: 'Post Three', body: 'This is post three in promises.js' });

  getPosts();
}

init();


// Asunc / Await / Fetch version of Promise.all
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); // returns promise
  
    const data = await res.json(); // map response to json 
  
    console.log(data);
}
  
fetchUsers();


