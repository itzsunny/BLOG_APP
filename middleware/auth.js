

//  handle Access
exports.isLoggedin = (req,res,next) => { 
  if (req.session && req.session.userId) {
    next()
  } else {
    res.redirect("/articles/login");
  }
}
