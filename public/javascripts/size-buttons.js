const smallBtnEl = document.getElementById("small-size");
const mediumBtnEl = document.getElementById("medium-size");
const largeBtnEl = document.getElementById("large-size");
const cupTextSmallEl = document.getElementById("cup-text-small");
const cupTextMediumEl = document.getElementById("cup-text-medium");
const cupTextLargeEl = document.getElementById("cup-text-large");

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
  }
}

function largeClickHandler() {
  if ((isClicked = true)) {
    cupTextLargeEl.style.color = "red";
    console.log("Large has been selected");
  }
}
