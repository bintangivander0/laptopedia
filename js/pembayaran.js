document.addEventListener("DOMContentLoaded", function () {
  const orderSummary = document.getElementById("order-summary");
  const keranjang = JSON.parse(sessionStorage.getItem("keranjang")) || [];
  const checkoutData = JSON.parse(sessionStorage.getItem("checkoutData")) || {};

  if (!keranjang.length || !checkoutData) {
    orderSummary.innerHTML = "<p>Data tidak ditemukan. Silakan ulangi checkout.</p>";
    return;
  }

  let subtotal = 0;
  keranjang.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("d-flex", "justify-content-between", "mb-2");
    itemElement.innerHTML = `<div>${item.title} x ${item.quantity}</div><div>Rp ${item.price.toLocaleString()}</div>`;
    orderSummary.appendChild(itemElement);
    subtotal += item.price * item.quantity;
  });

  const totalHarga = subtotal + (checkoutData.ongkir || 0);
  orderSummary.innerHTML += `<hr><div class="d-flex justify-content-between"><strong>Total Bayar</strong><strong>Rp ${totalHarga.toLocaleString()}</strong></div>`;

  const confirmButton = document.getElementById("confirm-payment");

  confirmButton.addEventListener("click", function () {
    const bukti = document.getElementById("bukti-transfer").files[0];
    if (!bukti) {
      Swal.fire("Gagal", "Harap upload bukti transfer terlebih dahulu.", "warning");
      return;
    }

    const noResi = "LPT-" + new Date().toISOString().slice(0, 10).replace(/-/g, "") + "-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    const formData = new FormData();
    formData.append("email", localStorage.getItem("userLogin"));
    formData.append("produkDibeli", keranjang.map((item) => item.title).join(", "));
    formData.append("totalHarga", totalHarga);
    formData.append("ongkir", checkoutData.ongkir);
    formData.append("metodeKirim", checkoutData.metodeKirim);
    formData.append("metodeBayar", checkoutData.metodeBayar);
    formData.append("noResi", noResi);
    formData.append("statusPembayaran", "Sudah Dibayar");
    formData.append("buktiTransfer", bukti);
    formData.append("trackingStatus", "Sedang Diproses");

    console.log("Data yang dikirim:", formData);

    console.log("Data yang dikirim:");
    for (let pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
    }

    fetch("/update-payment", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            title: "Pembayaran Berhasil!",
            html: `Nomor Resi: <b id="copyResi">${noResi}</b><br><button class="btn btn-sm btn-primary mt-2" onclick="copyResi()">Salin Resi</button>`,
            icon: "success",
            allowOutsideClick: false,
          }).then(() => {
            sessionStorage.removeItem("keranjang");
            sessionStorage.removeItem("checkoutData");
            window.location.href = "index.html";
          });
        } else {
          Swal.fire("Gagal", "Terjadi kesalahan saat konfirmasi pembayaran.", "error");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        Swal.fire("Gagal", "Terjadi kesalahan saat menghubungi server.", "error");
      });
  });
});

// Fungsi untuk copy nomor resi
function copyResi() {
  const resi = document.getElementById("copyResi").textContent;
  navigator.clipboard.writeText(resi).then(() => {
    Swal.fire("Disalin!", "Nomor Resi berhasil disalin ke clipboard.", "success");
  });
}