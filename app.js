const MAX_OPERANDE = 12;
const TEMPS_TIMER = 5*60;

let reponseEl = document.querySelector(".reponse");
let operandesEl = document.querySelector(".question");
let timerEl = document.querySelector(".timer");
let res;

function newOperation() {
  let op1 = Math.floor(Math.random() * MAX_OPERANDE+1); 
  let op2 = Math.floor(Math.random() * MAX_OPERANDE+1); 
  res = op1*op2;

  operandesEl.innerText = "Combien font " + op1 + " * " + op2 + " ?";
}

let timer = TEMPS_TIMER;

newOperation();
reponseEl.focus();

reponseEl.addEventListener("keydown", (e) => {
  if (e.keyCode != 13)
      return;

  e.preventDefault();

  if (timer < 0)
    return;

  if (res == reponseEl.innerText) {
      newOperation();
      console.log("OK");
  } else
      console.log("NON");

  reponseEl.innerText = "";
});

reponseEl.addEventListener("blur", (e) => {
  setTimeout(() => {
    e.target.focus();
  }, 1);
});

setInterval(() => {
    timer--;
    if (timer < 0)
        window.alert("Terminé !");
    
    timerEl.innerText = timer;
}, 1000);
