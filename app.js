const date = new Date();
const nextYear = date.getFullYear() + 1;

const yearElm = document.querySelector("#year");
yearElm.innerText = nextYear;

const daysBox = document.querySelector(".days-left");
const hoursBox = document.querySelector(".hours-left");
const minutesBox = document.querySelector(".minutes-left");
const secondsBox = document.querySelector(".seconds-left");
const btn = document.querySelector(".btn");

const countdown = () => {
  const currentTime = new Date().getTime(); // Time will be in ms
  const nextYearTime = new Date(nextYear, 0, 1).getTime(); // Time will be in ms
  const diff = (nextYearTime - currentTime) / 1000; // Time will be in s

  const daysLeft = Math.floor(diff / (60 * 60 * 24));
  const hoursLeft = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
  const minutesLeft = Math.floor(((diff % (60 * 60 * 24)) % (60 * 60)) / 60);
  const secondsLeft = Math.floor(((diff % (60 * 60 * 24)) % (60 * 60)) % 60);

  daysBox.innerText = daysLeft;
  hoursBox.innerText = hoursLeft;
  minutesBox.innerText = minutesLeft;
  secondsBox.innerText = secondsLeft;

  if (diff < 0) {
    clearInterval(countdownInterval);
  }
};

countdown();

const countdownInterval = setInterval(countdown, 1000);

const container = document.querySelector(".fireworks-container");
const fireworks = new Fireworks(container, {
  speed: 4,
  acceleration: 1.1,
  gravity: 1,
  trace: 5,
  explosion: 10,
  particles: 400,
});

btn.addEventListener("click", () => {
  fireworks.start();
});
