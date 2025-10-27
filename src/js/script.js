"use strict";
const pageContainer = document.querySelector(".page-container");

const categoryList = company.menu;
let currentCategoryIndex;
let currentItemIndex;

let cart = [];
let cartSubCosts = 0;
let totalCosts = company.delivery_costs;

function renderPage() {
  clearPageContainer();
  createCompanyHeader();
  createFoodCategoryContainer();
  renderCategorys();
  renderSumArea();
  checkIfItemInCart();
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
  const categories = document.querySelector(".categories");
  const foodCategoryContainer = document.querySelector(".food-category-container");

  categories.innerHTML = "";

  for (let i = 0; i < categoryList.length; i++) {
    categories.innerHTML += templateCategory(i);
    foodCategoryContainer.innerHTML += templateFoodCategory(i);
    renderDishes(i);
  }
}

function renderDishes(i) {
  const foodListContainer = document.getElementById(`${company.menu[i].category}`);

  for (let j = 0; j < company.menu[i].items.length; j++) {
    foodListContainer.innerHTML += templateFoodListItem(i, j);
  }
}

function setCurrentIndex(id) {
  let currentItem = id.split("_");
  currentCategoryIndex = currentItem[0];
  currentItemIndex = currentItem[1];
}

function renderCart() {
  const cartList = document.querySelector(".cart-list");
  cartList.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    cartList.innerHTML += templateCartArticle(i);
  }
  calcCosts();
  checkIfItemInCart();
}

function addItemToCart(id) {
  setCurrentIndex(id);
  let cartItemRef = cart.find((item) => {
    return item.id == id;
  });
  if (cartItemRef) {
    cartItemRef.amount++;
    cartItemRef.sum = cartItemRef.price * cartItemRef.amount;
  } else {
    cart.push(creatCartObject());
  }
  renderCart();
}

function creatCartObject() {
  return {
    "name": company.menu[currentCategoryIndex].items[currentItemIndex].name,
    "price": company.menu[currentCategoryIndex].items[currentItemIndex].price,
    "amount": 1,
    "sum": company.menu[currentCategoryIndex].items[currentItemIndex].price,
    "id": currentCategoryIndex + "_" + currentItemIndex,
  };
}

function reduceItemToCart(id) {
  setCurrentIndex(id);
  let cartItemRef = cart.find((item) => {
    return item.id == id;
  });
  if (cartItemRef) {
    cartItemRef.amount--;
    cartItemRef.sum = cartItemRef.price * cartItemRef.amount;

    if (cartItemRef.amount === 0) {
      removeItemToCart(id);
    }
  }
  renderCart();
}

function removeItemToCart(id) {
  let itemIndex = cart.findIndex((item) => item.id == id);
  cart.splice(itemIndex, 1);
  renderCart();
}

function renderSumArea() {
  let sumArea = document.querySelector(".sum-area");
  sumArea.innerHTML = "";

  sumArea.innerHTML += templateSumArea();
}

function calcCosts() {
  cartSubCosts = 0;
  totalCosts = 0;
  for (let i = 0; i < cart.length; i++) {
    cartSubCosts += cart[i].sum;
  }
  totalCosts = cartSubCosts + company.delivery_costs;
  renderSumArea();
}

function checkIfItemInCart() {
  let button = document.querySelector(".order-now");
  let cartList = document.querySelector(".cart-list");

  if (cartSubCosts <= company.minimum_order_value) {
    button.disabled = true;
    cartList.innerHTML = defaultCart();
  } else {
    button.disabled = false;
  }
}

function klick() {
  console.log("geht");
}
