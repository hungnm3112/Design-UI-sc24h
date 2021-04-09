function hideMyMenu() {
  //hide menu-left
  let divShow = document.querySelector(".tab-content");
  divShow.setAttribute("style", "visibility:hidden");
  let arrFade = Array.from(divShow.querySelectorAll(".tab-pane.fade"));
  arrFade.filter(function (fade) {
    fade.classList.toggle("active", false);
    fade.classList.toggle("show", false);
  });
  //hide menu top
  let arrUl = Array.from(
    document.querySelectorAll(".menu-top ul.dropdown-menu")
  );
  arrUl.filter((ul) => ul.classList.toggle("show", false));
  document
    .querySelector("div#carousel-content")
    .setAttribute("style", "display:block");
}
document.addEventListener("DOMContentLoaded", function () {
  // event mouse over menu-left
  let btns = document.querySelectorAll("div.menu-left>ul>li>a");
  let arrBtns = Array.from(btns);
  arrBtns.filter(
    (btn) =>
      (btn.onmouseenter = function (e) {
        hideMyMenu(); //hide menu
        //active menu left        
        let arrMenuLeft = Array.from(e.target.parentNode.parentNode.querySelectorAll("li"));          
        arrMenuLeft.filter((item) => {
          item.childNodes[1].setAttribute("class", "nav-link");          
        });
        e.target.setAttribute("class", "nav-link active");
        //show fade
        let divShow = document.querySelector(".tab-content");
        document
          .querySelector("div#carousel-content")
          .setAttribute("style", "display:none");
        divShow.setAttribute("style", "display:block");
        let id = this.getAttribute("href");
        document.querySelector(id).classList.add("show", "active");
      })
  );

  //event mouse leave local-show
  document.querySelector("div.catalog").onmouseleave = function () {
    hideMyMenu();
  };
  //event click btn close category
  let closers = Array.from(document.querySelectorAll(".icon-close-category"));
  closers.filter(
    (close) =>
      (close.onclick = function () {
        document
          .querySelector(".tab-content")
          .setAttribute("style", "visibility:hidden");
      })
  );
});
