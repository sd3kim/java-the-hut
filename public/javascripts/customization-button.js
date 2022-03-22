const add = document.querySelectorAll(".add");
const sub = document.querySelectorAll(".sub");
const input = document.querySelectorAll(".input");

let total, inputVal;
function adding() {
  input.forEach(function (evt) {
    evt.textContent = evt.valueAsNumber++;
  });
}
function substract() {
  inputVal = input.valueAsNumber--;
  input.textContent = inputVal;
}
add.forEach(function (evt) {
  evt.addEventListener("click", adding);
});

// sub.addEventListener("click", substract);
