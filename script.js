let timepara = document.querySelector(".time");
let scorepara = document.querySelector(".score");
let redbox = document.querySelector(".redbox");
let btn = document.querySelector(".button");
let info = document.querySelector(".info");
let main = document.querySelector(".main");

let time = 20;
let interval;
let score = 0;

btn.addEventListener("click", () => {
  redbox.style.display = "flex";
  info.style.display = "flex";
  btn.disabled = true;

  timer();
  random();
});

function timer() {
  interval = setInterval(() => {
    timepara.innerText = `Time:${--time}`;

    if (time === 1) {
      endgame();
      score = 0;
      time = 20;
    }
  },1000);
}

redbox.addEventListener("click", () => {
  score++;
  scorepara.innerText = `Score : ${score}`;
  redbox.style.marginLeft = Math.random() * 300 + "px";
  redbox.style.marginTop = Math.random() * 250 + "px";
});

function endgame() {
  redbox.style.display = "none";
  clearInterval(interval);
  info.style.display = "none";
  scorepara.innerHTML = "";
  alert(`Your score is ${score}`);
}
