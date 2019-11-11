
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

if(comment) {
  comment.addEventListener("click",()=> {
    if(comments.checked){
      comment.innerText = "View all";
    } else {
      comment.innerText = "View less";
    }
  });
}



var snippet = document.querySelector(".label_snippet");

if(snippet){
  snippet.addEventListener("click",()=> {
    snippet.classList.add("transition");
  })
}
var commentBtn = document.querySelector("#update_btn");

if(commentBtn){
  commentBtn.addEventListener("click",()=> {
    commentBtn.classList.add("transition");
})
}

