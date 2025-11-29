async function loadComponent(url) {
  const response = await fetch(url);
  const html = await response.text();
  return html;
}

async function renderMenu() {
  const menuHTML = await loadComponent("components/menu/menu.html");
  document.querySelector("#menu-root").innerHTML = menuHTML;

  var swiper = new Swiper(".swiper-menu-section", {
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    grabCursor: true,
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
    },
  });

  setTimeout(() => {
    swiper.update();
    swiper.autoplay.start();
  }, 100);
}

renderMenu();
