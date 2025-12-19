let timepara = document.querySelector(".time");
let scorepara = document.querySelector(".score");
let redbox = document.querySelector(".redbox");
let btn = document.querySelector(".button");
let info = document.querySelector(".info");
let main = document.querySelector(".main");
let instruction = document.querySelector(".instructions");
let levels = document.querySelector(".levels");
let easy = document.querySelector(".easy")
let hard = document.querySelector(".hard")
let medium = document.querySelector(".medium")


let time = 20;
let interval;
let score = 0;
let movingintervall;
let hardmovingintervall;
let easymovingintervall;
let mediumMovingintervall;


btn.addEventListener("click", () => {
  redbox.style.display = "flex";
  info.style.display = "flex";
  btn.style.display = "none";
  levels.style.display = "none"
  instruction.style.display = "none";
  timer();
  movingredbox();
  timepara.innerText = `Time:${time}`;

  scorepara.innerText = `Score : ${score}`;
});

function timer() {
  interval = setInterval(() => {
    --time;
    timepara.innerText = `Time:${time}`;

    if (time === 0) {
      endgame();
      score = 0;
      time = 20;
    }
  }, 1000);
}
function movingredbox() {
  movingintervall = setInterval(() => {
    redbox.style.marginLeft = Math.random() * 300 + "px";
    redbox.style.marginTop = Math.random() * 250 + "px";
  }, 1300);
}

redbox.addEventListener("click", () => {
  score++;
  scorepara.innerText = `Score : ${score}`;
});

function endgame() {
  redbox.style.display = "none";
  clearInterval(interval);
  clearInterval(movingintervall);
  clearInterval(hardmovingintervall)
  clearInterval(mediumMovingintervall)
  clearInterval(easymovingintervall)
  info.style.display = "none";
  scorepara.innerHTML = "";
  timepara.innerText = "";
  alert(`Your score is ${score}`);
  btn.style.display = "block";
}

hard.addEventListener("click", ()=>{
  hardmovingredbox()
   redbox.style.display = "flex";
  info.style.display = "flex";
  btn.style.display = "none";
  levels.style.display = "none"
  instruction.style.display = "none";
    timer();
})

function hardmovingredbox() {
  hardmovingintervall = setInterval(() => {
    redbox.style.marginLeft = Math.random() * 300 + "px";
    redbox.style.marginTop = Math.random() * 250 + "px";
  }, 600);
}


easy.addEventListener("click", ()=>{
  easymovingredbox()
   redbox.style.display = "flex";
  info.style.display = "flex";
  btn.style.display = "none";
  levels.style.display = "none"
  instruction.style.display = "none";
    timer();
})

function easymovingredbox() {
  easymovingintervall = setInterval(() => {
    redbox.style.marginLeft = Math.random() * 300 + "px";
    redbox.style.marginTop = Math.random() * 250 + "px";
  },1300);
}

medium.addEventListener("click", ()=>{
  mediumMovingredbox()
   redbox.style.display = "flex";
  info.style.display = "flex";
  btn.style.display = "none";
  levels.style.display = "none"
  instruction.style.display = "none";
    timer();
})

function mediumMovingredbox() {
  mediumMovingintervall = setInterval(() => {
    redbox.style.marginLeft = Math.random() * 300 + "px";
    redbox.style.marginTop = Math.random() * 250 + "px";
  }, 900);
}







