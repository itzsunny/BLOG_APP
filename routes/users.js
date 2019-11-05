const express = require("express");
const router = express.Router();
const User = require("../models/user");

/* GET users listing. */

router.get("/create", (req, res, next) => {
  res.render("newarticle");
});

// POST users

router.post("/", (req, res, next) => {
  User.create(req.body, (err, user) => {
    if (err) return next(err);
    res.redirect("/users");
  });
});

// GET all users

router.get("/", (req, res, next) => {
  User.find({}, (err, user) => {
    if (err) return next(err);
    res.render("users", { user });
  });
});

// single articles

router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("article", { user });
  });
});

// render updateuserinfo

router.get("/:id/updateuserinfo", (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("updateuserinfo", { user });
  });
});

// update and redirect

router.post("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, user) => {
    if (err) return next(err);
    res.redirect(`/users/${id}`);
  });
});

// delete user

router.get("/:id/delete", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndRemove(id, (err, deleted) => {
    if (err) return next(err);
    res.redirect("/users");
  });
});

module.exports = router;
