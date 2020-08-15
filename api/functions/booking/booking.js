const express = require("express");
let router = express.Router();
const fb = require('../admin');


router.use( async(req, res, next) => {
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
})

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
