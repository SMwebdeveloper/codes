"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const tabsParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    loader = document.querySelector('.loader')


    // Loader
    setTimeout(() => {
      loader.style.opacity = '0'
        setTimeout(() => {
          loader.style.display = 'none'
      }, 500)
    }, 2000)

  function hideTabsContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide")
      item.classList.remove("show")
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }
  function showTabContent(i = 0) {
      tabsContent[i].classList.add("show")
      tabsContent[i].classList.remove("hide")
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
});
