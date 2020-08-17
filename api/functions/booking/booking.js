const express = require("express");
let router = express.Router();
const fb = require('../admin');
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 5 minutes
  max: 100 // limit each IP to 2 requests per windowMs
});

router.use(limiter);
const checkAuth = async (req, res, next) => {
  const token = req.get('X-API');
  if(!token) {
    res.status(401).send();
  }

  try{
    const user = await fb.auth().verifyIdToken(token);
    req.user = user;
    next()
  }catch(e){
    console.log(e);
    res.status(403).send(e);
  }
}

router.use(checkAuth);


router
  .route("/")
  .get((req, res) => {
    res.json({
      message: req.user,
    })
  })
  .post((req, res) => {
    res.json({
      user: req.user,
    })
  });

module.exports = router;
