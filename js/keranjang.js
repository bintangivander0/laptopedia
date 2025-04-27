// Ambil elemen DOM
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const discountElement = document.getElementById("discount");
const finalPriceElement = document.getElementById("final-price");
const orderButton = document.getElementById("order-button");
const clearCartButton = document.getElementById("clear-cart");

// Ambil data keranjang dari sessionStorage
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Fungsi untuk memperbarui tampilan keranjang
function updateCartDisplay() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="text-center text-muted">Keranjang kosong.</p>`;
    orderButton.disabled = true;
    return;
  }

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-3", "border-bottom", "pb-2");

    cartItem.innerHTML = `
      <div class="d-flex align-items-center">
        <img src="${item.image}" alt="${item.title}" class="img-thumbnail me-3" style="width: 200px; height: 200px; border-color: #efefef; box-shadow: 10px 20px 18px rgba(0, 0, 0, 0.53);">
        <div>
          <h5 class="mb-1">${item.title}</h5>
          <p class="mb-1 text-muted">Rp ${item.price.toLocaleString()} x ${item.quantity}</p>
          <button class="btn btn-sm btn-outline-danger remove-item" data-index="${index}">Hapus</button>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <button class="btn btn-sm btn-outline-secondary decrease-quantity" data-index="${index}">-</button>
        <span class="mx-2">${item.quantity}</span>
        <button class="btn btn-sm btn-outline-secondary increase-quantity" data-index="${index}">+</button>
      </div>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  updateSummary();
}

// Fungsi untuk memperbarui ringkasan belanja
function updateSummary() {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = totalPrice > 50000000 ? totalPrice * 0.1 : 0; // Diskon 10% jika total harga > Rp 50.000.000
  const finalPrice = totalPrice - discount;

  totalPriceElement.textContent = `Rp ${totalPrice.toLocaleString()}`;
  discountElement.textContent = `Rp ${discount.toLocaleString()}`;
  finalPriceElement.textContent = `Rp ${finalPrice.toLocaleString()}`;

  orderButton.disabled = cart.length === 0;
}

// Fungsi untuk menambah produk ke keranjang
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);

  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  sessionStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

// Fungsi untuk mengurangi kuantitas produk
function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }

  sessionStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

// Fungsi untuk menambah kuantitas produk
function increaseQuantity(index) {
  cart[index].quantity += 1;

  sessionStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

// Fungsi untuk menghapus produk dari keranjang
function removeItem(index) {
  cart.splice(index, 1);

  sessionStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

// Fungsi untuk mengosongkan keranjang
function clearCart() {
  cart = [];
  sessionStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

// Event listener untuk tombol-tombol di keranjang
cartItemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("decrease-quantity")) {
    const index = e.target.getAttribute("data-index");
    decreaseQuantity(index);
  } else if (e.target.classList.contains("increase-quantity")) {
    const index = e.target.getAttribute("data-index");
    increaseQuantity(index);
  } else if (e.target.classList.contains("remove-item")) {
    const index = e.target.getAttribute("data-index");
    removeItem(index);
  }
});

// Event listener untuk tombol "Hapus Semua"
clearCartButton.addEventListener("click", clearCart);

// Inisialisasi tampilan keranjang
updateCartDisplay();

// Aksi ketika tombol "Pesan Sekarang" diklik
document.getElementById('order-button').addEventListener('click', function() {
  sessionStorage.setItem('keranjang', JSON.stringify(cart)); // Simpan keranjang ke sessionStorage
  window.location.href = 'checkout.html'; // Redirect ke checkout.html
});
