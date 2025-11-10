const User = require("../models/user");
//Render Signup
module.exports.renderSignupForm =(req, res) => {
  res.render("users/signup.ejs");
};


//SignUp Route
module.exports.signup = async (req, res) => {
    try {
      let { username, email, password } = req.body;         
      const newUser = new User({ email, username });
      const registeredUser = await User.register(newUser, password);
    //user details
      console.log(registeredUser);
      req.login(registeredUser, (err) =>{
        if(err){
          return next(err);
        }
        req.flash("success", "Welcome to wanderlust!");
       res.redirect("/listings");
      })
      
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  };


  //Render Login
  module.exports.renderLoginForm = (req, res) => {
    //console.log("login error hai bro");
  res.render("users/login.ejs");
};

//Login
module.exports.login = async (req, res) => {
      
    req.flash("success","Welcome back to wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  };

  //Logout
  module.exports.logout = (req, res) =>{
  req.logOut((err) =>{
    if(err){
      return next(err)
    }
    req.flash("success", "you are logge out");
    res.redirect("/listings");
  })
};