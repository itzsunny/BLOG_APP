const express = require("express");
const router = express.Router();
const Article = require("../models/article");
const User = require("../models/user");
const auth = require("../middleware/auth");
const logged = auth.isLoggedin;




// register

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res, next) => {
  User.create(req.body, (err, user) => {
    err ? next(err) : res.redirect("/articles/login");
  });
});

// get login

router.get("/login", (req, res) => {
  res.render("login");
});

// verify login

router.post("/login", (req, res, next) => {
  let { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) return next(err);
    if (!user) return next("enter a valid email ID");
    if (user.verifyPassword(password)) return res.redirect("/articles/login");
    // login user by creating a session
    req.session.userId = user.id;
    res.redirect("/articles");
  });
});

/* GET articles listing. */

router.get("/create",logged,(req, res, next) => {
  res.render("newarticle");
});

// Create Articles

router.post("/", logged,(req, res, next) => {
  Article.create(req.body, (err, user) => {
    if (err) return next(err);
    res.redirect("/articles");
  });
});

// GET all Articles

router.get("/", (req, res, next) => {
  Article.find({}, (err, user) => {
    if (err) return next(err);
    res.render("articles", { user });
  });
});

// single article

router.get("/:id",(req, res, next) => {
  let id = req.params.id;
  Article.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("article", { user });
  });
});

// render updateuserinfo

router.get("/:id/updateinfo",logged, (req, res, next) => {
  let id = req.params.id;
  Article.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("updateinfo", { user });
  });
});

// update and redirect

router.post("/:id",logged, (req, res, next) => {
  let id = req.params.id;
  Article.findByIdAndUpdate(id, req.body, (err, user) => {
    if (err) return next(err);
    res.redirect(`/articles/${id}`);
  });
});

// delete user

router.get("/:id/delete",logged,(req, res, next) => {
  let id = req.params.id;
  Article.findByIdAndRemove(id, (err, deleted) => {
    if (err) return next(err);
    res.redirect("/articles");
  });
});


module.exports = router;
