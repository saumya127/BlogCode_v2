const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next(); // User is authenticated, proceed to the next middleware/route handler
    }
    req.flash('error_msg', 'You must be logged in to view that resource.');
    res.redirect('/login'); // Redirect to login if not authenticated
};

module.exports = ensureAuthenticated;
