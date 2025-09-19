const User=require("../Model/user.js");

const userController={
    LoginPage:(req,res)=>{
        res.render("index.ejs");
    },
    RegistePage:(req,res)=>{
        res.render("register.ejs");
    },
    HomePage:(req,res)=>{
        res.render("home.ejs");
    },
    StudentPage:(req,res)=>{
        res.render("student.ejs");

    },
    AttendacePage:(req,res)=>{
        res.render("attendance.ejs");
    },
      GradePage:(req,res)=>{
        res.render("grade.ejs");
    },
      ReportPage:(req,res)=>{
        res.render("report.ejs");
    },
    Register:async(req,res)=>{
       try {
      const {username, email, password } = req.body;
      const newUser = new User({username, email });
      const registeredUser = await User.register(newUser, password);

        await registeredUser.save();
        res.redirect("/");
    } catch (err) {
      console.error("Signup Error:", err.message);
      res.status(500).json({ msg: "Signup failed", error: err.message });
    }
    },
    Login:(req,res)=>{
        res.redirect("/home");

    },
    Logout:(req,res)=>{
           try {
        req.logOut((err) => {
            if (err) {
                nextTick(err);
            }
            res.redirect("/");
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).send("please fill the data");
    }
    }
}

module.exports=userController;
