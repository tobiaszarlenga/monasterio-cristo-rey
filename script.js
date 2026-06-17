/* =========================================================
   Monasterio Cristo Rey — interacciones
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Slider del hero (fundido + indicadores) ---------- */
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dotsWrap = document.getElementById("sliderDots");
  let index = 0;
  let timer = null;
  const DELAY = 6000;

  if (slides.length && dotsWrap) {
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", "Imagen " + (i + 1));
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goTo(i, true));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    const show = (n) => {
      slides[index].classList.remove("is-active");
      dots[index].classList.remove("active");
      index = (n + slides.length) % slides.length;
      slides[index].classList.add("is-active");
      dots[index].classList.add("active");
    };
    const next = () => show(index + 1);
    const restart = () => { clearInterval(timer); timer = setInterval(next, DELAY); };
    const goTo = (n, manual) => { show(n); if (manual) restart(); };

    restart();
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.addEventListener("mouseenter", () => clearInterval(timer));
      hero.addEventListener("mouseleave", restart);
    }
  }

  /* ---------- Header: sólido al hacer scroll + botón arriba ---------- */
  const header = document.getElementById("siteHeader");
  const toTop = document.getElementById("toTop");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 40);
    toTop.classList.toggle("show", y > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menú móvil ---------- */
  const navToggle = document.getElementById("navToggle");
  const navWrap = document.getElementById("navWrap");
  const mql = window.matchMedia("(max-width: 1300px)");   // debe coincidir con el breakpoint del cajón en CSS

  const setMenu = (open) => {
    navWrap.classList.toggle("open", open);
    navToggle.classList.toggle("open", open);
    header.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };

  navToggle.addEventListener("click", () => setMenu(!navWrap.classList.contains("open")));

  /* ---------- Dropdowns ---------- */
  document.querySelectorAll(".nav-item.has-dropdown > .dropdown-toggle").forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();                 // evita saltar a "#"
      if (!mql.matches) return;           // escritorio: se abre con hover
      const item = toggle.parentElement;
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".nav-item.has-dropdown.open").forEach((el) => { if (el !== item) el.classList.remove("open"); });
      item.classList.toggle("open", !wasOpen);
      toggle.setAttribute("aria-expanded", String(!wasOpen));
    });
  });

  // Cerrar el menú móvil al elegir un enlace final o un CTA
  document.querySelectorAll(".dropdown a, .nav-item:not(.has-dropdown) .nav-link, .nav-actions a").forEach((link) => {
    link.addEventListener("click", () => { if (mql.matches) setMenu(false); });
  });

  // Al pasar a escritorio, resetear el estado del menú
  mql.addEventListener("change", (e) => { if (!e.matches) setMenu(false); });

  /* ---------- Galería con lightbox ---------- */
  const grid = document.getElementById("galleryGrid");
  const lb = document.getElementById("lightbox");
  if (grid && lb) {
    const imgs = Array.from(grid.querySelectorAll("img"));
    const main = document.getElementById("galleryMain");
    const lbImg = lb.querySelector(".lightbox-img");
    const srcs = imgs.map((i) => i.getAttribute("src"));
    const alts = imgs.map((i) => i.getAttribute("alt") || "");
    let cur = 0;
    const setMain = (i) => { if (main) { main.src = srcs[i]; main.alt = alts[i]; } imgs.forEach((im, k) => im.classList.toggle("active", k === i)); cur = i; };
    const open = (i) => { cur = i; lbImg.src = srcs[i]; lbImg.alt = alts[i]; lb.classList.add("open"); document.body.style.overflow = "hidden"; };
    const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };
    const nav = (d) => { cur = (cur + d + srcs.length) % srcs.length; lbImg.src = srcs[cur]; lbImg.alt = alts[cur]; setMain(cur); };
    imgs.forEach((im, i) => im.addEventListener("click", () => { setMain(i); open(i); }));
    if (main) main.addEventListener("click", () => open(cur));
    lb.querySelector(".lightbox-close").addEventListener("click", close);
    lb.querySelector(".lightbox-prev").addEventListener("click", () => nav(-1));
    lb.querySelector(".lightbox-next").addEventListener("click", () => nav(1));
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") nav(-1);
      else if (e.key === "ArrowRight") nav(1);
    });
    setMain(0);
  }

  /* ---------- Reveal al hacer scroll (a prueba de fallos) ---------- */
  const reveals = Array.from(document.querySelectorAll(".reveal"));
  const reveal = (el) => el.classList.add("visible");
  const revealAll = () => reveals.forEach(reveal);
  const revealInView = () => {
    const h = window.innerHeight || document.documentElement.clientHeight;
    reveals.forEach((el) => {
      if (el.classList.contains("visible")) return;
      if (el.getBoundingClientRect().top < h - 60) reveal(el);
    });
  };

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { reveal(entry.target); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    reveals.forEach((el) => io.observe(el));

    revealInView();
    window.addEventListener("scroll", revealInView, { passive: true });
    window.addEventListener("load", revealInView);
    setTimeout(revealAll, 1600);   // garantía: nada queda oculto
  } else {
    revealAll();
  }
})();
