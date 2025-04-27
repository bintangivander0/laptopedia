document.getElementById('searchInput').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const productCards = document.querySelectorAll('.card');

    productCards.forEach(card => {
      const title = card.querySelector('.card-title').innerText.toLowerCase();
      const description = card.querySelector('.card-text').innerText.toLowerCase();

      if (title.includes(searchValue) || description.includes(searchValue)) {
        card.style.display = 'block'; // Tampilkan kartu
      } else {
        card.style.display = 'none'; // Sembunyikan kartu
      }
    });
  });