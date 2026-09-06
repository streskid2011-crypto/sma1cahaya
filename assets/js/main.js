/* =========================================================
   SMA NEGERI 1 CAHAYA BANGSA — main.js
   Tahap 1: navigasi mobile & transisi menuju footer.
   Tahap 2 (mendatang): interaktivitas tambahan.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  // ---- Navbar: tandai tautan aktif berdasarkan halaman ----
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // ---- Navbar: toggle menu pada tampilan mobile ----
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Transisi standar: footer memudar masuk saat discroll ----
  var footer = document.querySelector('.site-footer');
  if (footer) {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            footer.classList.add('is-visible');
            observer.unobserve(footer);
          }
        });
      }, { threshold: 0.15 });
      observer.observe(footer);
    } else {
      footer.classList.add('is-visible');
    }
  }
});
