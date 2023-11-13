"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const tabsParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    loader = document.querySelector(".loader");

  // Loader
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);

  function hideTabsContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }
  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabsContent();
  showTabContent();
  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, idx) => {
        if (target === item) {
          hideTabsContent();
          showTabContent(idx);
        }
      });
    }
  });

  // Timer

  const deadline = "2025-08-11";

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const timer = Date.parse(endtime) - Date.parse(new Date());

    if (timer <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      (days = Math.floor(timer / (1000 * 60 * 60 * 24))),
        (hours = Math.floor((timer / (1000 * 60 * 60)) % 24)),
        (minutes = Math.floor((timer / 1000 / 60) % 60)),
        (seconds = Math.floor((timer / 1000) % 60));
    }

    return { timer, days, hours, minutes, seconds };
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = document.querySelector("#days"),
      hours = document.querySelector("#hours"),
      minutes = document.querySelector("#minutes"),
      seconds = document.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;

      if (t.timer <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(".timer", deadline);

  //   Modal

  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  }

  modalTrigger.forEach((item) => {
    item.addEventListener("click", openModal);
  });

  modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  // const modalTimerId = setTimeout(openModal, 5000)

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);

  //   Class

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 11000;
      this.changeToUZS();
    }

    changeToUZS() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");
      this.classes.forEach((className) => element.classList.add(className));
      element.innerHTML = ` 
          
             <img src=${this.src} alt=${this.alt} />
             <h3 class="menu__item-subtitle">${this.title}</h3>
             <div class="menu__item-descr">
               ${this.descr}
             </div>
             <div class="menu__item-divider"></div>
             <div class="menu__item-price">
               <div class="menu__item-cost">Price:</div>
               <div class="menu__item-total"><span>${this.price}</span> month</div>
             </div>
        
        `;
      this.parent.append(element);
    }
  }

  new MenuCard(
    "img/tabs/1.png",
    "usual",
    'Plan "Usual"',
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquid molestiae, sit eveniet, tempora ipsum quaerat recusandae sapiente doloremque corporis dolores quas consectetur ut labore distinctio libero reiciendis harum sequi?",
    10,
    ".menu .container",
    "menu__item"
  ).render();
  new MenuCard(
    "img/tabs/2.jpg",
    "plan",
    "Plan “Premium”",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditatebeatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.",
    20,
    ".menu .container",
    "menu__item"
  ).render();

  new MenuCard(
    "img/tabs/3.jpg",
    "vip",
    "Plan VIP",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditatebeatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.",
    30,
    ".menu .container",
    "menu__item"
  ).render();

  // slider

  const sliders = document.querySelectorAll(".offer__slide"),
    current = document.querySelector("#current"),
    total = document.querySelector("#total"),
    next = document.querySelector(".offer__slider-next"),
    prev = document.querySelector(".offer__slider-prev"),
    sliderWrapper = document.querySelector(".offer__slider-wrapper"),
    sliderInner = document.querySelector(".offer__slider-inner"),
    width = window.getComputedStyle(sliderWrapper).width,
    slider = document.querySelector('.offer__slider')

  let slideIndex = 1;
  let offset = 0;

  if (sliders.length < 10) {
    total.textContent = `0${sliders.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = sliders.length;
    current.textContent = slideIndex;
  }

  sliderInner.style.width = 100 * sliders.length + "%";
  sliderInner.style.display = "flex";
  sliderInner.style.transition = "0.5s ease";
  sliderWrapper.style.overflow = "hidden";

  sliders.forEach((item) => {
    item.style.width = width;
  });

  const indicators = document.createElement('ol')
  const dots = []
  indicators.classList.add('carousel-indicators')
  slider.append(indicators)

  for (let i = 0; i < sliders.length; i++){ 
    const dot = document.createElement('li')
    dot.setAttribute('data-slide-to', i + 1)
    dot.classList.add('carousel-dot')
    if(i == 0) {dot.style.opacity = 1}
    indicators.append(dot)
    dots.push(dot)
  }

  function deleteNotDigits(str) { 
     return parseInt(str.replace(/\D/g, ''))
  }
  next.addEventListener("click", () => {
    if (offset == deleteNotDigits(width) * (sliders.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(width);
    }
    sliderInner.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == sliders.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    if (sliders.length > 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
    dots.forEach(dot => dot.style.opacity = '.5')
    dots[slideIndex - 1].style.opacity = 1
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (sliders.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }
    sliderInner.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == 1) {
      slideIndex = sliders.length;
    } else {
      slideIndex--;
    }
    if (sliders.length > 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
    dots.forEach(dot => dot.style.opacity = '.5')
    dots[slideIndex - 1].style.opacity = 1
  });


  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to')
      console.log(slideTo)
      slideIndex = slideTo
      offset = deleteNotDigits(width) * (slideTo - 1)
      sliderInner.style.transform = `translateX(-${offset}px)`;

      if (sliders.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = '.5')
      dots[slideIndex - 1].style.opacity = 1
    })
  })

  // slideShow(slideIndex)

  // function slideShow(idx) {
  //   if (idx > sliders.length) {
  //     slideIndex = 1
  //   }
  //   if (idx < 1) {
  //     slideIndex = sliders.length
  //   }
  //   sliders.forEach((item) =>  item.style.display = 'none')
  //   sliders[slideIndex - 1].style.display = 'block'

  //   if (sliders.length < 10) {
  //     current.textContent = `0${slideIndex}`
  //   } else {
  //     current.textContent = slideIndex
  //   }
  // }

  // function plusSlide(idx) {
  //   slideShow(slideIndex += idx)
  // }

  // next.addEventListener('click', () => plusSlide(1))
  // prev.addEventListener('click', () => plusSlide(-1))
});
