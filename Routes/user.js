const express=require("express");
const router=express.Router();
const userController=require("../Controller/user.js");

router.get("/",userController.homePage);

module.exports=router;