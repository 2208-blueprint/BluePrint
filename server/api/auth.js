<<<<<<< HEAD
const User = require('../db/User.js')
const router = require('express').Router()
const passport = require('passport');
const CLIENT_URL = 'http://localhost:3000/';
const jwt = require('jsonwebtoken')
=======
const User = require("../db/User.js");
const router = require("express").Router();
>>>>>>> 682227933fe070c0f27a5cecb98fd157968cf497

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (ex) {
    next(ex);
  }
});

router.get('/login/failed', (req, res) => {
  res.status(401).json({
      success: false,
      message: 'Login failed'
  })
})

router.get('/login/success', async(req, res) => {

  if (req.user) {
      res.status(200).json({
          success: true,
          message: 'Login successful',
          user: req.user,
          // jwt token here or cookies
          // token:
      })
  }
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

router.get('/google/callback', passport.authenticate('google', {
  successRedirect: CLIENT_URL,
  failureRedirect: '/login/failed'
}))

router.get('/github', passport.authenticate('github', {
  scope: ['profile']
}))

router.get('/github/callback', passport.authenticate('github', {
  successRedirect: CLIENT_URL,
  failureRedirect: '/login/failed'
}))

router.get('/facebook', passport.authenticate('facebook', {
  scope: ['profile']
}))

router.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: CLIENT_URL,
  failureRedirect: '/login/failed'
}))

// sign up on website, (takes whatever is in req.body)
router.post("/signup", async (req, res, next) => {
  try {
    let newUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!newUser) {
<<<<<<< HEAD
      newUser = await User.create(req.body)
      console.log(req.body)
      res.status(200).send({ token: await User.authenticate(req.body)})
    }
    else {
      console.log('hit')
      res.sendStatus(403)
=======
      newUser = await User.create(req.body);
      res.status(200).send({ token: await User.authenticate(req.body) });
    } else {
      res.sendStatus(403);
>>>>>>> 682227933fe070c0f27a5cecb98fd157968cf497
    }
  } catch (ex) {
    next(ex);
  }
});

router.get("/", requireToken, async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
