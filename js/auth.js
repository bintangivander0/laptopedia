document.addEventListener('DOMContentLoaded', () => {
  const API = 'http://localhost:3000';

  // SIGN UP
  document.getElementById('btnSignup').addEventListener('click', async (e) => {
    e.preventDefault();
    const payload = {
      nama:     document.getElementById('signupNama').value.trim(),
      email:    document.getElementById('signupEmail').value.trim(),
      password: document.getElementById('signupPass').value,
      alamat:   document.getElementById('signupAlamat').value.trim()
    };
    const res = await fetch(`${API}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const j = await res.json();
    if (j.success) {
      alert('Registrasi berhasil! Silakan login.');
      document.querySelector('.flip-btn').click();
    } else {
      alert('Gagal registrasi.');
    }
  });

  // LOGIN
  document.getElementById('btnLogin').addEventListener('click', async (e) => {
    e.preventDefault();
    const payload = {
      email:    document.getElementById('loginEmail').value.trim(),
      password: document.getElementById('loginPass').value
    };
    const res = await fetch(`${API}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      localStorage.setItem('showLoginToast', '1'); // simpan flag toast
      localStorage.setItem('userLogin', payload.email); // opsional: simpan user info
      window.location.href = 'index.html'; // redirect ke halaman utama
    } else {
      const j = await res.json();
      alert(j.message || 'Login gagal.');
    }
  });
});

