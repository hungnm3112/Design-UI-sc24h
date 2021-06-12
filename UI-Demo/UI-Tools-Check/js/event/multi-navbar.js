
$(".dropdown-menu div.icon-toggle").click(function (e) {  
  if (!$(this).next().hasClass("show")) {
    $(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass("show", true);

  $(this)
    .parents("li.nav-item.dropdown.show")
    .on("hidden.bs.dropdown", function (e) {
      $(".dropdown-submenu .show").removeClass("show");
    });
  
  hideFadeContent()  
  return false;
});


function hideFadeContent() {
  //hide menu-left
  let divShow = document.querySelector(".tab-content");
  divShow.setAttribute("style", "visibility:hidden");
  let arrFade = Array.from(divShow.querySelectorAll(".tab-pane.fade"));
  arrFade.filter(function (fade) {
    fade.classList.toggle("active", false);
    fade.classList.toggle("show", false);
  });  
}
