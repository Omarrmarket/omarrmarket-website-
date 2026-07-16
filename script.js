// Marketplace JavaScript

let cart = [];

function addToCart(name, price) {
  cart.push({
    name: name,
    price: price
  });

  alert(name + " has been added to your cart!");

  console.log(cart);
}

function searchProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let products = document.querySelectorAll(".product");

  products.forEach(product => {
    let title = product.querySelector("h3").textContent.toLowerCase();

    if (title.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
