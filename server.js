const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const fs         = require('fs');
const path       = require('path');
const csv        = require('csv-parser');
const ORDERS_CSV_PATH = path.join(__dirname, 'orders.csv'); 

const cors = require('cors');

// Konfigurasi CORS
app.use(cors({
  origin: 'http://145.79.10.174:3000', // Ganti '*' dengan domain frontend Anda jika sudah menggunakan domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Metode HTTP yang diizinkan
  allowedHeaders: ['Content-Type', 'Authorization'], // Header yang diizinkan
}));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname))); // serve file html, css, js

const CSV_PATH = path.join(__dirname, 'users.csv');

// Buat file CSV jika belum ada
if (!fs.existsSync(CSV_PATH)) {
  fs.writeFileSync(CSV_PATH, 'nama,email,password,alamat\n');
}

// SIGNUP
app.post('/signup', (req, res) => {
  const { nama, email, password, alamat } = req.body;
  const line = `\n${nama},${email},${password},"${alamat}"`;
  fs.appendFile(CSV_PATH, line, err => {
    if (err) return res.status(500).json({ success: false, message: 'Gagal menyimpan.' });
    res.json({ success: true });
  });
});

// LOGIN
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  let found = false;
  fs.createReadStream(CSV_PATH)
    .pipe(csv())
    .on('data', row => {
      if (row.email === email && row.password === password) {
        found = true;
      }
    })
    .on('end', () => {
      if (found) res.json({ success: true });
      else res.status(401).json({ success: false, message: 'Email atau password salah.' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server berjalan di http://145.79.10.174:${PORT}`);
});



const multer = require("multer");

// Konfigurasi multer untuk menangani file upload
const upload = multer({ dest: "uploads/" });

// Middleware untuk menangani JSON dan URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint untuk update pembayaran
app.post("/update-payment", upload.single("buktiTransfer"), (req, res) => {
  console.log("Body:", req.body); // Log data yang diterima
  console.log("File:", req.file); // Log file yang diunggah

  const {
    email,
    produkDibeli,
    totalHarga,
    ongkir,
    metodeKirim,
    metodeBayar,
    noResi,
    statusPembayaran,
    trackingStatus,
  } = req.body;

  const buktiTransfer = req.file ? req.file.filename : null;

  // Validasi data
  if (!email || !produkDibeli || !totalHarga || !ongkir || !metodeKirim || !metodeBayar || !noResi || !statusPembayaran || !buktiTransfer || !trackingStatus) {
    console.error("Data tidak lengkap:", req.body);
    return res.status(400).json({ success: false, message: "Data tidak lengkap." });
  }

  // Simpan ke orders.csv
  const newOrder = `\n${email},"${produkDibeli}",${totalHarga},${ongkir},${metodeKirim},${metodeBayar},${noResi},${statusPembayaran},${buktiTransfer},${trackingStatus}`;

  fs.appendFile(ORDERS_CSV_PATH, newOrder, (err) => {
    if (err) {
      console.error("Gagal menyimpan pesanan:", err);
      return res.status(500).json({ success: false, message: "Gagal menyimpan pesanan" });
    }
    res.json({ success: true });
  });
});

// Endpoint untuk mendapatkan pesanan berdasarkan email
app.get("/get-orders", (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email tidak diberikan." });
  }

  const orders = [];

  fs.createReadStream(ORDERS_CSV_PATH)
    .pipe(csv())
    .on("data", (row) => {
      if (row.email === email) {
        orders.push(row);
      }
    })
    .on("end", () => {
      res.json(orders);
    })
    .on("error", (err) => {
      console.error("Gagal membaca file orders.csv:", err);
      res.status(500).json({ success: false, message: "Gagal membaca data pesanan." });
    });
});
