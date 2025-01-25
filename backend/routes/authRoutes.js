// const express = require('express');
// const {register,login} = require('../controllers/authController');
// const authenticateToken = require('../midddleware/authMiddleWares');

import express from 'express'
import {register,login}from '../controllers/authController.js'
import authenticateToken from'../middlewares/authMiddleWares.js'


const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/protected',authenticateToken,(req,res) =>{
    res.json({message:'acesso permitido!',user:req.user});
});

export default router