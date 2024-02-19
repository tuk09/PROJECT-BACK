const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const db = require("../models/db");

exports.register = async (req, res, next) => {
  const { username, password, confirmPassword, email, otheruserdetails } = req.body;
  try {
    if (!(username && password && confirmPassword)) {
      return next(new Error("Fulfill all inputs"));
    }
    if (confirmPassword !== password) {
      throw new Error("confirm password not match");
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);
    const data = {
      username,
      password : hashedPassword,
      email,
      otheruserdetails
    };

    const rs = await db.users.create({ data  })
    console.log(rs)

    res.json({ msg: 'Register successful' })
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const {username, password} = req.body
  try {
    
    if( !(username.trim() && password.trim()) ) {
      throw new Error('username or password must not blank')
    }
    
    const users = await db.users.findFirstOrThrow({ where : { username }})
    
    const pwOk = await bcrypt.compare(password, users.password)
    if(!pwOk) {
      throw new Error('invalid login')
    }
    
    const payload = { id: users.id }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d'
    })
    console.log(token)
    res.json({token : token})
  }catch(err) {
    next(err)
  }
};

exports.getme = (req,res,next) => {
  res.json(req.users)
}