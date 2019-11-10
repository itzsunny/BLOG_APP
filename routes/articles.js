const express = require("express");
const router = express.Router();
const Article = require("../models/article");
const Comment = require("../models/comment");
const auth = require("../middleware/auth");
const path = require("path");
const logged = auth.isLoggedin;

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: path.join(__dirname, "uploads"),
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file,
//       fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   }
// });

// const upload = multer({
//   storage: storage
// }).single("profile");

// router.post("/", logged, (req, res) => {
//   upload(req, res, err => {
//     if (err) return next(err);
//     res.redirect("/articles");
//   });
// });

/* GET articles listing. */

router.get("/create", logged, (req, res, next) => {
  res.render("newarticle");
});

// Create Articles

router.post("/", logged, (req, res, next) => {
  req.body.author = req.user.id;
  Article.create(req.body, (err, articles) => {
    if (err) return next(err);
    res.redirect("/articles");
  });
});

// GET all Articles

router.get("/", (req, res, next) => {
  Article.find({})
    .populate("author", "name email")
    .exec((err, articles) => {
      if (err) return next(err);
      res.render("articles", { articles });
    });
});

// single article

router.get("/:id", (req, res, next) => {
  let articleId = req.params.id;
  // Article.findById(id, (err, article) => {
  //   if (err) return next(err);
  //   res.render("article", { article });
  // });
  Article.findById(articleId)
    .populate("author", "name email")
    .exec((err, article) => {
      if (err) return next(err);
      Comment.find({ articleId })
        .populate("author", "name")
        .exec((err, comments) => {
          if (err) return next(err);
          res.render("article", { article, comments });
        });
    });
});

// Edit comments

router.get("/:id/edit", (req, res, next) => {
  let commentsId = req.params.id;
  Comment.findById(commentsId, (err, editedComment) => {
    if (err) return next(err);
    res.render("editComments", { editedComment });
  });
});

// render updateuserinfo

router.get("/:id/updateinfo", logged, (req, res, next) => {
  let id = req.params.id;
  Article.findById(id, (err, articles) => {
    if (err) return next(err);
    res.render("updateinfo", { articles });
  });
});

// update and redirect

router.post("/:id", logged, (req, res, next) => {
  let id = req.params.id;
  Article.findByIdAndUpdate(id, req.body, (err, articles) => {
    if (err) return next(err);
    res.redirect(`/articles/${id}`);
  });
});

// delete Article

router.get("/:articleId/delete", logged, (req, res, next) => {
  let articleId = req.params.articleId;
  Article.findByIdAndRemove(articleId, (err, articleToDelete) => {
    if (err) return next(err);
    res.redirect(`/articles`);
  });
});

// create comments

router.post("/:articleId/comments", logged, (req, res, next) => {
  var articleId = req.params.articleId;
  req.body.author = req.user.id;
  req.body.articleId = articleId;

  Comment.create(req.body, (err, commentToCreate) => {
    if (err) return next(err);
    res.redirect("/articles/" + articleId);
  });
});

// delete comments

router.get("/:articleid/comments/:commentid/deletecomment", (req, res, next) => {
  var commentId = req.params.commentid;
  var articleId = req.params.articleid;
  console.log(articleId);
  Comment.findByIdAndDelete(commentId, (err, commentToDelete) => {
    if (err) return next(err);
    res.redirect(`/articles/${articleId}`);
  });
});

// edit comments

router.get("/:articleid/comments/:commentid/editcomment", (req, res, next) => {
  let commentId = req.params.commentid;
  Comment.findById(commentId,(err, comment) => {
    if (err) return next(err);
    res.render("comments", { comment });
  });
});

// post edited comments

router.post("/:articleid/comments/:commentid", (req, res, next) => {
  var articleId = req.params.articleid;
  var commentId = req.params.commentid;
  Comment.findByIdAndUpdate(commentId,req.body, (err, commentToUpdate) => {
    if (err) return next(err);
    res.redirect(`/articles/${articleId}`);
  });
});


module.exports = router;
