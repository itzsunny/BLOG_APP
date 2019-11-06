//  handle Access
exports.auth = () => { 
  if (user.session && user.session.userId) {
    res.redirect(`/articles/${id}`);
  } else {
    res.redirect("/articles/login");
  }
}
