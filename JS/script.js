document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closeBtn");

  console.log("menu:", menu);
  console.log("sidebar:", sidebar);
  console.log("closeBtn:", closeBtn);

  // Open sidebar
  menu.addEventListener("click", () => {
    console.log("toggle");
    menu.classList.toggle("open");
    sidebar.classList.toggle("open");
  });

  // Close sidebar
  closeBtn.addEventListener("click", () => {
    console.log("close sidebar");
    sidebar.classList.remove("open");
    menu.classList.remove("open");
  });

  // Optional: Close sidebar when clicking outside
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menu.contains(e.target)) {
      sidebar.classList.remove("open");
      menu.classList.remove("open");
    }
  });
});

// Back to Top Button functionality
const backToTopBtn = document.getElementById('backToTop');

// Show button when user scrolls down 300px
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// Scroll to top when button is clicked
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});