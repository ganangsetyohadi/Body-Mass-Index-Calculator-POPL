// Fungsi untuk menampilkan teks animasi
function animateTextToDiv(text, Div, speed, callback) {
    let index = 0;
    const words = String(text).split(" ");
    const interval = setInterval(() => {
      if (index < words.length) {
        Div.innerHTML += words[index] + " ";
        index++;
      } else {
        clearInterval(interval);
        if (typeof callback === "function") {
          callback(); // Jalankan callback setelah animasi selesai
        }
      }
    }, speed);
  }
  
  function getAdvices(bmi, classification) {
    calButton = document.getElementById("calButton");
    const advice = [
      {
        level: "Severe Thinness",
        tips: "1. Prioritaskan asupan kalori dengan makanan yang kaya nutrisi.\n2. Makan lebih sering untuk meningkatkan asupan energi.\n3. Konsultasikan dengan seorang profesional kesehatan untuk pemantauan medis teratur.\n4. Pertimbangkan suplemen gizi jika direkomendasikan oleh dokter.\n5. Fokus pada makanan tinggi protein dan lemak sehat.",
      },
      {
        level: "Moderate Thinness",
        tips: "1. Pilih makanan dengan kualitas nutrisi tinggi.\n2. Pastikan makanan Anda mengandung protein, karbohidrat, lemak, sayuran, dan buah-buahan.\n3. Konsultasikan dengan ahli gizi untuk rencana makan yang sesuai.\n4. Jangan lupakan aktivitas fisik yang sehat dan ringan.\n5. Pertimbangkan dukungan psikologis jika Anda merasa cemas tentang berat badan Anda.",
      },
      {
        level: "Mild Thinness",
        tips: "1. Pertahankan pola makan seimbang dan teratur.\n2. Tambahkan camilan sehat di antara waktu makan utama.\n3. Fokus pada asupan protein untuk membangun massa otot.\n4. Pertimbangkan aktivitas fisik yang menyenangkan seperti berjalan kaki atau yoga.\n5. Pertimbangkan dukungan teman atau keluarga untuk menjaga motivasi Anda.",
      },
      {
        level: "Normal",
        tips: "1. Pertahankan pola makan seimbang dengan variasi makanan.\n2. Lanjutkan rutinitas olahraga yang teratur.\n3. Pertimbangkan makan dengan porsi yang sesuai dengan rasa lapar Anda.\n4. Pantau berat badan Anda secara berkala.\n5. Berfokus pada kesehatan dan kebugaran, bukan hanya angka berat badan.",
      },
      {
        level: "Overweight",
        tips: "1. Kurangi konsumsi makanan tinggi lemak dan gula.\n2. Tingkatkan asupan serat dengan makanan seperti sayuran dan buah-buahan.\n3. Tetapkan target penurunan berat badan yang realistis.\n4. Lakukan olahraga aerobik seperti berlari, bersepeda, atau berenang.\n5. Pertimbangkan konsultasi dengan seorang ahli gizi untuk rencana diet yang sesuai.",
      },
      {
        level: "Obese Class I",
        tips: "1. Kurangi porsi makan dan batasi makanan olahan.\n2. Komitmen pada program penurunan berat badan yang sehat.\n3. Pertimbangkan dukungan medis atau terapi.\n4. Tingkatkan aktivitas fisik secara bertahap.\n5. Monitor kemajuan Anda secara teratur.",
      },
      {
        level: "Obese Class II",
        tips: "1. Konsultasikan dengan seorang ahli obesitas atau spesialis kesehatan.\n2. Pertimbangkan opsi perawatan seperti operasi bariatrik.\n3. Fokus pada perubahan pola makan yang berkelanjutan.\n4. Rutin menjalani pemeriksaan kesehatan.\n5. Dapatkan dukungan psikologis jika diperlukan.",
      },
      {
        level: "Obese Class III",
        tips: "1. Konsultasikan dengan seorang spesialis obesitas segera.\n2. Evaluasi semua pilihan perawatan yang mungkin termasuk operasi.\n3. Komitmen untuk perubahan pola makan dan gaya hidup yang drastis.\n4. Tingkatkan aktivitas fisik secara berkelanjutan.\n5. Dapatkan dukungan dari tim perawatan kesehatan.",
      },
    ];
  
    // Anda dapat menggunakan objek ini dalam kode JavaScript Anda untuk menampilkan saran berdasarkan kategori berat badan.
  
    // Anda dapat menggunakan objek ini dalam kode JavaScript Anda untuk menampilkan saran berdasarkan kategori berat badan.
    const adviceDiv = document.getElementById("advice");
  
    // Mendapatkan tips untuk kategori berdasarkan argument classification
    const adviceText = advice.find((item) => item.level === classification).tips;
  
    animateTextToDiv("\nSaran untuk anda : \n", resultDiv, 200);
    setTimeout(() => {
      // adviceDiv.innerHTML = "";
      // Mulai animasi teks di dalam elemen "advice"
      animateTextToDiv(adviceText, adviceDiv, 200, function () {
        // Perintah lain yang ingin dijalankan setelah animasi selesai
        adviceDiv.innerHTML = marked.parse(adviceText);
        toggleButton(calButton);
      });
    }, 1500);
  }
  
  function toggleButton(button) {
    if (button.disabled == false) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }
  
  function calculateBMI() {
    // disabled the button when calculateBMI is called
    calButton = document.getElementById("calButton");
    toggleButton(calButton);
    document.getElementById("result").innerHTML = "";
    document.getElementById("advice").innerHTML = "";
  
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Konversi tinggi ke meter
  
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
      document.getElementById("result").innerHTML =
        "Masukkan berat dan tinggi yang valid.";
      toggleButton(calButton);
      return;
    }
  
    const bmi = weight / (height * height);
  
    let result =
      "BMI Anda adalah " + `<strong>${bmi.toFixed(2)}</strong>` + ".\n";
    let classification = "";
  
    if (bmi < 16) {
      classification = "Severe Thinness";
    } else if (bmi >= 16 && bmi < 17) {
      classification = "Moderate Thinness";
    } else if (bmi >= 17 && bmi < 18.5) {
      classification = "Mild Thinness";
    } else if (bmi >= 18.5 && bmi < 25) {
      classification = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      classification = "Overweight";
    } else if (bmi >= 30 && bmi < 35) {
      classification = "Obese Class I";
    } else if (bmi >= 35 && bmi < 40) {
      classification = "Obese Class II";
    } else {
      classification = "Obese Class III";
    }
  
    result += " Klasifikasi: " + `<strong>${classification}</strong>`;
    resultDiv = document.getElementById("result");
    resultText = result + "<br>";
  
    animateTextToDiv(resultText, resultDiv, 100, function () {
      // Mendapatkan advice setelah memunculkan bmi
      getAdvices(bmi, classification);
    });
  }
  
  // Toggle class active
  const navbarNav = document.querySelector(".navbar-nav");
  
  // Hamburger menu di click
  document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
  };
  
  // Click diluar sidebar untuk menghilangkan menu
  const hamburger = document.querySelector("#hamburger-menu");
  
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
  
  // Click # to id dengan smooth
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // Fungsi untuk mengubah tampilan navbar saat discroll
  window.onscroll = function () {
    var navbar = document.querySelector(".navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.style.transform = "translateY(-100%)"; // Menghilangkan navbar
      navbar.style.backgroundColor = "#333"; // Ubah latar belakang
    } else {
      navbar.style.transform = "translateY(0)"; // Menampilkan kembali navbar
      navbar.style.backgroundColor = "transparent"; // Kembalikan latar belakang transparan
    }
  };
  

  function calculateCalories() {
    const weight = document.getElementById('calorie-weight').value;
    const height = document.getElementById('calorie-height').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const activityLevel = document.getElementById('activity-level').value;
  
    if (!weight || !height || !age) {
      document.getElementById('calorie-result').innerHTML = 'Lengkapi semua input untuk menghitung kalori harian Anda.';
      return;
    }
  
    let bmr;
    if (gender === 'male') {
      bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
      bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
  
    let calorieNeeds;
    switch (activityLevel) {
      case 'sedentary':
        calorieNeeds = bmr * 1.2;
        break;
      case 'light':
        calorieNeeds = bmr * 1.375;
        break;
      case 'moderate':
        calorieNeeds = bmr * 1.55;
        break;
      case 'active':
        calorieNeeds = bmr * 1.725;
        break;
      case 'very-active':
        calorieNeeds = bmr * 1.9;
        break;
    }
  
    document.getElementById('calorie-result').innerHTML = `Kebutuhan kalori harian Anda adalah sekitar ${Math.round(calorieNeeds)} kalori.`;
  }
  
  // // Fungsi untuk mengosongkan input berat
  // function clearWeight() {
  //   document.getElementById("weight").value = "";
  // }
  
  // // Fungsi untuk mengosongkan input tinggi
  // function clearHeight() {
  //   document.getElementById("height").value = "";
  // }
  