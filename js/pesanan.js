document.addEventListener("DOMContentLoaded", function () {
  const pesananContent = document.getElementById("pesanan-content");
  const email = localStorage.getItem("userLogin");

  if (!email) {
    pesananContent.innerHTML = "<p>Silakan login untuk melihat pesanan Anda.</p>";
    return;
  }

  fetch(`http://145.79.10.174:3000/get-orders?email=${encodeURIComponent(email)}`)
  .then((response) => {
    console.log("Status Code:", response.status);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((orders) => {
    console.log("Pesanan yang diterima:", orders);
    if (orders.length === 0) {
      pesananContent.innerHTML = "<p>Belum ada pesanan.</p>";
      return;
    }

      pesananContent.innerHTML = "";
      orders.forEach((order) => {
        const orderDiv = document.createElement("div");
        orderDiv.classList.add("border", "p-3", "mb-3", "rounded", "bg-light");
        orderDiv.innerHTML = `
          <h6>Produk: ${order.produkDibeli}</h6>
          <p><strong>Total Harga:</strong> Rp ${parseInt(order.totalHarga).toLocaleString()}</p>
          <p><strong>Ongkir:</strong> Rp ${parseInt(order.ongkir).toLocaleString()}</p>
          <p><strong>Metode Kirim:</strong> ${order.metodeKirim}</p>
          <p><strong>Metode Bayar:</strong> ${order.metodeBayar}</p>
          <p><strong>Status Pembayaran:</strong> ${order.statusPembayaran}</p>
          <p><strong>No. Resi:</strong> <span id="resi-${order.noResi}">${order.noResi}</span> <button class="btn btn-sm btn-outline-primary ms-2" onclick="copyResi('${order.noResi}')">Salin</button></p>
          <p><strong>Status Pengiriman:</strong> ${order.trackingStatus}</p>
        `;
        pesananContent.appendChild(orderDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching orders:", error);
      pesananContent.innerHTML = "<p>Gagal memuat pesanan.</p>";
    });
});

function copyResi(resi) {
  navigator.clipboard.writeText(resi).then(() => {
    Swal.fire("Disalin!", "Nomor Resi berhasil disalin ke clipboard.", "success");
  });
}
