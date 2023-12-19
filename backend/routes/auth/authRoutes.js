const express = require('express');
const { login, registerUser,updatePassword } = require('../../controller/auth/authController');
const router = express.Router();


 /*------------------------register routes--------------------------------*/
//registering user
router.route('/register')
.post(registerUser);


/*------------------------login routes--------------------------------*/
//user login route
router.route('/login')
.post(login);
//getting all users
 
/*------------------------update password routes--------------------------------*/

router.route("/update-password").put( updatePassword);


module.exports=router;
