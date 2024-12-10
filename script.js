const navMenu = document.querySelector(".nav-ul-600");

navMenu.addEventListener("wheel", (event) => {
  event.preventDefault(); // Mencegah scroll vertikal default
  navMenu.scrollBy({
    left: event.deltaY, // Mengubah deltaY menjadi scroll horizontal
    behavior: "smooth", // Gulir halus
  });
});

// Ambil elemen menu dan icon
const menuIcon = document.getElementById("menu-icon");

// Tambahkan event listener untuk klik pada menu icon
menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("open"); // Toggle kelas "open" untuk membuka/menutup menu
  menuIcon.classList.toggle("open"); // Toggle kelas "open" pada ikon untuk animasi
});

