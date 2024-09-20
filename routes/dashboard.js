const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const ensureAuthenticated = require('../middleware/auth');

// Dashboard route
router.get('/',ensureAuthenticated, async (req, res) => {
    const posts = await Post.find({ author: req.user.name }).sort({ createdAt: -1 });
    res.render('dashboard', { posts: posts, user: req.user });
});

module.exports = router;
