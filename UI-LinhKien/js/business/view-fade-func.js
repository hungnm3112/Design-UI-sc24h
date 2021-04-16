var categoryIndex =0;
function showMore(group) {
  let aTags = document.querySelectorAll(`[group='${group}']`);  
  for (aTag of aTags) {
    aTag.setAttribute("class", "list-group-item no-padding");
  }
  let showTag = document.querySelector(`[id='showMore-${group}']`);
  showTag.setAttribute("class", "list-group-item no-padding d-none");
}

function showLess(group) {
  let aTags = document.querySelectorAll(`[group='${group}']`);  
  for (aTag of aTags) {
    aTag.setAttribute("class", "list-group-item no-padding d-none");
  }
  let showTag = document.querySelector(`[id='showMore-${group}']`);
  showTag.setAttribute("class", "list-group-item no-padding");
}

function createCard(name) {
  let maxA = 4;
  let card = document.createElement("div");
  //card.setAttribute("style", "margin-left:10px;margin-right:10px");
  let body = document.createElement("div");
  //body.setAttribute("class", "card-body");
  let title = document.createElement("h4");
  //title.setAttribute("class", "card-title");
  let text = document.createElement("p");
  //text.setAttribute("class", "card-text");

  title.innerHTML = name.title;
  let div = document.createElement("div");
  //div.setAttribute("class", "list-group");
  let html = "";
  let count = 1;
  for (let value of name.values) {
    if (count <= maxA) {
      html += `<a style="border:none;padding-top:0" class="list-group-item no-padding" href="${value.link}">${value.text}</a>`;
    } else if (count === maxA + 1) {
      html += `<a group="${name.title}-${categoryIndex}" id="showMore-${name.title}-${categoryIndex}" style="border:none;padding-top:0" class="list-group-item no-padding" onclick="showMore('${name.title}-${categoryIndex}')">Xem thêm  <i class="fas fa-caret-down"></i></a>`;
      html += `<a group="${name.title}-${categoryIndex}" style="border:none;padding-top:0" class="list-group-item no-padding d-none" href="${value.link}">${value.text}</a>`;
    } else {
      html += `<a group="${name.title}-${categoryIndex}" style="border:none;padding-top:0" class="list-group-item no-padding d-none" href="${value.link}">${value.text}</a>`;    }
    count++;
  }
  if (count > maxA) {
    html += `<a group="${name.title}-${categoryIndex}" id="showLess-${name.title}-${categoryIndex}" style="border:none;padding-top:0" class="list-group-item no-padding d-none" onclick="showLess('${name.title}-${categoryIndex}')">Thu gọn  <i style="transform: rotate(180deg);" class="fas fa-caret-down"></i></a>`;
  }
  div.innerHTML = html;

  text.appendChild(div);
  body.appendChild(title);
  body.appendChild(text);
  card.appendChild(body);

  return card;
}

function createCardDeck(vJson) {
  let cardDeck = document.createElement("div");
  cardDeck.setAttribute("class", "myCard");
  for (let h of vJson) {
    let card = createCard(h);
    cardDeck.appendChild(card);
  }
  categoryIndex++;
  return cardDeck;
}

function addViewFade() {
  let view = document.getElementById("v-ram");
  let cardDeck = createCardDeck(vRAM);
  view.appendChild(cardDeck);
  view = document.getElementById("v-hdd");
  cardDeck = createCardDeck(vHDD);
  view.appendChild(cardDeck);
  view = document.getElementById("v-cpuFan");
  cardDeck = createCardDeck(vFan);
  view.appendChild(cardDeck);
  view = document.getElementById("v-cardwifi");
  cardDeck = createCardDeck(vCardwifi);
  view.appendChild(cardDeck);
  view = document.getElementById("v-usb");
  cardDeck = createCardDeck(vUsb);
  view.appendChild(cardDeck);
  view = document.getElementById("v-speaker");
  cardDeck = createCardDeck(vSpeaker);
  view.appendChild(cardDeck);
  view = document.getElementById("v-adapter");
  cardDeck = createCardDeck(vAdapter);
  view.appendChild(cardDeck);
  view = document.getElementById("v-battery");
  cardDeck = createCardDeck(vBattery);
  view.appendChild(cardDeck);
  view = document.getElementById("v-lcd");
  cardDeck = createCardDeck(vLcd);
  view.appendChild(cardDeck);
  view = document.getElementById("v-keyboard");
  cardDeck = createCardDeck(vKeyboard);
  view.appendChild(cardDeck);
}
addViewFade();
