async function loadComponent(url) {
  const response = await fetch(url);
  const html = await response.text();
  return html;
}

async function renderSobre() {
  const sobreHTML = await loadComponent("components/sobre/sobre.html");
  document.querySelector("#sobre-root").innerHTML = sobreHTML;

  var swiper = new Swiper(".swiper-about-section", {
    spaceBetween: 0,
    centeredSlides: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });

  setTimeout(() => {
    swiper.update();
    swiper.autoplay.start();
  }, 100);
}

renderSobre();
