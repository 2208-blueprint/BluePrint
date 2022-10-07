const User = require('../db/User.js')
const router = require('express').Router()
const passport = require('passport');
const CLIENT_URL = 'http://localhost:3000/api/auth/login/success';
const jwt = require('jsonwebtoken')


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

router.get('/test', requireToken, (req, res, next) => {
  try {
    console.log('success');
    res.sendStatus(200)
  }
  catch (err) {
    console.log(err);
  }
})


router.get('/login/success', async(req, res, next) => {
  const userName = require('crypto').randomBytes(64).toString('hex')
  const password = require('crypto').randomBytes(64).toString('hex')

  let email = '';

  if (req.user.provider === 'google') { email = req.user['_json'].email }
  if (req.user.provider === 'github') { email = req.user.emails[0].value }

  let userCheck = await User.findOne({
    where: {
      email,
    }
  })

  if (!userCheck) {
    const newUser = await User.create({
      username: userName,
      password: password,
      email,

    })

    userCheck = newUser
  }

  const token = userCheck.generateToken();

  if (req.user) {
      res.status(200).json({
          success: true,
          message: 'Login successful',
          user: req.user,
          // jwt token here or cookies
          token: token,
      })
  }
})

router.get('/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/userinfo.email']
}))

router.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/redirect',
  failureRedirect: '/login/failed'
}))

router.get('/github', passport.authenticate('github', {
  scope: ['user:email']
}))

router.get('/github/callback', passport.authenticate('github', {
  successRedirect: '/redirect',
  failureRedirect: '/login/failed'
}))

router.get('/facebook', passport.authenticate('facebook', {
  scope: ['profile']
}))

router.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/redirect',
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
      newUser = await User.create(req.body);
      res.status(200).send({ token: await User.authenticate(req.body) });
    } else {
      res.sendStatus(403);
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
