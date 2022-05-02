// Logic for recommedations card carousel
const carousel = document.querySelector(
  ".recommendations__list-cards--carousel"
);
const cards = document.querySelectorAll(".card");
const btnNext = document.querySelector(".carousel-button--next");
const btnPrev = document.querySelector(".carousel-button--prev");

const cardWidth = cards[0].offsetWidth;
let currentCard = 0;

const changeCard = () => {
  carousel.scrollLeft = currentCard * cardWidth;
};

carousel.addEventListener("scroll", () => {
  // For mobile scrolling
  currentCard = Math.round(carousel.scrollLeft / cardWidth);

  if (currentCard === 0) {
    btnPrev.disabled = true;
  } else if (currentCard === cards.length - 1) {
    btnNext.disabled = true;
  } else {
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
});

btnNext.addEventListener("click", () => {
  currentCard++;
  changeCard();

  if (currentCard < cards.length - 1) {
    btnPrev.disabled = false;
  } else {
    btnNext.disabled = true;
  }
});

btnPrev.addEventListener("click", () => {
  currentCard--;
  changeCard();

  if (currentCard > 0) {
    btnNext.disabled = false;
  } else {
    btnPrev.disabled = true;
  }
});

// --- Logic for menu icon in mobile ---
const menuMobile = document.querySelector(".header__menu--icon-mobile");

menuMobile.addEventListener("click", () => {
  document.querySelector(".header__menu--list").classList.toggle("active");
});
