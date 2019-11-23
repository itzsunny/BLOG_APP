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
var desc = document.querySelector(".article_description");

if (desc) {
  let old_html = desc.innerHTML;
  let new_htmlArr = old_html.split("");
  let counterBackTick = 0;
  let counterHash = 0;
  let counterStr = 0;
  let counterBold = 0;
  let counterItalic = 0;
  let new_html = new_htmlArr
    .map(val => {
      if (val == "`") {
        let str;
        if (counterBackTick % 2 == 0) {
          str = '<pre><code class="language-javaScript">';
        } else {
          str = "</code></pre>";
        }
        counterBackTick++;
        return str;
      } else if (`${val}` == "*") {
        let str;
        if (counterStr % 2 == 0) {
          str = '<h2 class = "titleDesc",style="color: rgba(0, 0, 0, 1); font-size: 1.2rem">';
        } else {
          str = "</h2>";
        }
        counterStr++;
        return str;
      } else if (`${val}` == "#") {
        let str;
        if (counterHash % 2 == 0) {
          str = '<h2 class="article_subtitle darkmode_title_article">';
        } else {
          str = "</h2>";
        }
        counterHash++;
        return str;
      } else if (`${val}` == "-") {
        let str;
        if (counterBold % 2 == 0) {
          str =
            '<span class = "titleDesc", style="color: rgba(0, 0, 0, 0.9); font-weight : bolder">';
        } else {
          str = "</span>";
        }
        counterBold++;
        return str;
      } else if (`${val}` == "_") {
        let str;
        if (counterItalic % 2 == 0) {
          str =
            '<span class = "titleDesc", style="color: rgba(0, 0, 0, 0.9); font-weight : 500; font-style : italic">';
        } else {
          str = "</span>";
        }
        counterItalic++;
        return str;
      } else return val;
    })
    .join("");
  desc.innerHTML = new_html;
}

// var codes = document.querySelectorAll('code:not(#single-snippet)');
// single-snippet
// if(codes.length){
//   codes.forEach(code=>{
//     var pre = document.createElement("pre");
//     pre.appendChild(code);
//     code.classList.add('language-javaScript');
//     desc.appendChild(pre);
//   })
// }

function view() {
  // darkmode

  var darkmodeCheckbox = document.getElementById("darkmode");
  var body = document.querySelector("body");
  var darkmode_title = document.querySelectorAll(".darkmode_title");
  var author_name_prefix = document.querySelectorAll(".author_name_prefix");
  var darkmode_prefix = document.querySelectorAll(".darkmode_prefix");
  var articles_title = document.querySelectorAll(".articles_title");
  var darkmode_bar = document.querySelectorAll(".darkmode_bar");
  var darkmode_btn = document.querySelectorAll(".darkmode_btn");
  var darkmode_title_article = document.querySelectorAll(
    ".darkmode_title_article"
  );
  var times = document.querySelectorAll(".time");
  var titleDesc = document.querySelectorAll(".titleDesc");
  var commentBox = document.getElementById("comment_box");
  var inputDark = document.querySelectorAll(".input_dark");

  if (localStorage.getItem("darkmode") === "1") {
    darkView();
  } else {
    lightView();
  }

  function darkView() {
    // darkmode text
    darkmodeCheckbox.checked = true;
    body.classList.add("body_dark");
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
      dark.classList.add("darkmode_title_article_theme");
    });

    if (times) {
      times.forEach(time => {
        time.style.color = "rgb(169, 122, 212)";
      });
    }
    // darkmode comment Box
    if (commentBox) {
      commentBox.style.backgroundColor = "rgba(0,0,0,.3)";
      commentBox.style.color = "rgba(255,255,255,.8)";
      commentBox.style.resize = "none";
    }

    // darkmode titleDesc
    if (titleDesc) {
      titleDesc.forEach(title => {
        title.style.color = "#fff";
      });
    }

    // input dark theme
    if (inputDark) {
      inputDark.forEach(input => {
        input.classList.add("input_dark_theme");
      });
    }
  }

  function lightView() {
    // lightmode text
    darkmodeCheckbox.checked = false;
    body.classList.remove("body_dark");
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
      light.classList.remove("darkmode_title_article_theme");
    });

    // time light
    if (times) {
      times.forEach(time => {
        time.style.color = "#4242cc";
      });
    }

    // light comment box
    if (commentBox) {
      commentBox.style.backgroundColor = "#f6f8fa";
      commentBox.style.color = "rgba(0,0,0,.8)";
      commentBox.style.resize = "none";
    }

    // lightmode titleDesc

    if (titleDesc) {
      titleDesc.forEach(title => {
        title.style.color = "rgba(0,0,0,.9)";
      });
    }

    // input light theme

    if (inputDark) {
      inputDark.forEach(input => {
        input.classList.remove("input_dark_theme");
      });
    }
  }

  //text area auto expand
  var textarea = document.querySelector("textarea");

  if (textarea) {
    textarea.addEventListener("keydown", autosize);

    function autosize() {
      var el = this;
      setTimeout(function() {
        el.style.cssText = "height:auto; padding:0";
        // for box-sizing other than "content-box" use:
        el.style.cssText = "-moz-box-sizing:content-box";
        el.style.cssText = "height:" + el.scrollHeight + "px";
      }, 0);
    }
  }

  var comments = document.querySelector("#view_all_comments");
  var comment = document.querySelector(".view_comments");
  var snippet = document.querySelector(".label_snippet");

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
    console.log("check");
    if (darkmodeCheckbox.checked) {
      localStorage.setItem("darkmode", "1");
      darkView();
    } else {
      localStorage.setItem("darkmode", "0");
      lightView();
    }
  });
}
view();
