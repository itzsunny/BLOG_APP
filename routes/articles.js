const express = require("express");
const router = express.Router();
const Article = require("../models/article");
const Comment = require("../models/comment");
const auth = require("../middleware/auth");
const logged = auth.isLoggedin;



/* GET articles listing. */

router.get("/create", logged, (req, res, next) => {
  res.render("newarticle");
});

// Create Articles

router.post("/", logged, (req, res, next) => {
  console.log(req.body);
  req.body.author = req.user.id;
  Article.create(req.body, (err, articles) => {
    if (err) return next(err);
    res.redirect("/articles");
  });
});

// GET all Articles

router.get("/", (req, res, next) => {
  Article.find({})
  .populate("author","name email")
  .exec((err, articles)=> {
    if(err) return next(err);
    res.render("articles",{articles})
  });
});

// single article

router.get("/:id", (req, res, next) => {
  let articleId = req.params.id;
  // Article.findById(id, (err, article) => {
  //   if (err) return next(err);
  //   res.render("article", { article });
  // });
  Article
    .findById(articleId)
    .populate('author', 'name email')
    .exec((err, article) => {
      if (err) return next(err);
      Comment
      .find({ articleId })
      .populate('author', 'name')
      .exec((err, comments) => {
        console.log(article, comments);
        if (err) return next(err);
        res.render("article", { article, comments });

      })
    })
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

// delete user

router.get("/:id/delete", logged, (req, res, next) => {
  let id = req.params.id;
  Article.findByIdAndRemove(id, (err, deleted) => {
    if (err) return next(err);
    res.redirect("/articles");
  });
});

router.post('/:articleId/comments', logged, (req, res, next) => {
  var articleId = req.params.articleId;
  req.body.author = req.user.id;
  req.body.articleId = articleId;
  console.log(req.body);
  Comment.create(req.body, (err, createdComment) => {
    console.log(err, createdComment);
    if(err) return next(err);
    res.redirect('/articles/' + articleId);
  })

})

module.exports = router;
