'use strict';

const express  = require ('express');

const { users } = require ('../models/index.js');

const router = express.Router();

const basicMiddleware = require('../middleware/basicAuth.js');

router.post('/signup', userSignup);
router.post('/signin', basicMiddleware, userSignin);

async function userSignup(req, res){
try {
    //req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await users.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
}

async function userSignin (req, res) {
  let user = req.user;
  res.status(200).json(user);
}

module.exports = router;
