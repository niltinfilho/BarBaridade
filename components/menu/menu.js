async function loadComponent(url) {
  const response = await fetch(url);
  const html = await response.text();
  return html;
}

async function renderMenu() {
  const menuHTML = await loadComponent("components/menu/menu.html");
  document.querySelector("#menu-root").innerHTML = menuHTML;

  var swiper = new Swiper(".swiper-menu-section", {
    slidesPerView: 3,

    centeredSlides: true,
    spaceBetween: 24,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    grabCursor: true,
  });

  setTimeout(() => {
    swiper.update();
    swiper.autoplay.start();
  }, 100);
}

renderMenu();
