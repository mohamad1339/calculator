let num = document.querySelectorAll(".number");
let elams = document.querySelectorAll(".elam");
console.log(elam);
let clear = document.getElementById("clear");
let btn = document.getElementById("btn");

let elam1 = document.getElementById("elam1");
let restext = document.getElementById("restext");
let end = document.getElementById("end");
let number = [];
clear.addEventListener("click", function () {
  number = [];
  restext.innerHTML = "0";
});
num.forEach((btn) => {
  btn.addEventListener("click", function () {
    number.push(btn.innerHTML);
    restext.innerHTML = number.join("");
  });
});
elams.forEach((elam) => {
  elam.addEventListener("click", function () {
    number.push(elam.innerHTML);
    restext.innerHTML = number.join("");
  });
});

elam1.addEventListener("click", function () {
 
  number.unshift("-");
  restext.innerHTML = number.join("");
});
end.addEventListener("click", function () {
  let Quest = number.join("");
  let Answer = eval(Quest);
  restext.innerHTML = Answer;
});
btn.addEventListener("click", function () {
  number.pop();
  restext.innerHTML = number.join("");
});