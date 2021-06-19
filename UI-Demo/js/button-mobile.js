function goTop() {
  document.documentElement.scrollTop = 0;
}
document.addEventListener("scroll", () => {    
  if (document.body.scrollTop > 24 || document.documentElement.scrollTop > 24) {
    document.querySelector('.book_calendar').style.display = "flex"
  } else {
    document.querySelector('.book_calendar').style.display = "none"
  }
});
