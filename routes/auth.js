const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User'); // Adjust the path if needed

// Login route
router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/login',
    failureFlash: true // Enable flash messages
}));

// Register route
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });

        // Save user to the database
        await newUser.save();
        res.redirect('/auth/login');
    } catch (error) {
        console.error(error);
        res.redirect('/auth/register');
    }
});

module.exports = router;
