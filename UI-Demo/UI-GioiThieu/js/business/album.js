// let array = Array.from(document.querySelectorAll('figure.img_album>a>img'))
// let data = document.createElement("div");
// for(let img of array){
//     let a = document.createElement('a')
//     let src = img.getAttribute('src');
//     a.setAttribute('href',src)
//     a.appendChild(img)
//     data.appendChild(a)
// }
// console.log(data)

$(document).ready(function () {
  $("#album-24h").lightGallery();
});
