function templateCompanyHeader() {
  return `
        <header class="company-header">
          <div class="header-banner">
            <img src="src/img/${company.headder_img}" alt="Bild einer Pizza" />
            <div class="logo">
              <img src="src/icon/${company.icon}" alt="Logo von Pizza ABC" />
            </div>
          </div>

          <div class="container">
            <h1 class="company-name">${company.name}</h1>
            <div class="reviews">
              <h4>Bewertung (${String(company.rating).replace(
                ".",
                ","
              )} von 5 Sternen)</h4>
            </div>
                <div class="categories" aria-labelledby="categorie-button">
                </div> 
          </div>
        </header>
    `;
}

function templateCategory(i) {
  return `
        <button type="button" class="categorie-button" aria-label="Button für die Kategorie ${company.menu[i].category}">
            ${company.menu[i].category}
        </button>
`;
}

function templateFoodCategoryContainer() {
  return `
    <section class="food-category-container">

    </section>; `;
}

function templateFoodCategory(i) {
  return `
    <section class="food-category">
        <header class="food-category">
        <img src="src/img/${company.menu[i].food_category_img}" alt="Bild der Kategorie ${company.menu[i].category}" />
        <div class="container">
            <h2>${company.menu[i].category}</h2>
        </div>
        </header>

        <section class="food-list container"></section>
    </section>; `;
}

function templateFoodListItem(i) {
  return `
    <div class="food-card">
        <h3 class="name" id="pizza">
        Pizza Salami
        </h3>
        <p class="topping">mit Salami und Peperoni</p>
        <p class="price">9,50 €</p>
        <button
        type="button"
        class="add-button"
        aria-label="Artikel zum Warenkorb hinzufügen"
        >
        <p>+</p>
        </button>
    </div>`;
}
