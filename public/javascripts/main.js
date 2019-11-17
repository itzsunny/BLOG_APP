function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $("#profile").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

// snippets code
// var pre = document.querySelector('pre');
var codes = document.querySelectorAll('code');
if(codes.length){
  codes.forEach(code=>{
    code.classList.add('language-javaScript');
  })
}

function view() {
  var comments = document.querySelector("#view_all_comments");
  var comment = document.querySelector(".view_comments");
  var snippet = document.querySelector(".label_snippet");

  // darkmode

  var darkmodeCheckbox = document.getElementById("darkmode");
  var body = document.querySelector("body");
  var darkmode_title = document.querySelectorAll(".darkmode_title");
  var author_name_prefix = document.querySelectorAll(".author_name_prefix");
  var darkmode_prefix = document.querySelectorAll(".darkmode_prefix");
  var articles_title = document.querySelectorAll(".articles_title");
  var darkmode_bar = document.querySelectorAll(".darkmode_bar");
  var darkmode_btn = document.querySelectorAll(".darkmode_btn");
  var darkmode_title_article = document.querySelectorAll(".darkmode_title_article");
  if(localStorage.getItem('darkmode') === '1'){
    darkView();
  
  }
  else{
    lightView();
  }

  function darkView() {
    // darkmode text
    darkmodeCheckbox.checked = true;
    body.style.background = "#282C35";
    darkmode_title.forEach(dark => {
      dark.classList.add("darkmode_title_light");
    });

    // darkmode name prefix

    author_name_prefix.forEach(dark => {
      dark.style.background = "#383636";
    });
    darkmode_prefix.forEach(dark => {
      dark.classList.add("darkmode_prefix_theme");
    });

    // darkmode_bar

    articles_title.forEach(dark => {
      dark.style.backgroundColor = "#282C35";
    });
    darkmode_bar.forEach(dark => {
      dark.classList.add("darkmode_bar_theme");
    });

    // dark mode btn

    darkmode_btn.forEach(dark => {
      dark.classList.add("darkmode_btn_theme");
    });

    // dark mode articles

    darkmode_title_article.forEach(dark => {
      dark.classList.add('darkmode_title_article_theme')
    })

  }

  function lightView() {


    // lightmode text
    darkmodeCheckbox.checked = false;

    body.style.background = "#fff";
    darkmode_title.forEach(light => {
      light.classList.remove("darkmode_title_light");
    });

    // lightmode name prefix

    author_name_prefix.forEach(light => {
      light.style.background = "#f4f7f8";
    });
    darkmode_prefix.forEach(light => {
      light.classList.remove("darkmode_prefix_theme");
    });

    // lightmode_bar

    articles_title.forEach(light => {
      light.style.backgroundColor = "#fff";
    });
    darkmode_bar.forEach(light => {
      light.classList.remove("darkmode_bar_theme");
    });


    //light mode btn
 darkmode_btn.forEach(light => {
      light.classList.remove("darkmode_btn_theme");
    });

    // light mode articles

    darkmode_title_article.forEach(light => {
      light.classList.remove('darkmode_title_article_theme')
    })

  }

  //

  // comment

  if (comment) {
    comment.addEventListener("click", () => {
      if (comments.checked) {
        comment.innerText = "View all";
      } else {
        comment.innerText = "View less";
      }
    });
  }

  // snippet

  if (snippet) {
    snippet.addEventListener("click", () => {
      snippet.classList.add("transition");
    });
  }
  var commentBtn = document.querySelector("#update_btn");

  if (commentBtn) {
    commentBtn.addEventListener("click", () => {
      commentBtn.classList.add("transition");
    });
  }

  // dark mode

  
  darkmodeCheckbox.addEventListener("change", () => {
    console.log('check')
    if (darkmodeCheckbox.checked) {
      localStorage.setItem("darkmode",'1')
      darkView();
    } else {
      localStorage.setItem("darkmode",'0')
      lightView();
    }
  });
}
view();
