const express = require('express');

const router = express.Router();

const isLogged = (req, res, next) => {
  req.user ? next() : res.redirect('/user/no-permission');
};

router.get('/logged', isLogged, (req, res) => {
  res.render('logged', { avatar: req.user.photos[0].value, username: req.user.displayName });
});

router.get('/profile', isLogged, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('settings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;
