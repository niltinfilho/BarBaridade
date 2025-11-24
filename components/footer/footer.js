async function loadComponent(url) {
  const response = await fetch(url);
  const html = await response.text();
  return html;
}

async function renderFooter() {
  const footerHTML = await loadComponent("components/footer/footer.html");
  document.querySelector("#footer-root").innerHTML = footerHTML;
}

renderFooter();
