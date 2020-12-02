// CRUD stand for Create, Read, Update, Delete

// https://jsonplaceholder.typicode.com/

// Methods

// Read - operation
// GET - method
// status 200

// Craete - operation
// POST - method
// status 201

// Update - operation
// PUT - method
// PATCH - method
// status 204

// Delete - operation
// DELETE - method
// status 202

// 4.x.x 
// 400 - Bad Request
// 404 - Not Found

// 5.x.x

// https://jsonplaceholder.typicode.com/posts

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

// GET (Listing)
const getPosts = fetch(`${baseUrl}`)
.then(res => res.json());


getPosts.then((posts) => {
  console.log(posts);
});

// const create = (url = '', requestBodyData = {}) => {
//   return fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(requestBodyData)
//   }).then(response => response.json());
// }

// const createPost = () => {
//   const postData = {
//     id: 101,
//     userId: 10, 
//     title: 'Post 101 title',
//     body: 'Body 101'
//   };

//   return create(`${baseUrl}`, postData).then(data => {
//     console.log(data);
//   });
// }

// createPost();

// getPosts.then((posts) => {
//   console.log(posts);
// });


// // Create
// const createMethod = (url = '', requestData = {}) => {
//   return fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(requestData)
//   }).then(response => response.json());
// };

// const createPostSecond = () => {
//   const postData = {
//     userId: 1, 
//     title: 'Post 102 title',
//     body: 'Body 102'
//   };

//   return createMethod(`${baseUrl}`, postData).then(posts => console.log('New post', posts));
// };

// createPostSecond();

// https://jsonplaceholder.typicode.com/posts/1


// const getMethod = (url = '', queryParams = '') => {
//   return fetch(`${url}/${queryParams}`).then(response => response.json());
// }

// const getPostById = (id) => {
//   return getMethod(`${baseUrl}`, id)
//     .then(post => console.log('Get post by id', post));
// }

// getPostById(2);

// const getAlbumById = (id) => {
//   return getMethod();
// };

// const updateMethod = (url = '', queryParams = '', requestData = {}) => {
//   return fetch(`${url}/${queryParams}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(requestData)
//   }).then(response => response.json());
// };

// const updatePost = (id) => {
//   const updateData = {
//     userId: 10, 
//     title: 'Title *updated',
//     body: 'Body *updated'
//   };

//   return updateMethod(baseUrl, id, updateData)
//   .then(post => console.log('Updated post', post))
// }

// updatePost(92);


//comments?postId=1
//
// const fetchComments = (url = '', queryParams = '') => {
//   return fetch(`${url}?postId=${queryParams}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then(response => response.json());
// };

// const deleteMethod = (url = '', queryParams = '') => {
//   return fetch(`${url}/${queryParams}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then(response => response.json());
// };

// const deletePostById = (id) => {
//   return deleteMethod(baseUrl, id).then(data => console.log('Removed!', data));
// };

// deletePostById(8);