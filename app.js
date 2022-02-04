const MAX_OPERANDE = 10;
const TEMPS_TIMER = 0.25*60;

let reponseEl = document.querySelector(".reponse");
let operandesEl = document.querySelector(".question");
let timerEl = document.querySelector(".timer");
let counterEl = document.querySelector(".counter");
let res;

function newOperation() {
  let op1 = Math.floor(Math.random() * MAX_OPERANDE+1); 
  let op2 = Math.floor(Math.random() * MAX_OPERANDE+1); 
  res = op1*op2;

  operandesEl.innerText = "Combien font " + op1 + " * " + op2 + " ?";
}

let timer = TEMPS_TIMER;
let counter = 0;

newOperation();
reponseEl.focus();

reponseEl.addEventListener("keydown", (e) => {
  if ([96, 97, 98, 99, 100, 101, 102, 103, 104, 105].includes(e.keyCode))
      return;

  e.preventDefault();

  if (timer <= 0)
    return;

  if (res == reponseEl.innerText) {
      newOperation();
      console.log("OK");
      counter++;
      counterEl.innerText = counter;
  } else
      console.log("NON");

  reponseEl.innerText = "";
});

reponseEl.addEventListener("blur", (e) => {
  setTimeout(() => {
    e.target.focus();
  }, 1);
});

let intervalle = setInterval(() => {
    timer--;
    if (timer <= 0) {
        clearInterval(intervalle);
        operandesEl.innerText = "Terminé !";
        reponseEl.innerText = counter + " bonnes réponses";
        reponseEl.setAttribute("contenteditable", false);
    }
    
    timerEl.innerText = timer;
}, 1000);

