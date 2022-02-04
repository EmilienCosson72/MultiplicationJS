const MAX_OPERANDE = 9;
let reponseEl = document.querySelector(".reponse");
let operandesEl = document.querySelector(".question");
let res;

function newOperation() {
  let op1 = Math.floor(Math.random() * MAX_OPERANDE+1); 
  let op2 = Math.floor(Math.random() * MAX_OPERANDE+1); 
  res = op1*op2;

  operandesEl.innerText = "Combien font " + op1 + " * " + op2 + " ?";
}

newOperation();
reponseEl.focus();

reponseEl.addEventListener("keydown", (e) => {
  if (e.keyCode != 13)
      return;

  e.preventDefault();

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
