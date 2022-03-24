const smallBtnEl = document.getElementById("small-size");
const mediumBtnEl = document.getElementById("medium-size");
const largeBtnEl = document.getElementById("large-size");
const cupTextSmallEl = document.getElementById("cup-text-small");
const cupTextMediumEl = document.getElementById("cup-text-medium");
const cupTextLargeEl = document.getElementById("cup-text-large");
const price = document.getElementById("price");
const priceMeduim = document.getElementById("Price-medium");
const priceLarge = document.getElementById("price-large");

let isClicked = false;

function smallClickHandler() {
  if ((isClicked = true)) {
    cupTextSmallEl.style.color = "red";
    console.log("Small has been selected");
  }
}

function mediumClickHandler() {
  if ((isClicked = true)) {
    cupTextMediumEl.style.color = "red";
    console.log("Medium has been selected");
    price.value = priceMeduim.value;
    // price.value = 2;
    // price.textContent = 2;
  }
}

function largeClickHandler() {
  if ((isClicked = true)) {
    cupTextLargeEl.style.color = "red";
    console.log("Large has been selected");
    price.value = priceLarge.value;
    // price.value = 3;
    // price.textContent = 3;
  }
}
// function check() {
//   if (mediumBtnEl.clicked) {
//     price.value = "2.25";
//     price.textContent = "2.25";
//   } else if (largeBtnEl.clicked) {
//     price.value = "3.50";
//     price.textContent = "3.50";
//   }
// }
// check();
// console.log(check());
