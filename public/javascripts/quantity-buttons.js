const plus = document.querySelectorAll(".add");
const minus = document.querySelectorAll(".sub");
const input = document.querySelectorAll(".input");

let inputVal;

function quantityFunction() {
  input.forEach(function (e) {
    if (e.valueAsNumber <= 0) {
      return;
    } else {
      inputVal = valueAsNumber++;
      e.textContent = inputVal;
    }
  });
}

plus.addEventListener("click", function () {
  alert("hi");
});
