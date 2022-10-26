const User = require("../db/User.js");
const router = require("express").Router();
const passport = require("passport");

if (process.env.NODE_ENV !== "production") {
  require("../../secrets.js");
}

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

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Login failed",
  });
});

//Route called in Redirect.js if social login is successful
router.get("/login/success", async (req, res, next) => {
  const password = process.env.RPW;

  let email = "";
  let profilePicUrl = "";
  let socialUserName = "";
  let socialFirstName = "";
  let socialLastName = "";

  //Check which social login is used and sets default variables above
  if (req.user.provider === "google") {
    socialUserName = req.user.displayName;
    socialFirstName = req.user["_json"].given_name;
    socialLastName = req.user["_json"].family_name;
    email = req.user["_json"].email;
    profilePicUrl = req.user.photos[0].value;
  }
  if (req.user.provider === "github") {
    socialUserName = req.user.displayName;
    socialFirstName = req.user["_json"].given_name;
    socialLastName = req.user["_json"].family_name;
    email = req.user.emails[0].value;
    profilePicUrl = req.user.profileUrl;
  }
  if (req.user.provider === "twitch") {
    socialUserName = req.user.display_name;
    socialFirstName = req.user.display_name;
    socialLastName = "";
    email = req.user.email;
    profilePicUrl = req.user.profile_image_url;
  }

  let userCheck = await User.findOne({
    where: {
      email,
    },
  });

  if (!userCheck) {
    const newUser = await User.create({
      username: socialUserName,
      firstName: socialFirstName,
      lastName: socialLastName,
      password: password,
      email,
      img: profilePicUrl,
    });

    userCheck = newUser;
  }

  const token = userCheck.generateToken();

  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: req.user,
      password: password,
      token: token,
      img: profilePicUrl,
    });
  }
});

//Route called on social login and callback route on way back with success or fail
router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/redirect",
    failureRedirect: "/login/failed",
  })
);

router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["user:email"],
  })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "/redirect",
    failureRedirect: "/login/failed",
  })
);

router.get("/twitch", passport.authenticate("twitch"));

router.get(
  "/twitch/callback",
  passport.authenticate("twitch", {
    successRedirect: "/redirect",
    failureRedirect: "/login/failed",
  })
);

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
      res.status(403).send("User already exists");
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
