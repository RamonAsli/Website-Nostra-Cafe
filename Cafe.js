// Smooth scrolling untuk navigasi internal (jika href mengarah ke ID di halaman yang sama)
document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Jika link mengarah ke section di halaman yang sama
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    // Jika tidak, biarkan navigasi default (ke halaman lain)
  });
});

// Fungsi submit form di halaman Contact
function submitOrder() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const notification = document.getElementById("notification");

  // Cek apakah elemen form tersedia
  if (!name || !email || !message || !notification) {
    console.warn("Elemen form tidak ditemukan di halaman ini.");
    return;
  }

  // Validasi input — semua harus diisi
  if (name.value && email.value && message.value) {
    notification.style.display = "block";
    notification.textContent = `Terima kasih, ${name.value}! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda di ${email.value}.`;

    // Reset form setelah submit
    name.value = "";
    email.value = "";
    message.value = "";

    // Sembunyikan notifikasi setelah 5 detik
    setTimeout(() => {
      notification.style.display = "none";
    }, 5000);
  } else {
    alert("Mohon isi semua field sebelum mengirim pesan.");
  }
}

// ===== DARK MODE TOGGLE =====
const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "🌞";
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Saat halaman dimuat, cek preferensi pengguna
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "🌞";
  }
});
