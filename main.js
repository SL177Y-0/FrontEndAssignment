
const products = [
    { id: 1, name: "PAPAD", price: 25 },
    { id: 2, name: "CHAI", price: 15 },
    { id: 3, name: "PAKODA", price: 10 }
  ];
  
  let cart = [];

  function renderProducts() {
    const prodList = document.getElementById("productsList");
    prodList.innerHTML = ""; 
  
    products.forEach(prod => {
      const prodDiv = document.createElement("div");
      prodDiv.className = "product";
      prodDiv.innerHTML = `
        <span>${prod.name} - ₹${prod.price.toFixed(2)}</span>
        <button onclick="addToCart(${prod.id})">Add to Cart</button>
      `;
      prodList.appendChild(prodDiv);
    });
  }
  
  function addToCart(prodId) {
    const selectedProd = products.find(p => p.id === prodId);
    if (selectedProd) {
      cart.push(selectedProd);
      renderCart();
    }
  }

  function renderCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = ""; 
  
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "cart-item";
      li.innerHTML = `
        ${item.name} - ₹${item.price.toFixed(2)}
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartList.appendChild(li);
    });
  }
  
  function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
  }
  
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    alert(`Proceeding to checkout with ${cart.length} item(s)!`);
  });
  
  renderProducts();
  