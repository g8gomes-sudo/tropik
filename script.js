document.addEventListener("DOMContentLoaded", () => {

  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJDMp2xzr1fdgqsv9pSYNqTu_u15isTu1FEgCHyZ7jMV6cHteoNA00McvUj_LAVRNkBcJ6kXfRt1Qt/pub?output=csv";

  async function loadData() {
    const response = await fetch(SHEET_URL);
    const csv = await response.text();

    const lines = csv.split("\n").map(l => l.trim()).filter(Boolean);
    const header = lines[0].split(",");

    const items = lines.slice(1).map(line => {
      const cols = line.split(",");
      return {
        categoria: cols[0],
        nome: cols[1],
        preco: cols[2],
        descricao: cols[3],
        img: cols[4]
      };
    });

    renderMenu(items);
  }

  function renderMenu(items) {
    const container = document.getElementById("menu");
    container.innerHTML = "";

    const categorias = [...new Set(items.map(i => i.categoria))];

    categorias.forEach(cat => {
      const section = document.createElement("section");
      section.className = "category-section";
      section.innerHTML = `<h2>${cat}</h2>`;

      const grid = document.createElement("div");
      grid.className = "items-grid";

      const filtered = items.filter(i => i.categoria === cat);

      filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "item-card";

        card.innerHTML = `
          <img src="${item.img}" alt="${item.nome}" />
          <div class="info">
            <h3>${item.nome}</h3>
            <p class="desc">${item.descricao}</p>
            <p class="preco">R$ ${item.preco}</p>
          </div>
        `;

        grid.appendChild(card);
      });

      section.appendChild(grid);
      container.appendChild(section);
    });
  }

  loadData();
});
