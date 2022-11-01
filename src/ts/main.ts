console.log("Huur mij in: marten@debruijn.io");

const modalEventListener = () => {
  const modal = document.querySelector(".modal");
  const btn = document.querySelector(".nav-btn");
  const btnIcon = btn?.querySelector(".fa-solid");
  const btnSrOnly = btn?.querySelector(".nav-btn-icon-sr-only") as HTMLElement;
  const anchors = modal?.querySelectorAll("a");

  const closeModal = () => {
    modal?.classList.remove("open");
    if (btnIcon?.classList.contains("fa-times"))
      btnIcon.classList.remove("fa-times");
    btnIcon?.classList.add("fa-bars");
    btnSrOnly.innerText = "Open";
  };

  const openModal = () => {
    modal?.classList.add("open");
    if (btnIcon?.classList.contains("fa-bars"))
      btnIcon.classList.remove("fa-bars");
    btnIcon?.classList.add("fa-times");
    btnSrOnly.innerText = "Sluit";
  };

  btn?.addEventListener("click", (e) => {
    const hasOpen = modal?.classList.contains("open");
    if (hasOpen) {
      closeModal();
    } else {
      openModal();
    }
  });

  anchors?.forEach((a) => {
    a.addEventListener("click", (e) => {
      closeModal();
    });
  });
};

modalEventListener();

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
        const f = a[x] as HTMLElement;
        f.style.transform = `rotate(${i}deg)`;
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
