const express=require("express");
const router=express.Router();
const userController=require("../Controller/user.js");
const passport=require("passport");


router.get("/",userController.LoginPage);
router.get("/register",userController.RegistePage);
router.get("/home",userController.HomePage);
router.get("/student",userController.StudentPage);
router.get("/attendance",userController.AttendacePage);
router.get("/grade",userController.GradePage);
router.get("/report",userController.ReportPage);
router.post("/register",userController.Register);
router.post("/login", passport.authenticate("local", { failureRedirect: "/", failureFlash: true }), userController.Login);
router.get("/logout",userController.Logout);
module.exports=router;