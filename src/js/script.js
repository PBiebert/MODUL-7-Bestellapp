"use strict";
const pageContainer = document.querySelector(".page-container");

function renderPage() {
  clearPageContainer();
  createCompanyHeader();
  createFoodCategoryContainer();
  renderCategorys();
}

function clearPageContainer() {
  pageContainer.innerHTML = "";
}

function createCompanyHeader() {
  pageContainer.innerHTML += templateCompanyHeader();
}

function createFoodCategoryContainer() {
  pageContainer.innerHTML += templateFoodCategoryContainer();
}

function renderCategorys() {
  const categoryList = company.menu;
  const categories = document.querySelector(".categories");
  const foodCategoryContainer = document.querySelector(
    ".food-category-container"
  );

  categories.innerHTML = "";

  for (let i = 0; i < categoryList.length; i++) {
    categories.innerHTML += templateCategory(i);
    foodCategoryContainer.innerHTML += templateFoodCategory(i);
  }
}
