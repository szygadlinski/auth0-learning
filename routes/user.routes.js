const express = require('express');

const router = express.Router();

router.get('/logged', (req, res) => {
  res.render(req.user ? 'logged' : 'noPermission');
});

router.get('/profile', (req, res) => {
  res.render(req.user ? 'profile' : 'noPermission');
});

router.get('/profile/settings', (req, res) => {
  res.render(req.user ? 'settings' : 'noPermission');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;
