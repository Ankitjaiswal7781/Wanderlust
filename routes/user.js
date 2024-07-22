const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js");

const userController=require("../controllers/user.js");


router.route("/signup")
//render Signup route
.get(userController.renderSignupForm )
//Signup route
.post( wrapAsync(userController.signup));


router.route("/login")
//render Login route
.get(userController.renderLoginForm)
//Login route
.post(saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), userController.login);


//logout route
router.get("/logout",userController.logout);

module.exports = router;