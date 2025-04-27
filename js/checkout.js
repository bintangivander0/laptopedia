// Function untuk menampilkan produk dari keranjang di halaman checkout
function displayCartItems() {
  const keranjang = JSON.parse(sessionStorage.getItem("keranjang")) || [];
  const orderSummary = document.getElementById("order-summary");

  if (keranjang.length === 0) {
    orderSummary.innerHTML = '<p class="text-center text-muted">Tidak ada produk dalam keranjang.</p>';
    return;
  }

  let subtotal = 0;

  keranjang.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("order-item", "d-flex", "justify-content-between", "mb-2");
    itemElement.innerHTML = `
      <div><strong>${item.title}</strong> x ${item.quantity}</div>
      <div>Rp ${item.price.toLocaleString()}</div>
    `;
    orderSummary.appendChild(itemElement);
    subtotal += item.price * item.quantity;
  });

  // Update subtotal dan total awal (ongkir belum dipilih)
  document.getElementById("shipping-cost").textContent = `Rp 0`;
  document.getElementById("total-payment").textContent = `Rp ${subtotal.toLocaleString()}`;
}

// Function untuk update ongkir dan total harga saat user pilih kota/kurir
function updateShippingCost() {
  const kota = document.getElementById('kota').value;
  const kurir = document.querySelector('input[name="pengiriman"]:checked');
  const keranjang = JSON.parse(sessionStorage.getItem('keranjang')) || [];

  if (kota && kurir) {
    const ongkos = ongkirData[kota]?.[kurir.value] || 0;
    const subtotal = keranjang.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal + ongkos;

    document.getElementById('shipping-cost').textContent = `Rp ${ongkos.toLocaleString()}`;
    document.getElementById('total-payment').textContent = `Rp ${total.toLocaleString()}`;
  }
}

// Event listener: kalau user ganti kota atau kurir
document.getElementById('kota').addEventListener('change', updateShippingCost);
document.querySelectorAll('input[name="pengiriman"]').forEach(input => {
  input.addEventListener('change', updateShippingCost);
});

// Event listener untuk tombol Bayar Sekarang
document.getElementById("checkout-button").addEventListener("click", function(event) {
  event.preventDefault();

  // Validasi data form
  const namaLengkap = document.getElementById("namaLengkap").value.trim();
  const noHP = document.getElementById("noHP").value.trim();
  const alamatLengkap = document.getElementById("alamatLengkap").value.trim();
  const kota = document.getElementById("kota").value.trim();
  const kodePos = document.getElementById("kodePos").value.trim();
  const pengiriman = document.querySelector('input[name="pengiriman"]:checked');
  const pembayaran = document.querySelector('input[name="pembayaran"]:checked');

  if (!namaLengkap || !noHP || !alamatLengkap || !kota || !kodePos || !pengiriman || !pembayaran) {
    alert("Mohon lengkapi semua data checkout dan pilih metode pengiriman/pembayaran!");
    return;
  }

  // Simpan data checkout ke sessionStorage
  const checkoutData = {
    namaLengkap,
    noHP,
    alamatLengkap,
    kota,
    kodePos,
    metodeKirim: pengiriman.value,
    metodeBayar: pembayaran.value,
    ongkir: parseInt(document.getElementById('shipping-cost').textContent.replace(/[Rp.]/g, '').replace('.', '')) || 0
  };

  sessionStorage.setItem("checkoutData", JSON.stringify(checkoutData));

  // Redirect ke halaman pembayaran
  window.location.href = "pembayaran.html";
});

// Panggil fungsi utama saat halaman siap
document.addEventListener("DOMContentLoaded", function() {
  displayCartItems();
});
