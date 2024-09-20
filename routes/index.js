const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// @route   GET /
// @desc    Show homepage with recent posts
// @access  Public
router.get('/', async (req, res) => {
    try {
        // Fetch recent posts from the database, limiting to 5 posts
        const posts = await Post.find().sort({ createdAt: -1 })
        console.log(posts);
        
        // Render the index.ejs view, passing the posts and user data
        res.render('index', {
            posts: posts,
            user: req.user
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.get("/auth/login", (req, res) => {
    res.render("login");
});

router.get("/auth/register", (req, res) => {
    res.render("register");
});


module.exports = router;
