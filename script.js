function tampilkan(halaman) {
  // Sembunyikan semua halaman
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("aktif");
  });

  // Tampilkan halaman yang dipilih
  document.getElementById(halaman).classList.add("aktif");
}