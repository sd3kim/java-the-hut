const add = document.getElementById("ad");
const sub = document.querySelector(".sub");
const input = document.querySelector(".input");
let total, inputVal;
function adding() {
  inputVal = input.valueAsNumber++;
  input.textContent = inputVal;
}
function substract() {
  inputVal = input.valueAsNumber--;
  input.textContent = inputVal;
}
ad.addEventListener("click", adding);

sub.addEventListener("click", substract);
