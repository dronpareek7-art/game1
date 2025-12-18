let timepara = document.querySelector(".time");
let scorepara = document.querySelector(".score");
let redbox = document.querySelector(".redbox");
let btn = document.querySelector(".button");
let info = document.querySelector(".info");
let main = document.querySelector(".main");
let instruction = document.querySelector(".instructions");

let time = 20;
let interval;
let score = 0;

btn.addEventListener("click", () => {
  redbox.style.display = "flex";
  info.style.display = "flex";
  btn.style.display = "none";
  instruction.style.display = "none";
  timer();
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
  timepara.innerText = "";
  alert(`Your score is ${score}`);
  btn.style.display = "block";
}
