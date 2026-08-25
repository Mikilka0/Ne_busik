const sliderData = [
  {
    img: "images/lux_busic.png",
    title: "Витривалий Люксовий Бусік",
    desc: "Відкрийте для себе розкішні поїздки під час кожного несподіваного обстрілу.",
  },
  {
    img: "images/classic_busik.png",
    title: "Класичний Ретро Бусік",
    desc: "Вінтажна естетика для унікального довсвіду на передку.",
  },
  {
    img: "images/electro_busik.png",
    title: "Сучасний Елкектро Бусік",
    desc: "Еко-Френдлі Бусік для сучасного дослідження фронту.",
  },
  {
    img: "images/sprinter_busik.png",
    title: "Стандартий Комфі Бусік",
    desc: "Швидкість та комфорт для мобілізації цивільних.",
  },
];

let currentIndex = 0;

const mainCard = document.querySelector(".glass-card:not(.partial)");
const mainCardImg = document.querySelector(
  ".glass-card:not(.partial) .card-img",
);
const mainCardTitle = document.querySelector(".glass-card:not(.partial) h3");
const mainCardDesc = document.querySelector(".glass-card:not(.partial) p");
const partialCardImg = document.querySelector(".glass-card.partial .card-img");
const currentIndicator = document.querySelector(".slider-progress .current");
const progressFill = document.querySelector(".progress-fill");

// ДОДАНО: Знаходимо кнопки в HTML
const btnNext = document.querySelector(".btn-primary.arrow");
const btnPrev = document.querySelector(".ghost-btn.arrow");

function updateSlider(index) {
  // 1. Ховаємо контент плавно
  mainCard.style.opacity = "0";
  mainCard.style.transform = "translateY(10px)";
  partialCardImg.style.opacity = "0";

  // 2. Чекаємо завершення CSS-анімації (400мс) перед тим, як змінити текст та фото
  setTimeout(() => {
    mainCardImg.src = sliderData[index].img;
    mainCardTitle.textContent = sliderData[index].title;
    mainCardDesc.textContent = sliderData[index].desc;

    let nextIndex = (index + 1) % sliderData.length;
    partialCardImg.src = sliderData[nextIndex].img;

    currentIndicator.textContent = `0${index + 1}`;
    progressFill.style.width = `${((index + 1) / sliderData.length) * 100}%`;

    // 3. Повертаємо контент на екран
    mainCard.style.opacity = "1";
    mainCard.style.transform = "translateY(0)";
    partialCardImg.style.opacity = "1";
  }, 400);
}

// ДОДАНО: Обробники кліків по кнопках
btnNext.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % sliderData.length;
  updateSlider(currentIndex);
});

btnPrev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + sliderData.length) % sliderData.length;
  updateSlider(currentIndex);
});

// Ініціалізація першого слайду
updateSlider(currentIndex);
