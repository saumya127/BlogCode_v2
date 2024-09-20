const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const ensureAuthenticated = require('../middleware/auth');

// Get all posts
router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render('dashboard', { posts: posts, user: req.user });
});

router.get('/new', async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render('new-post', { posts: posts, user: req.user });
});

// Create new post
router.post('/', ensureAuthenticated, async (req, res) => {
    const { title, excerpt, body } = req.body;
    const newPost = new Post({ title, excerpt, body, author: req.user.name });

    await newPost.save();
    res.redirect('/dashboard');
});

// Get single post
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', { post: post, user: req.user });
});

// Edit post
router.get('/:id/edit', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('edit-post', { post: post });
});

// Update post
router.put('/:id', async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/posts/${req.params.id}`);
});

// Delete post
router.delete('/:id', async (req, res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.redirect('/dashboard');
});

module.exports = router;
