async function loadComponent(url) {
  const response = await fetch(url);
  const html = await response.text();
  return html;
}

async function renderHeader() {
  const headerHTML = await loadComponent("components/header/header.html");
  document.querySelector("#header-root").innerHTML = headerHTML;
}

renderHeader();
