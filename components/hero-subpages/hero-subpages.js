function CreateHeroSubpages(textTitle, textDescription) {
  const heroSubpageRoot = document.querySelector("#hero-subpage-root");
  heroSubpageRoot.innerHTML = `
  <style>
    #hero-subpages {
      width: 100%;
      padding: calc(120px + 20vh) 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      background: url("assets/images/banner-bar-baridade.jpg") center center
      no-repeat;
      background-size: cover;
      color: var(--white);

      h1 {
        font-size: 84px;
        font-weight: 600;
        text-transform: uppercase;

        span {
          color: var(--primary-color);
        }
      }

      p {
        font-size: 18px;
      }
    }
  </style>
  <section id="hero-subpages">
    <h1>${textTitle}</h1>
    <p>${textDescription}</p>
  </section>`;
}
