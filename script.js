// =================== GLOBAL ===================
AOS.init();
window.addEventListener("load", function () {
  const popup = document.getElementById("fellowshipPopup");
  const closeBtn = document.getElementById("closePopup");

  // Show popup after 2 seconds
  setTimeout(() => {
    popup.style.display = "block";
    popup.style.animation = "fadeInUp 0.6s ease";
  }, 2000);

  // Close manually
  closeBtn.addEventListener("click", () => {
    popup.style.animation = "fadeOutDown 0.4s ease";
    setTimeout(() => popup.remove(), 400);
  });

  // Auto close after 10 seconds
  setTimeout(() => {
    popup.style.animation = "fadeOutDown 0.4s ease";
    setTimeout(() => popup.remove(), 400);
  }, 12000);
});



// =================== HOME PAGE ===================
if (document.body.classList.contains("home-page")) {
  function animateCounter(id, target, suffix = "") {
    const el = document.getElementById(id);
    if (!el) return;
    let count = 0;
    const step = target / 100;
    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      el.textContent = Math.floor(count) + suffix;
    }, 20);
  }

  animateCounter("students", 1200, "+");
  animateCounter("placements", 95, "%");
  animateCounter("courses", 50, "+");
}

// =================== LOGIN / SIGNUP ===================
function showSignup() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const formTitle = document.getElementById("formTitle");
  if (loginForm && signupForm && formTitle) {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    formTitle.innerText = "Signup";
  }
}

function showLogin() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const formTitle = document.getElementById("formTitle");
  if (loginForm && signupForm && formTitle) {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    formTitle.innerText = "Login";
  }
}

// =================== COURSES PAGE ===================
if (document.body.classList.contains("courses-page")) {
  const courses = [
    { title: "HTML & CSS Mastery", category: "development", img: "", desc: "Learn the building blocks of web development.", rating: 4.8, price: "₹999" },
    { title: "JavaScript Essentials", category: "development", img: "", desc: "Master interactivity and dynamic web features.", rating: 5.0, price: "₹1299" },
    { title: "Python for Beginners", category: "data", img: "", desc: "Start your coding journey with Python basics.", rating: 4.7, price: "₹1499" },
    { title: "React JS Development", category: "development", img: "", desc: "Build powerful single-page apps with React.", rating: 4.9, price: "₹1999" },
    { title: "UI/UX Design", category: "design", img: "", desc: "Craft engaging, user-friendly digital experiences.", rating: 4.8, price: "₹1799" },
    { title: "Data Science with Python", category: "data", img: "", desc: "Analyze, visualize, and predict with data.", rating: 5.0, price: "₹2499" },
    { title: "Bootstrap 5 Advanced", category: "development", img: "", desc: "Build responsive layouts with ease.", rating: 4.7, price: "₹999" },
    { title: "Graphic Design Fundamentals", category: "design", img: "", desc: "Unleash creativity using Photoshop & Illustrator.", rating: 4.8, price: "₹1899" },
  ];

  const container = document.getElementById("courseContainer");
  const pagination = document.getElementById("pagination");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const itemsPerPage = 6;
  let currentPage = 1;

  function renderCourses(filterText = "", filterCat = "all") {
    if (!container) return;

    const filtered = courses.filter(c =>
      (filterCat === "all" || c.category === filterCat) &&
      c.title.toLowerCase().includes(filterText.toLowerCase())
    );

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    container.innerHTML = "";
    paginated.forEach(c => {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="col-md-4" data-aos="zoom-in">
          <div class="course-card">
            <img src="${c.img}" alt="${c.title}">
            <div class="course-body">
              <div>
                <h3 class="course-title">${c.title}</h3>
                <p class="course-info">${c.desc}</p>
                <div class="rating mb-2">★★★★★ <span class="text-muted">(${c.rating})</span></div>
                <p class="price mb-3">${c.price}</p>
              </div>
              <a href="#" class="btn-custom"><i class="bi bi-mortarboard-fill"></i> Enroll Now</a>
            </div>
          </div>
        </div>`
      );
    });

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    if (!pagination) return;

    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      pagination.insertAdjacentHTML(
        "beforeend",
        `<li class="page-item ${i === currentPage ? "active" : ""}">
          <a class="page-link" href="#">${i}</a>
        </li>`
      );
    }

    pagination.querySelectorAll(".page-link").forEach((link, index) => {
      link.addEventListener("click", e => {
        e.preventDefault();
        currentPage = index + 1;
        renderCourses(searchInput?.value || "", categoryFilter?.value || "all");
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", e => {
      currentPage = 1;
      renderCourses(e.target.value, categoryFilter?.value || "all");
    });
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", e => {
      currentPage = 1;
      renderCourses(searchInput?.value || "", e.target.value);
    });
  }

  renderCourses();
}

// =================== BLOG PAGE ===================
if (document.body.classList.contains("blog-page")) {
  const blogs = [
    { title: "The Future of Web Development", img: "", desc: "Upcoming trends shaping the world of web development.", category: "Web Dev" },
    { title: "Mastering HTML5 and CSS3", img: "", desc: "The essential guide to modern web design.", category: "Frontend" },
    { title: "Getting Started with JavaScript", img: "", desc: "Understand the core of interactive web pages.", category: "JavaScript" },
    { title: "Why Learn React in 2025?", img: "", desc: "Why React remains the top front-end choice.", category: "React" },
    { title: "UI/UX Design Principles", img: "", desc: "Design intuitive, user-friendly interfaces.", category: "Design" },
    { title: "Python for Data Science", img: "", desc: "How Python powers analytics & AI.", category: "Data" },
    { title: "Building Your Portfolio", img: "", desc: "Showcase your skills effectively.", category: "Career" },
    { title: "Web Security Basics", img: "", desc: "Keep your sites safe with best practices.", category: "Security" },
  ];

  const blogContainer = document.getElementById("blogContainer");
  const pageNum = document.getElementById("pageNum");
  const perPage = 6;
  let currentBlogPage = 1;

  function renderBlogs() {
    if (!blogContainer) return;

    const start = (currentBlogPage - 1) * perPage;
    const visible = blogs.slice(start, start + perPage);

    blogContainer.innerHTML = visible
      .map(
        (b, i) => `
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="${i * 100}">
          <div class="blog-card">
            <img src="${b.img}" alt="${b.title}">
            <div class="blog-body">
              <span class="blog-category">${b.category}</span>
              <h5 class="blog-title">${b.title}</h5>
              <p class="blog-desc">${b.desc}</p>
              <a href="#" class="read-more">Read More <i class="bi bi-arrow-right-circle"></i></a>
            </div>
          </div>
        </div>`
      )
      .join("");

    if (pageNum) pageNum.textContent = currentBlogPage;
  }

  window.nextPage = function () {
    if (currentBlogPage * perPage < blogs.length) {
      currentBlogPage++;
      renderBlogs();
    }
  };

  window.prevPage = function () {
    if (currentBlogPage > 1) {
      currentBlogPage--;
      renderBlogs();
    }
  };

  renderBlogs();
}

if (document.body.classList.contains("event-page")) {

  const EVENTS = [
    { title: "Full-Stack Bootcamp", date: "2025-11-08", image: "https://source.unsplash.com/900x600/?coding,web", desc: "6-week intensive program for modern web development.", location: "Kozhikode" },
    { title: "AI & ML Workshop", date: "2025-11-20", image: "https://source.unsplash.com/900x600/?ai,ml", desc: "Hands-on training on AI, data & automation.", location: "Bengaluru" },
    { title: "UI/UX Design Sprint", date: "2025-12-03", image: "https://source.unsplash.com/900x600/?design,ux", desc: "Two-day design thinking and prototyping challenge.", location: "Kochi" },
    { title: "Career Readiness Session", date: "2025-11-15", image: "https://source.unsplash.com/900x600/?career,interview", desc: "Soft skills, interviews, and resume polishing.", location: "Online" },
    { title: "Digital Marketing Intensive", date: "2025-12-10", image: "https://source.unsplash.com/900x600/?marketing,ads", desc: "SEO, analytics, and paid ad strategy.", location: "Kozhikode" },
  ];

  const PAST = [
    { title: "AI Hackathon 2024", date: "2024-07-15", image: "https://source.unsplash.com/900x600/?hackathon,ai", desc: "Brilliant minds built real-world AI models.", location: "Chennai" },
    { title: "Web Dev Meetup 2024", date: "2024-06-20", image: "https://source.unsplash.com/900x600/?developers,conference", desc: "Community networking and open-source sharing.", location: "Kozhikode" },
    { title: "Design Week 2024", date: "2024-04-12", image: "https://source.unsplash.com/900x600/?design,workshop", desc: "A week of creativity and UX exploration.", location: "Kochi" },
    { title: "Tech Summit 2024", date: "2024-03-25", image: "https://source.unsplash.com/900x600/?seminar,tech", desc: "Innovators and leaders discussing future tech.", location: "Bengaluru" },
  ];

  const modal = new bootstrap.Modal(document.getElementById('eventModal'));
  const lightboxModal = new bootstrap.Modal(document.getElementById('lightboxModal'));
  const lightboxImg = document.getElementById('lightboxImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalDesc = document.getElementById('modalDesc');
  const modalRegister = document.getElementById('modalRegister');

  function createCard(event, index, isPast = false) {
    const col = document.createElement('div');
    col.className = 'col-12';
    col.innerHTML = `
    <div class="mt-5 card border-0 shadow-sm event-card animate__animated animate__fadeInUp" data-aos="fade-up">
      <div class="row g-0 align-items-center">
        <div class="col-md-5">
          <img src="${event.image}" class="img-fluid rounded-start" alt="${event.title}">
        </div>
        <div class="col-md-7">
          <div class="card-body d-flex flex-column justify-content-between h-100">
            <div>
              <h5 class="card-title text-gradient fw-bold">${event.title}</h5>
              <p class="card-text text-muted mb-2"><i class="bi bi-calendar-event me-2"></i>${new Date(event.date).toDateString()} • ${event.location}</p>
              <p class="card-text">${event.desc}</p>
            </div>
            <div class="mt-3 d-flex justify-content-end gap-2 flex-wrap">
              <a href="#" class="btn btn-sm btn-md btn-view"><i class="bi bi-info-circle"></i> ${isPast ? "View Photos" : "View Details"}</a>
              ${!isPast ? `<a href="#" class="btn btn-sm btn-md btn-custom"><i class="bi bi-pencil-square"></i> Register</a>` : ""}
            </div>
          </div>
        </div>
      </div>
    </div>`;

    const viewBtn = col.querySelector('.btn-view');
    if (isPast) {
      viewBtn.addEventListener('click', e => {
        e.preventDefault();
        lightboxImg.src = event.image;
        lightboxModal.show();
      });
    } else {
      const regBtn = col.querySelector('.btn-custom');
      [viewBtn, regBtn].forEach(btn => {
        if (btn) btn.addEventListener('click', e => {
          e.preventDefault();
          modalTitle.textContent = event.title;
          modalImage.src = event.image;
          modalDesc.textContent = event.desc + " | Location: " + event.location;
          modal.show();
        });
      });
    }
    return col;
  }

  function renderEvents(containerId, data, isPast = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    data.forEach((e, i) => container.appendChild(createCard(e, i, isPast)));
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderEvents('upcomingEvents', EVENTS);
    renderEvents('pastEvents', PAST, true);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const breadcrumbList = document.getElementById("breadcrumb-list");
  if (!breadcrumbList) return;

  const path = window.location.pathname.split("/").pop().toLowerCase() || "index.html";

  const pageNames = {
    "index.html": "Home",
    "about.html": "About Us",
    "courses.html": "Courses",
    "event.html": "Events",
    "fellowship.html": "Axionora Fellowship",
    "contact.html": "Contact",
    "blog.html": "Blog"
  };

  const pageTitle =
    pageNames[path] ||
    path.replace(".html", "").replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  // ✅ use sessionStorage so it resets when browser is refreshed
  let trail = JSON.parse(sessionStorage.getItem("breadcrumbTrail")) || ["Home"];

  // ✅ avoid duplicates
  if (!trail.includes(pageTitle)) {
    trail.push(pageTitle);
  }

  // ✅ always ensure Home is first
  if (trail[0] !== "Home") trail.unshift("Home");

  // ✅ save breadcrumb trail only for this session
  sessionStorage.setItem("breadcrumbTrail", JSON.stringify(trail));

  // ✅ render breadcrumb
  breadcrumbList.innerHTML = trail
    .map((item, index) => {
      const fileName = Object.keys(pageNames).find(key => pageNames[key] === item);
      const isLast = index === trail.length - 1;
      if (isLast) {
        return `<li class="breadcrumb-item active fw-bold text-light" aria-current="page">${item}</li>`;
      }
      return `<li class="breadcrumb-item">
        <a href="${fileName || '#'}" class="text-decoration-none text-light">${item}</a>
      </li>`;
    })
    .join("");
});
