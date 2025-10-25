// --- INISIALISASI ---
// Cek jika feather ada sebelum memanggil replace()
if (typeof feather !== "undefined") {
  feather.replace();
}

// Set tahun di footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// --- PARTICLE BACKGROUND ---
// Cek jika tsParticles ada sebelum memanggil load()
if (typeof tsParticles !== "undefined") {
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: { color: { value: "#0a0a1a" } },
    particles: {
      number: { value: 50 },
      color: { value: "#06b6d4" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 2, random: true },
      links: {
        color: "#0891b2",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
  });
}

// --- MENU MOBILE ---
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll("#mobile-menu a, header nav a");

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("hidden")
  );
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Hanya tutup menu jika ini adalah link anchor di halaman yang sama
    if (link.hash && document.querySelector(link.hash)) {
      if (window.innerWidth < 768 && mobileMenu) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});

// --- ANIMASI SCROLL ---
// Pastikan IntersectionObserver didukung
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
} else {
  // Fallback untuk browser lama: langsung tampilkan semua
  document
    .querySelectorAll(".reveal")
    .forEach((el) => el.classList.add("visible"));
}

// --- TRANSLATION SCRIPT ---
const translations = {
  header_title: { id: "Portofolio", en: "Portfolio" },
  nav_about: { id: "tentang", en: "about" },
  nav_experience: { id: "pengalaman", en: "experience" },
  nav_skills: { id: "keahlian", en: "skills" },
  nav_projects: { id: "projek", en: "projects" },
  nav_contact: { id: "kontak", en: "contact" },
  nav_about_mobile: { id: "tentang", en: "about" },
  nav_experience_mobile: { id: "pengalaman", en: "experience" },
  nav_skills_mobile: { id: "keahlian", en: "skills" },
  nav_projects_mobile: { id: "projek", en: "projects" },
  nav_contact_mobile: { id: "kontak", en: "contact" },
  lang_id: { id: "Indonesia", en: "Indonesian" },
  lang_en: { id: "Inggris", en: "English" },
  hero_greeting: { id: "Hello, It's Me", en: "Hello, It's Me" },
  hero_name: { id: "Ryan Septian Gandi", en: "Ryan Septian Gandi" },
  hero_intro: { id: "And I'm a", en: "And I'm a" },
  hero_description: {
    id: "Fresh Graduate Teknik Informatika dengan fokus pada Web Development. Berpengalaman membangun aplikasi dari perancangan hingga deployment.",
    en: "A Fresh Graduate of Informatics Engineering with a focus on Web Development. Experienced in building applications from design to deployment.",
  },
  hero_button: { id: "Tentang Saya", en: "More About Me" },
  about_title: { id: "Tentang Saya", en: "About Me" },
  about_whoami: { id: "Siapa saya?", en: "Who am I?" },
  about_description: {
    id: "Fresh Graduate Teknik Informatika dengan fokus pada Web Development (Laravel, PHP, JavaScript, MySQL) serta pengalaman dalam proyek nyata. Terbiasa bekerja dengan tim menggunakan metode Agile, serta memiliki semangat tinggi untuk terus belajar teknologi baru.",
    en: "A Fresh Graduate of Informatics Engineering with a focus on Web Development (Laravel, PHP, JavaScript, MySQL) and experience in real projects. Accustomed to working in a team using the Agile method, and has a high enthusiasm to continue learning new technologies.",
  },
  about_name_label: { id: "Nama:", en: "Name:" },
  about_age_label: { id: "Umur:", en: "Age:" },
  about_experience_label: { id: "Status:", en: "Status:" },
  about_phone_label: { id: "Telepon:", en: "Phone:" },
  about_location_label: { id: "Lokasi:", en: "Location:" },
  about_cv_button: { id: "Download CV", en: "Download CV" },
  about_contact_button: { id: "Hubungi Saya", en: "Contact Me" },
  experience_title: { id: "Pengalaman", en: "Experience" },
  exp1_title: {
    id: "Web Developer Freelance",
    en: "Freelance Web Developer",
  },
  exp1_company: {
    id: "BKAD Tangerang Selatan // Nov 2024 - Jan 2025",
    en: "BKAD South Tangerang // Nov 2024 - Jan 2025",
  },
  exp1_desc: {
    id: "Merancang & mengembangkan sistem informasi keuangan dan aset daerah berbasis Laravel 11 & MySQL, termasuk fitur GIS dengan Leaflet JS.",
    en: "Designed & developed a regional financial and asset information system based on Laravel 11 & MySQL, including a GIS feature with Leaflet JS.",
  },
  exp2_title: { id: "Web Developer Intern", en: "Web Developer Intern" },
  exp2_company: {
    id: "SMK Itikurih Ciparay // Jun 2024 - Sep 2024",
    en: "SMK Itikurih Ciparay // Jun 2024 - Sep 2024",
  },
  exp2_desc: {
    id: "Membangun sistem inventaris sekolah menggunakan Laravel 10 untuk menggantikan pencatatan manual, termasuk dokumentasi teknis dan pengujian.",
    en: "Built a school inventory system using Laravel 10 to replace manual recording, including technical documentation and testing.",
  },
  exp3_title: {
    id: "Software Engineer (Studi Independen)",
    en: "Software Engineer (Independent Study)",
  },
  exp3_company: {
    id: "Indobot Academy // Feb 2024 - Jun 2024",
    en: "Indobot Academy // Feb 2024 - Jun 2024",
  },
  exp3_desc: {
    id: "Pelatihan intensif 6 bulan di bidang IoT, mencakup arsitektur, hardware, pemrograman (C, Arduino), platform (Blynk, Thingsboard), dan manajemen proyek.",
    en: "6-month intensive training in IoT, covering architecture, hardware, programming (C, Arduino), platforms (Blynk, Thingsboard), and project management.",
  },
  skills_title: { id: "Keahlian Saya", en: "My Skills" },
  skills_tech_title: { id: "Keahlian Teknis", en: "Technical Skills" },
  skills_prof_title: {
    id: "Keahlian Interpersonal",
    en: "Interpersonal Skills",
  },
  skill_comm: { id: "Manajemen Waktu", en: "Time Management" },
  skill_team: { id: "Kerja Sama Tim", en: "Teamwork" },
  skill_problem: { id: "Problem Solving", en: "Problem Solving" },
  skill_adapt: { id: "Adaptabilitas", en: "Adaptability" },
  skills_tool_title: {
    id: "Tools & Teknologi",
    en: "Tools & Technologies",
  },
  projects_title: { id: "Projek", en: "Projects" },
  proj1_title: {
    id: "SITEPAD - Sistem Pendataan Aset Daerah",
    en: "SITEPAD - Regional Asset Data Collection System",
  },
  proj1_desc: {
    id: "Aplikasi web untuk pengelolaan keuangan & aset pemerintah daerah dengan dashboard interaktif, CRUD, dan manajemen user.",
    en: "Web application for regional government financial & asset management with an interactive dashboard, CRUD, and user management.",
  },
  proj_detail_link: { id: "Lihat Detail &rarr;", en: "View Details &rarr;" },
  proj2_title: {
    id: "MASET-APP - Rekomendasi Makanan Sehat",
    en: "MASET-APP - Healthy Food Recommendation",
  },
  proj2_desc: {
    id: "Aplikasi rekomendasi makanan sehat berbasis Laravel & MySQL, dengan integrasi API machine learning (KMeans).",
    en: "Healthy food recommendation application based on Laravel & MySQL, with machine learning API integration (KMeans).",
  },
  proj3_title: {
    id: "SABER IOT - Sistem Awas Banjir",
    en: "SABER IOT - Flood Awareness System",
  },
  proj3_desc: {
    id: "Perangkat lunak IoT untuk monitoring banjir secara real-time menggunakan Arduino dan Thingsboard untuk peringatan dini.",
    en: "IoT software for real-time flood monitoring using Arduino and Thingsboard for early warnings.",
  },
  proj4_title: {
    id: "siapApp - Laravel Boilerplate",
    en: "siapApp - Laravel Boilerplate",
  },
  proj4_desc: {
    id: "Aplikasi dasar Laravel untuk fondasi sistem informasi dengan User Management, autentikasi, dan CRUD generik.",
    en: "A base Laravel application for information systems foundation with User Management, authentication, and generic CRUD.",
  },
  contact_title: { id: "Hubungi Saya", en: "Contact Me" },
  contact_subtitle: { id: "Get in Touch", en: "Get in Touch" },
  contact_info_title: {
    id: "Informasi Kontak",
    en: "Contact Information",
  },
  contact_info_desc: {
    id: "Jangan ragu untuk menghubungi. Saya selalu terbuka untuk membahas proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda.",
    en: "Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  },
  contact_location: { id: "Lokasi", en: "Location" },
  contact_email: { id: "Email", en: "Email" },
  contact_phone: { id: "Telepon", en: "Phone" },
  contact_follow: { id: "Ikuti Saya", en: "Follow Me" },
  contact_form_title: { id: "Kirim Saya Pesan", en: "Send Me a Message" },
  contact_form_name: { id: "Nama Anda", en: "Your Name" },
  contact_form_email: { id: "Email Anda", en: "Your Email" },
  contact_form_subject: { id: "Subjek", en: "Subject" },
  contact_form_message: { id: "Pesan Anda", en: "Your Message" },
  contact_form_button: { id: "Kirim Pesan", en: "Send Message" },
  footer_text: {
    id: "Dirancang & Dibangun oleh Ryan Septian Gandi",
    en: "Designed & Built by Ryan Septian Gandi",
  },
};

const jobTitlesTranslations = {
  id: ["Fullstack Developer", "Web Developer", "Backend Engineer"],
  en: ["Fullstack Developer", "Web Developer", "Backend Engineer"],
};

let jobTitles = jobTitlesTranslations.id;

const langButtons = document.querySelectorAll(".lang-switch");

const switchLanguage = (lang) => {
  if (!translations || !langButtons) return;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[key] && translations[key][lang]) {
      el.innerText = translations[key][lang];
    }
  });

  document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-translate-placeholder");
    if (translations[key] && translations[key][lang]) {
      el.placeholder = translations[key][lang];
    }
  });

  langButtons.forEach((button) => {
    if (button.getAttribute("data-lang") === lang) {
      button.classList.add("text-cyan-400");
      button.classList.remove("text-gray-500", "hover:text-white");
    } else {
      button.classList.remove("text-cyan-400");
      button.classList.add("text-gray-500", "hover:text-white");
    }
  });
  jobTitles = jobTitlesTranslations[lang] || jobTitlesTranslations.id;
  resetTypingAnimation();
};

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang");
    switchLanguage(lang);
  });
});

// --- EFEK MENGETIK ---
const typingTextElement = document.getElementById("typing-text");
let titleIndex = 0;
let charIndex = 0;
let typeTimeout, eraseTimeout;

function type() {
  if (!typingTextElement || !jobTitles || jobTitles.length === 0) return;
  clearTimeout(typeTimeout);
  if (charIndex < jobTitles[titleIndex].length) {
    typingTextElement.textContent += jobTitles[titleIndex].charAt(charIndex);
    charIndex++;
    typeTimeout = setTimeout(type, 100);
  } else {
    eraseTimeout = setTimeout(erase, 2000);
  }
}

function erase() {
  if (!typingTextElement) return;
  clearTimeout(eraseTimeout);
  if (charIndex > 0) {
    typingTextElement.textContent = jobTitles[titleIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    eraseTimeout = setTimeout(erase, 50);
  } else {
    titleIndex = (titleIndex + 1) % jobTitles.length;
    typeTimeout = setTimeout(type, 500);
  }
}

function resetTypingAnimation() {
  if (!typingTextElement) return;
  clearTimeout(typeTimeout);
  clearTimeout(eraseTimeout);
  typingTextElement.textContent = "";
  titleIndex = 0;
  charIndex = 0;
  // Hanya mulai mengetik jika elemennya ada
  if (document.body.contains(typingTextElement)) {
    type();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  switchLanguage("id");
});

// Hapus inisialisasi VanillaTilt dari sini
// VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
//   max: 15,
//   speed: 400,
//   glare: true,
//   "max-glare": 0.2,
// });

const photoLanyard = document.getElementById("photo-lanyard-container");
if (photoLanyard) {
  let isPhotoDragging = false;
  let photoOffsetX, photoOffsetY;

  const startPhotoDrag = (e) => {
    isPhotoDragging = true;
    photoLanyard.classList.add("dragging");
    if (getComputedStyle(photoLanyard).position !== "absolute") {
      const rect = photoLanyard.getBoundingClientRect();
      const parentRect = photoLanyard.parentElement.getBoundingClientRect();
      photoLanyard.style.position = "absolute";
      photoLanyard.style.left = `${rect.left - parentRect.left}px`;
      photoLanyard.style.top = `${rect.top - parentRect.top}px`;
    }
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    photoOffsetX = clientX - photoLanyard.offsetLeft;
    photoOffsetY = clientY - photoLanyard.offsetTop;
    e.preventDefault();
  };
  const onPhotoDrag = (e) => {
    if (!isPhotoDragging) return;
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    let newX = clientX - photoOffsetX;
    let newY = clientY - photoOffsetY;
    const container = photoLanyard.parentElement;
    const maxX = container.clientWidth - photoLanyard.offsetWidth;
    const maxY = container.clientHeight - photoLanyard.offsetHeight;
    photoLanyard.style.left = `${Math.max(0, Math.min(newX, maxX))}px`;
    photoLanyard.style.top = `${Math.max(0, Math.min(newY, maxY))}px`;
  };
  const stopPhotoDrag = () => {
    isPhotoDragging = false;
    photoLanyard.classList.remove("dragging");
  };
  photoLanyard.addEventListener("mousedown", startPhotoDrag);
  document.addEventListener("mousemove", onPhotoDrag);
  document.addEventListener("mouseup", stopPhotoDrag);
  photoLanyard.addEventListener("touchstart", startPhotoDrag, {
    passive: false,
  });
  document.addEventListener("touchmove", onPhotoDrag, { passive: false });
  document.addEventListener("touchend", stopPhotoDrag);
}

// --- FORMULIR KONTAK ---
var form = document.getElementById("contact-form");
var status = document.getElementById("form-status");

if (form && status) {
  async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          status.innerText = "Terima kasih! Pesan Anda telah terkirim.";
          form.reset();
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              status.innerText = data["errors"]
                .map((error) => error["message"])
                .join(", ");
            } else {
              status.innerText =
                "Oops! Terjadi masalah saat mengirim formulir.";
            }
          });
        }
      })
      .catch((error) => {
        status.innerText = "Oops! Terjadi masalah saat mengirim formulir.";
      });
  }
  form.addEventListener("submit", handleSubmit);

  // --- INISIALISASI SWIPER CAROUSEL ---
  // (Tambahkan di akhir file)
  const swiper = new Swiper(".project-swiper", {
    // Opsi
    loop: true,
    slidesPerView: 1, // 1 slide di mobile
    spaceBetween: 30, // Jarak antar slide

    // Pagination (bullets)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Tombol Navigasi (panah)
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Breakpoints untuk layar lebih besar
    breakpoints: {
      // >= 768px (md)
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // >= 1024px (lg)
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },

    // Inisialisasi ulang Vanilla Tilt SETELAH Swiper dimuat
    on: {
      init: function () {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        });
      },
    },
  });
}
