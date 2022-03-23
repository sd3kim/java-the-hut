const smallBtnEl = document.getElementById("small-size");
const mediumBtnEl = document.getElementById("medium-size");
const largeBtnEl = document.getElementById("large-size");
const cupTextSmallEl = document.getElementById("cup-text-small");
const cupTextMediumEl = document.getElementById("cup-text-medium");
const cupTextLargeEl = document.getElementById("cup-text-large");

let isClicked = false;

// function clickHandler() {
//    return isClicked == true
// }

function smallClickHandler() {
  if ((isClicked = true)) {
    cupTextSmallEl.style.color = "white";
    console.log("Small has been selected");
  }
}

function mediumClickHandler() {
  if ((isClicked = true)) {
    cupTextMediumEl.style.color = "white";
    console.log("Medium has been selected");
  }
}

function largeClickHandler() {
  if ((isClicked = true)) {
    cupTextLargeEl.style.color = "white";
    console.log("Large has been selected");
  }
}

// smallBtnEl.addEventListener("click", clickHandler);

// function smallSelect() {
//   cupTextSmallEl.style.color = "white";
//   console.log("small has been selected");
// }

// function mediumSelect() {
//   console.log("medium has been selected");
//   cupTextMediumEl.style.color = "white";
// }

// function largeSelect() {
//   console.log("large has been selected");
//   cupTextLargeEl.style.color = "white";
// }

// function sizeSelection() {
//   if (smallBtnEl.clicked == true) {
//     cupTextSmallEl.style.color = "white";
//     alert("button was clicked");
//     return;
//   } else if (mediumBtnEl == true) {
//     cupTextMediumEl.style.color = "white";
//     alert("button was clicked");
//     return;
//   } else if (largeBtnEl == true) {
//     cupTextLargeEl.style.color = "white";
//     alert("button was clicked");
//     return;
//   }
// }

// if small is selected
// then change color to white
// and add it to the cart
// return
// else if medium is selected
// then change color to white
// and add it to the cart
// return
// else if large is selected
// then change color to white
// and add it to the cart
// return
