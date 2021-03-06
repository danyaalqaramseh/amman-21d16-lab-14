/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')); //|| [];
  // console.log(cartItems);
  cart = new Cart(cartItems);
  // console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
const tbody = document.querySelector('tbody');

function clearCart() {

  while (tbody.lastChild) {
    tbody.removeChild(tbody.lastChild);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  for (let i in cart.items) {
    let trEl = document.createElement('tr');
    tbody.appendChild(trEl);

    const dumpItem = document.createElement('button');
    dumpItem.type = 'button';
    dumpItem.textContent = 'X';
    dumpItem.id = i;
    trEl.appendChild(dumpItem);

    let quantity = document.createElement('td');
    quantity.textContent = cart.items[i].quantity;
    trEl.appendChild(quantity);

    let product = document.createElement('td');
    product.textContent = cart.items[i].product;
    trEl.appendChild(product);

  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  cart.removeItem(parseInt(event.target.id));
  // console.log('target', event.target.id);
  cart.saveToLocalStorage();
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
