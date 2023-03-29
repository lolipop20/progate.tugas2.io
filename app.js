const heroes = document.querySelectorAll(".heroe");

window.addEventListener("scroll", checkHeroe);

checkHeroe();

function checkHeroe() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  heroes.forEach((heroe) => {
    const heroeTop = heroe.getBoundingClientRect().top;

    if (heroeTop < triggerBottom) {
      heroe.classList.add("show");
    } else {
      heroe.classList.remove("show");
    }
  });
}
