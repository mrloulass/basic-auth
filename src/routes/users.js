'use strict';

const express  = require ('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');

const Users = require ('../models/index.js');

const router = express.Router();

router.post('/signup', userSignup);
router.post('/signin', userSignin);

async function userSignup(req, res){
try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
}
// Users data is not up loading
