var keys_style = "background-color: rgb(24,118,242,0.7)";
window.addEventListener("keydown", (event) => {
  if(!layoutIsActive("windows"))return;
  // let mgs = `${event.keyCode} ${event.which} ${event.code} ${event.key} ${event.altKey} ${event.ctrlKey} ${event.metaKey} ${event.shiftKey}`;
  // alert(mgs);
  let keycode = event.code;
  document.querySelector(`.key-${keycode}`).setAttribute("style", keys_style);
  if (event.preventDefault) {
    event.preventDefault();
    event.stopPropagation();
  }
  let keyInput = document.querySelector(".key-input-windows");
  keyInput.innerText = `<${keycode}>` + keyInput.innerText;
});
window.addEventListener("keyup", (event) => {
  if(!layoutIsActive("windows"))return;
  if (event.code === "PrintScreen") {
    document
      .querySelector(`.key-PrintScreen`)
      .setAttribute("style", keys_style);
    event.preventDefault();
    event.stopPropagation();
    let keyInput = document.querySelector(".key-input-windows");
    keyInput.innerText = `<PrintScreen>` + keyInput.innerText;
  }
});
window.addEventListener("click", (event) => {
  if(!layoutIsActive("windows"))return;
  document.querySelector(".key-leftClick").setAttribute("style", keys_style);
  let keyInput = document.querySelector(".key-input-windows");
    keyInput.innerText = `<Click chuột trái>` + keyInput.innerText;
});
window.addEventListener("contextmenu", (event) => {
  if(!layoutIsActive("windows"))return;
  document.querySelector(".key-rightClick").setAttribute("style", keys_style);
  let keyInput = document.querySelector(".key-input-windows");
    keyInput.innerText = `<Click chuột phải>` + keyInput.innerText;
});
window.addEventListener("wheel", (event) => {
  if(!layoutIsActive("windows"))return;
  document.querySelector(".key-wheel").setAttribute("style", keys_style);
  let keyInput = document.querySelector(".key-input-windows");
    keyInput.innerText = `<Cuộn chuột>` + keyInput.innerText;
});

//event macbook
window.addEventListener("keydown", (event) => {
  if(!layoutIsActive("mac"))return;
  let keycode = event.code;
  document
    .querySelector(`.key-mac-${keycode}`)
    .setAttribute("style", keys_style);
  if (event.preventDefault) {
    event.preventDefault();
    event.stopPropagation();
    let keyInput = document.querySelector(".key-input-mac");
    keyInput.innerText = `<${keycode}}>` + keyInput.innerText;
  }
});
window.addEventListener("keyup", (event) => {
  if(!layoutIsActive("mac"))return;
  if (event.code === "PrintScreen") {
    document
      .querySelector(`.key-mac-PrintScreen`)
      .setAttribute("style", keys_style);
    event.preventDefault();
    event.stopPropagation();
    let keyInput = document.querySelector(".key-input-mac");
    keyInput.innerText = `<PrintScreen>` + keyInput.innerText;
  }
});
window.addEventListener("click", (event) => {
  if(!layoutIsActive("mac"))return;
  document
    .querySelector(".key-mac-leftClick")
    .setAttribute("style", keys_style);
    let keyInput = document.querySelector(".key-input-mac");
    keyInput.innerText = `<Click chuột trái>` + keyInput.innerText;
});
window.addEventListener("contextmenu", (event) => {
  if(!layoutIsActive("mac"))return;
  document
    .querySelector(".key-mac-rightClick")
    .setAttribute("style", keys_style);
    let keyInput = document.querySelector(".key-input-mac");
    keyInput.innerText = `<Click chuột phải>` + keyInput.innerText;
});
window.addEventListener("wheel", (event) => {
  if(!layoutIsActive("mac"))return;
  document.querySelector(".key-mac-wheel").setAttribute("style", keys_style);
  let keyInput = document.querySelector(".key-input-mac");
    keyInput.innerText = `<Cuộn chuột>` + keyInput.innerText;
});

function layoutIsActive(layout){
  console.log(`.keyboard-${layout}`)
  return document.querySelector(`.keyboard-${layout}`).parentElement.getAttribute("class").indexOf("active")>-1
}
