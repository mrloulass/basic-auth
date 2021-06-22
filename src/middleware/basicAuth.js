`uses strict`
const Users = require('../models/index.js');
const bcrypt = require('bcrypt');
const base64 = require('base-64');

module.exports = async(req,res,next)  =>{
  let basicHeaderParts = req.headers.authorization.split(' ');  
  let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(':'); // username, password
  try {
    const user = await Users.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      req.user = user;
      next();
      res.status(200).json(user);
    }
    else {
      throw new Error('Invalid User')
    }
  } catch (error) { res.status(403).send("Invalid Login"); }

}
