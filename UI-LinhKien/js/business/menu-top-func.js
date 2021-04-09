//console.log("load file json vao page "+JSON.stringify(phukienMenu));
function addLink() {
  let navLink = document.querySelectorAll("div.menu-top>nav a.nav-link");
  let arrLink = Array.from(navLink)
  for (let aTag of arrLink) {
    aTag.addEventListener("click",(events)=>{        
        window.location.href = events.target.getAttribute("href")
    });
  }
}
function createMenu(menuJson) {
  let ul = document.createElement("ul");
  ul.setAttribute("class", "dropdown-menu");
  for (let i in menuJson) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    if (menuJson[i].submenu) {
      let iconTag = document.createElement("div");
      let iText =
        '<i class="fas fa-caret-right fa-sm text-white d-inline-block"></i>';
      iconTag.setAttribute("class", "icon-toggle");
      iconTag.innerHTML = iText;
      li.appendChild(iconTag);
      let ulChild = createMenu(menuJson[i].submenu);
      li.setAttribute("class", "dropdown-submenu");
      li.appendChild(ulChild);
      a.setAttribute("class", "dropdown-item");
    } else {
      a.setAttribute("class", "dropdown-item");
    }
    a.setAttribute("href", menuJson[i].link);
    a.innerHTML = i;
    li.prepend(a);
    ul.appendChild(li);    
  }
  return ul;
}

function addMenu() {
  let ul = createMenu(phukienMenu);
  let li = document.querySelector("li#menu-top-phukien");
  li.appendChild(ul);
  ul = createMenu(gioithieuMenu);
  li = document.querySelector("li#menu-top-gioithieu");
  li.appendChild(ul);
  ul = createMenu(lienheMenu);
  li = document.querySelector("li#menu-top-lienhe");
  li.appendChild(ul);
  ul = createMenu(dichvuMenu);
  li = document.querySelector("li#menu-top-dichvu");
  li.appendChild(ul);
  ul = createMenu(linhkienMenu);
  li = document.querySelector("li#menu-top-linhkien");
  li.appendChild(ul);
  ul = createMenu(gocchiaseMenu);
  li = document.querySelector("li#menu-top-gocchiase");
  li.appendChild(ul);
  ul = createMenu(baogiaMenu);
  li = document.querySelector("li#menu-top-baogia");
  li.appendChild(ul);

  if (!isMobileLK) {
    addLink();
  }  
}
addMenu();
