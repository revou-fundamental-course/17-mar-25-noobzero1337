// Ini File JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Get elements for Luas Persegi
  const inputLuas = document.querySelector(".input-luas");
  const btnHitungLuas = document.querySelector(".btn-hitung");
  const btnResetLuas = document.querySelector(".btn-reset");
  const resultLuas = document.querySelector(".section-luas-result");

  // Get elements for Keliling Persegi
  const inputKeliling = document.querySelector(".input-keliling");
  const btnHitungKeliling = document.querySelectorAll(".btn-hitung")[1];
  const btnResetKeliling = document.querySelectorAll(".btn-reset")[1];
  const resultKeliling = document.querySelector(".section-keliling-result");

  // Fungsi untuk menampilkan alert validasi
  function showValidation(message) {
    alert(message);
  }

  // Fungsi untuk menghitung Luas
  btnHitungLuas.addEventListener("click", function () {
    const sisi = parseFloat(inputLuas.value);
    resultLuas.innerHTML = "";

    if (!isNaN(sisi) && sisi > 0) {
      const luas = sisi * sisi;
      resultLuas.innerHTML = `
        <p>L = S x S</p>
        <p>L = ${sisi} x ${sisi}</p>
        <p>L = ${luas}</p>
      `;
    } else {
      showValidation("Masukkan nilai sisi yang valid!");
    }
  });

  // Fungsi untuk reset Luas
  btnResetLuas.addEventListener("click", function () {
    inputLuas.value = "";
    resultLuas.innerHTML = "";
  });

  // Fungsi untuk menghitung Keliling
  btnHitungKeliling.addEventListener("click", function () {
    const sisi = parseFloat(inputKeliling.value);
    resultKeliling.innerHTML = "";

    if (!isNaN(sisi) && sisi > 0) {
      const keliling = 4 * sisi;
      resultKeliling.innerHTML = `
        <p>K = 4 x S</p>
        <p>K = 4 x ${sisi}</p>
        <p>K = ${keliling}</p>
      `;
    } else {
      showValidation("Masukkan nilai sisi yang valid!");
    }
  });

  // Fungsi untuk reset Keliling
  btnResetKeliling.addEventListener("click", function () {
    inputKeliling.value = "";
    resultKeliling.innerHTML = "";
  });
});
