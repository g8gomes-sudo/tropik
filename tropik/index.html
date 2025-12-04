const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJDMp2xzr1fdgqsv9pSYNqTu_u15isTu1FEgCHyZ7jMV6cHteoNA00McvUj_LAVRNkBcJ6kXfRt1Qt/pub?output=csv";

document.addEventListener("DOMContentLoaded", () => {
  fetch(sheetUrl)
    .then(response => response.text())
    .then(csvText => parseCSV(csvText))
    .then(menuData => {
      window.menuData = menuData;
      renderCategories();
      renderItems(Object.keys(menuData)[0]);
    })
    .catch(err => console.error("Erro ao carregar o cardápio:", err));
});

function parseCSV(csvText) {
  const lines = csvText.split("\n").map(l => l.trim()).filter(l => l !== "");
  const header = lines[0].split(",").map(h => h.toLowerCase());

  // Identifica automaticamente os índices das colunas
  const idxCategoria = header.indexOf("categoria");
  const idxNome = header.indexOf("nome");
  const idxPreco = header.indexOf("preço");
  const idxDescricao = header.indexOf("descrição");
  const idxImg = header.indexOf("img");

  const menuData = {};

  // começa da linha 1 (dados)
  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(",");

    const categoria = row[idxCategoria]?.trim().toLowerCase();
    const nome = row[idxNome]?.trim();
    const preco = row[idxPreco]?.trim();
    const descricao = row[idxDescricao]?.trim();
    const img = row[idxImg]?.trim();

    if (!categoria || !nome) continue;

    if (!menuData[categoria]) {
      menuData[categoria] = [];
    }

    menuData[categoria].push({
      name: nome,
      price: preco,
      description: descricao,
      img: img
    });
  }

  return menuData;
}

function renderCategories() {
  const container = document.getElementById("categories");
  container.innerHTML = "";

  Object.keys(menuData).forEach((cat, index) => {
    const btn = document.createElement("button");
    btn.classList.add("cat-btn");
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);

    if (index === 0) btn.classList.add("active");

    btn.onclick = () => selectCategory(cat, btn);
    container.appendChild(btn);
  });
}

function renderItems(category) {
  const container = document.getElementById("items");
  container.innerHTML = "";

  menuData[category].forEach(item => {
    const card = document.createElement("div");
    card.classList.add("item-card");

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="item-info">
        <div class="item-title">${item.name}</div>
        <div class="item-price">R$ ${item.price}</div>
        ${item.description ? `<div class="item-desc">${item.description}</div>` : ""}
      </div>
    `;

    container.appendChild(card);
  });
}

function selectCategory(cat, btn) {
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderItems(cat);
}
