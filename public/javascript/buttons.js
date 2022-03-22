const add = document.querySelectorAll(".add");
const sub = document.querySelectorAll(".sub");
const input = document.querySelectorAll(".input");
let total, inputVal;
function adding() {
  inputVal = input.valueAsNumber++;
  input.textContent = inputVal;
}
function substract() {
  inputVal = input.valueAsNumber--;
  input.textContent = inputVal;
}
add.addEventListener("click", adding);
​
sub.addEventListener("click", substract);