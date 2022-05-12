const express = require('express');
const router = express.Router();
const postcontroller = require('../controllers/post');
const commentcontroller = require('../controllers/comments');

router.post('/api/v1/post', postcontroller.createPost);
router.get('/api/v1/posts', postcontroller.Posts);
router.get('/api/v1/post/:postId', postcontroller.getPost);
router.put('/api/v1/post/update/:postId', postcontroller.updatePost);
router.delete('/api/v1/post/delete/:postId', postcontroller.deletePost);

router.post('/api/v1/post/comment/:postId', commentcontroller.createComment);
router.get('/api/v1/comments', commentcontroller.Comments);

module.exports = router;
