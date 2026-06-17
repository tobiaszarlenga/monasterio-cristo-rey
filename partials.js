/* =========================================================
   Monasterio Cristo Rey — Header y Footer compartidos
   Fuente única para todas las páginas. Inyecta en #hdr y #ftr,
   y resalta automáticamente la página actual.
   ========================================================= */
(function () {
  "use strict";

  var HEADER =
  '<header class="site-header" id="siteHeader">' +
    '<nav class="navbar" aria-label="Navegación principal">' +
      '<a class="brand" href="index.html" aria-label="Monasterio Cristo Rey — Inicio">' +
        '<img src="assets/app-icon-192.png" alt="" class="brand-logo">' +
        '<span class="brand-text">Monasterio<span>Cristo Rey</span></span>' +
      '</a>' +
      '<button class="nav-toggle" id="navToggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="navWrap"><span></span><span></span><span></span></button>' +
      '<div class="nav-wrap" id="navWrap">' +
        '<ul class="nav-menu" id="navMenu">' +
          '<li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>' +

          '<li class="nav-item has-dropdown"><a class="nav-link dropdown-toggle" href="#" aria-haspopup="true" aria-expanded="false">El Monasterio <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></a>' +
            '<ul class="dropdown">' +
              '<li><a href="historia.html">Historia</a></li>' +
              '<li><a href="como-es-nuestra-casa.html">¿Cómo es nuestra casa?</a></li>' +
              '<li><a href="como-llegar.html">¿Cómo se llega?</a></li>' +
              '<li><a href="galeria.html">Galería del monasterio</a></li>' +
              '<li><a href="libro-padre-jose.html">Libro del Padre José</a></li>' +
            '</ul></li>' +

          '<li class="nav-item has-dropdown"><a class="nav-link dropdown-toggle" href="#" aria-haspopup="true" aria-expanded="false">Los Monjes Benedictinos <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></a>' +
            '<ul class="dropdown">' +
              '<li><a href="quienes-somos.html">¿Quiénes somos?</a></li>' +
              '<li><a href="de-donde-venimos.html">¿De dónde venimos?</a></li>' +
              '<li><a href="fundamentos.html">Fundamentos de la vida benedictina</a></li>' +
              '<li><a href="jornada.html">La jornada en el monasterio</a></li>' +
              '<li><a href="san-benito.html">San Benito</a></li>' +
            '</ul></li>' +

          '<li class="nav-item has-dropdown"><a class="nav-link dropdown-toggle" href="#" aria-haspopup="true" aria-expanded="false">Espiritualidad Benedictina <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></a>' +
            '<ul class="dropdown">' +
              '<li><a href="oficio-divino.html">Oficio Divino</a></li>' +
              '<li><a href="lectio-divina.html">Lectio Divina</a></li>' +
              '<li><a href="medalla-san-benito.html">Medalla de San Benito</a></li>' +
              '<li><a href="reflexiones.html">Reflexiones y pensamientos monásticos</a></li>' +
            '</ul></li>' +

          '<li class="nav-item has-dropdown"><a class="nav-link dropdown-toggle" href="#" aria-haspopup="true" aria-expanded="false">Hospitalidad <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></a>' +
            '<ul class="dropdown">' +
              '<li><a href="turistas.html">Visitas/Turistas</a></li>' +
              '<li><a href="peregrinos.html">Peregrinos</a></li>' +
              '<li><a href="hospederia.html">Hospedería</a></li>' +
              '<li><a href="catequesis.html">Catequesis</a></li>' +
              '<li><a href="oblatos.html">Oblatos Seculares</a></li>' +
              '<li><a href="cinerario.html">Cinerario</a></li>' +
            '</ul></li>' +

          '<li class="nav-item has-dropdown"><a class="nav-link dropdown-toggle" href="#" aria-haspopup="true" aria-expanded="false">Productos y Servicios <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></a>' +
            '<ul class="dropdown">' +
              '<li><a href="rincon.html">Rincón del monasterio</a></li>' +
              '<li><a href="fabrica-dulces.html">Fábrica de Dulces</a></li>' +
            '</ul></li>' +

          '<li class="nav-item has-dropdown"><a class="nav-link dropdown-toggle" href="#" aria-haspopup="true" aria-expanded="false">Recursos <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></a>' +
            '<ul class="dropdown">' +
              '<li><a href="#">Enlaces a otros sitios de interés</a></li>' +
              '<li><a href="#">Libros/Textos</a></li>' +
            '</ul></li>' +
        '</ul>' +
        '<div class="nav-actions">' +
          '<a class="nav-phone" href="tel:+543814925000"><i class="fa-solid fa-phone" aria-hidden="true"></i> 0381 492-5000</a>' +
          '<a class="btn btn--gold btn--sm" href="hospederia.html">Hospedería</a>' +
        '</div>' +
      '</div>' +
    '</nav>' +
  '</header>';

  var FOOTER =
  '<footer class="site-footer">' +
    '<div class="footer-inner container">' +
      '<div class="footer-col footer-brand"><img src="assets/app-143-logo.png" alt="Monasterio Cristo Rey"></div>' +
      '<div class="footer-col">' +
        '<h3 class="footer-title">Medios de contacto</h3>' +
        '<ul class="footer-list">' +
          '<li><i class="fa-solid fa-phone" aria-hidden="true"></i> <a href="tel:+543814925000">0381 492-5000</a></li>' +
          '<li><i class="fa-solid fa-envelope" aria-hidden="true"></i> <a href="mailto:monasterioelsiambon@gmail.com">monasterioelsiambon@gmail.com</a></li>' +
          '<li><i class="fa-solid fa-envelope" aria-hidden="true"></i> <a href="mailto:hospederiacristorey@gmail.com">hospederiacristorey@gmail.com</a></li>' +
          '<li><a class="facebook-link" href="https://www.facebook.com/monasterio.cristorey.7/?locale=es_LA" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i> <span>Monasterio Cristo Rey</span></a></li>' +
        '</ul>' +
      '</div>' +
      '<div class="footer-col">' +
        '<h3 class="footer-title">Dirección</h3>' +
        '<p class="footer-address"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Ruta Provincial 341 - Km 27 4105<br>El Siambón, Tucumán</p>' +
        '<iframe class="footer-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8434443461474!2d-65.444407!3d-26.717447999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94226b64730dbcc1%3A0x89f9a00fcdda3e8c!2sMonasterio%20Cristo%20Rey!5e0!3m2!1ses-419!2sar!4v1733336533741!5m2!1ses-419!2sar" width="100%" height="180" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa del Monasterio Cristo Rey"></iframe>' +
      '</div>' +
    '</div>' +
    '<div class="footer-bottom container">' +
      '<span>© Monasterio Cristo Rey — El Siambón, Tucumán</span>' +
      '<span class="footer-release">Release 1.0</span>' +
    '</div>' +
  '</footer>' +
  '<a href="#top" class="to-top" id="toTop" aria-label="Volver arriba"><i class="fa-solid fa-chevron-up" aria-hidden="true"></i></a>';

  function inject(id, html, where) {
    var mount = document.getElementById(id);
    if (mount) { mount.outerHTML = html; return; }
    // respaldo: si no hay punto de montaje, insertar al inicio/fin del body
    document.body.insertAdjacentHTML(where, html);
  }

  inject("hdr", HEADER, "afterbegin");
  inject("ftr", FOOTER, "beforeend");

  // Resaltar la página actual
  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (here === "") here = "index.html";
  document.querySelectorAll(".nav-menu a").forEach(function (a) {
    var href = (a.getAttribute("href") || "").toLowerCase();
    if (!href || href === "#") return;
    if (href === here) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
      var item = a.closest(".nav-item");
      if (item) { var top = item.querySelector(":scope > .nav-link"); if (top) top.classList.add("active"); }
    }
  });
})();
