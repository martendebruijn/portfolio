console.log("Huur mij in: marten@debruijn.io");

const modal = document.querySelector(".modal");
const navBtnBars = document.querySelector(".nav-btn--bars");
const navBtnTimes = document.querySelector(".nav-btn--times");
navBtnBars?.addEventListener("click", (e) => {
  modal?.classList.add("open");
  document.body.classList.add("no-scroll");
  navBtnTimes?.classList.add("nav-btn--visible");
  navBtnBars?.classList.remove("nav-btn--visible");
});
navBtnTimes?.addEventListener("click", (e) => {
  modal?.classList.remove("open");
  document.body.classList.remove("no-scroll");
  navBtnBars?.classList.add("nav-btn--visible");
  navBtnTimes?.classList.remove("nav-btn--visible");
});

const discoBtn = document.getElementById("disco-btn");
discoBtn?.addEventListener("click", (e) => {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "brown",
    "gold",
    "coral",
    "lime",
  ];
  const speed = 200;
  const speedRotate = 5;
  for (let i = 0; i < 361; i++) {
    setTimeout(function () {
      const a = document.querySelectorAll(".card");
      for (let x = 0; x < a.length; x++) {
        a[x].style.transform = `rotate(${i}deg)`;
      }
      const z = document.querySelector("footer");
      if (!z) throw new Error("foo");
      z.style.transform = `rotate(${i}deg)`;
    }, speedRotate * i);
  }
  for (let i = 0; i < colors.length; i++) {
    setTimeout(function () {
      makeColor(colors[i]);
    }, speed * i);

    if (i === colors.length - 1) {
      setTimeout(function () {
        makeColor(null);
      }, speed * i + speed);
    }
  }
});

function makeColor(color) {
  document.body.style.backgroundColor = color;
}
