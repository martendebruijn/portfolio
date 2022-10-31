console.log("Huur mij in: marten@debruijn.io");

const btn = document.querySelector(".nav-btn");
const modal = document.querySelector(".modal");
btn?.addEventListener("click", (e) => {
  modal?.classList.add("open");
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
