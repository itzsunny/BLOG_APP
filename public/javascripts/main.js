function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $("#profile").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}
var comments = document.querySelector("#view_all_comments");
var comment = document.querySelector(".view_comments");
console.log(comments)

comment.addEventListener("click",()=> {
  if(comments.checked){
    comment.innerText = "View all";
  } else {
    comment.innerText = "View less";
  }
})
var commentBtn = document.getElementById("update_btn");
console.log(commentBtn)

var snippet = document.querySelector(".label_snippet");
console.log(snippet)


// commentBtn.addEventListener("mouseover",()=> {
//   commentBtn.style.backgroundColor = "red";
// })
// var snippet = document.querySelector(".article_snippets").Value;
// var snippets = document.querySelector(".snippet");
// console.log(snippet);
// if (snippet == undefined) {
//   snippets.style.display = "none";
// } else {
//   snippets.style.display = "block";
// }
