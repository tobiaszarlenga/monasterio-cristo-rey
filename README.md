# Monasterio Cristo Rey

Sitio web del **Monasterio Cristo Rey** (El Siambón, Tucumán, Argentina) — rediseño moderno del sitio original, manteniendo su estructura y contenido.

Sitio estático (HTML + CSS + JavaScript, sin framework ni paso de build).

## Estructura

```
index.html              Inicio
*.html                  Páginas internas (Historia, Hospedería, San Benito, etc.)
styles.css              Sistema de diseño (tokens, layout, componentes base)
pages.css              Componentes de páginas internas
partials.js            Header y footer compartidos (fuente única) + estado activo del menú
script.js              Slider, menú móvil, galería con lightbox, animaciones
assets/                Imágenes, videos y documentos
```

## Secciones

- **El Monasterio:** Historia · ¿Cómo es nuestra casa? · ¿Cómo se llega? · Galería · Libro del Padre José
- **Los Monjes Benedictinos:** ¿Quiénes somos? · ¿De dónde venimos? · Fundamentos · La jornada · San Benito
- **Espiritualidad Benedictina:** Oficio Divino · Lectio Divina · Medalla de San Benito · Reflexiones
- **Hospitalidad:** Turistas · Peregrinos · Hospedería · Catequesis · Oblatos · Cinerario
- **Productos y Servicios:** Rincón del monasterio · Fábrica de Dulces

## Desarrollo local

Al ser un sitio estático, basta con servir la carpeta con cualquier servidor HTTP. Por ejemplo:

```bash
npx serve .
# o
python -m http.server 4173
```

Luego abrir `http://localhost:4173`.

## Despliegue

Pensado para **Cloudflare Pages** (sin build): directorio de salida = raíz del repositorio.

## Contacto

- Tel: 0381 492-5000
- monasterioelsiambon@gmail.com · hospederiacristorey@gmail.com
- Ruta Provincial 341 - Km 27, El Siambón, Tucumán
