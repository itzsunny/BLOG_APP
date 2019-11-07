function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $("#profile").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

// var snippet = document.querySelector(".article_snippets").Value;
// var snippets = document.querySelector(".snippet");
// console.log(snippet);
// if (snippet == undefined) {
//   snippets.style.display = "none";
// } else {
//   snippets.style.display = "block";
// }
