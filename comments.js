// Create web server
// 1. Create a new Express web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for GET /comments/:id
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id
// 7. Create a route for GET /posts/:postId/comments
// 8. Create a route for POST /posts/:postId/comments
// 9. Create a route for GET /posts/:postId/comments/:id
// 10. Create a route for PUT /posts/:postId/comments/:id
// 11. Create a route for DELETE /posts/:postId/comments/:id

// 1. Create a new Express web server
const express = require('express');
const app = express();

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.send('GET /comments');
});

// 3. Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.send('POST /comments');
});

// 4. Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('GET /comments/:id');
});

// 5. Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  res.send('PUT /comments/:id');
});

// 6. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.send('DELETE /comments/:id');
});

// 7. Create a route for GET /posts/:postId/comments
app.get('/posts/:postId/comments', (req, res) => {
  res.send('GET /posts/:postId/comments');
});

// 8. Create a route for POST /posts/:postId/comments
app.post('/posts/:postId/comments', (req, res) => {
  res.send('POST /posts/:postId/comments');
});

// 9. Create a route for GET /posts/:postId/comments/:id
app.get('/posts/:postId/comments/:id', (req, res) => {
  res.send('GET /posts/:postId/comments/:id');
});

// 10