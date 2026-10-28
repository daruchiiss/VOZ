// diccionario de datos

var CATEGORIAS = {
  educacion: 'Educación',
  movilidad: 'Movilidad',
  servicios: 'Servicios',
  medioambiente: 'Medioambiente',
  sociedad: 'Sociedad',
  general: 'Transversal'
};

var ETIQUETAS = {
  hecho: 'Hecho comprobado',
  testimonio: 'Testimonio',
  pendiente: 'Pregunta pendiente'
};

var EVIDENCIAS = [
  {
    id: 'ev-constitucion',
    tipo: 'documento',
    tema: 'general',
    titulo: 'Constitución Política de los Estados Unidos Mexicanos',
    entidad: 'Cámara de Diputados',
    estado: 'Documento público',
    ok: true,
    descripcion: 'Texto vigente de la Constitución. De aquí se toman los derechos que enmarcan las investigaciones: educación (art. 3.º), salud, agua, medio ambiente y movilidad (art. 4.º).',
    url: 'https://www.diputados.gob.mx/LeyesBiblio/index.htm'
  },
  {
    id: 'ev-censo',
    tipo: 'estadistica',
    tema: 'educacion',
    titulo: 'Censo de Población y Vivienda 2020 (indicadores educativos)',
    entidad: 'INEGI',
    estado: 'Cifras por extraer',
    ok: false,
    descripcion: 'Fuente oficial por consultar. Aún no se han extraído ni verificado cifras.',
    url: 'https://www.inegi.org.mx/'
  },
  {
    id: 'ev-origen-destino',
    tipo: 'estadistica',
    tema: 'movilidad',
    titulo: 'Encuesta Origen-Destino en Hogares',
    entidad: 'INEGI',
    estado: 'Cifras por extraer',
    ok: false,
    descripcion: 'Encuesta sobre los viajes cotidianos de las personas.',
    url: 'https://www.inegi.org.mx/'
  }
];

var REPORTAJES = [
  {
    slug: 'la-educacion-que-no-llega',
    categoria: 'educacion',
    fecha: '2026-10-20',
    titulo: 'La educación que no llega',
    resumen: 'Un análisis sobre las desigualdades en el acceso a la educación pública y los obstáculos cotidianos.',
    problema: [
      'Asistir a la escuela parece un trámite sencillo, pero para muchas familias implica gastos y traslados largos.',
      'Hipótesis: hay obstáculos cotidianos que se han vuelto normales.'
    ],
    encontramos: [
      { tipo: 'hecho', texto: 'El derecho a la educación está reconocido en el artículo 3.º de la Constitución.' },
      { tipo: 'pendiente', texto: '¿Cuánto gastan las familias en útiles y transporte? VOZ aún no cuenta con una cifra.' }
    ],
    datos: ['ev-constitucion', 'ev-censo']
  },
  {
    slug: 'el-transporte-que-nunca-llega',
    categoria: 'movilidad',
    fecha: '2026-10-12',
    titulo: 'El transporte que nunca llega',
    resumen: 'Qué significa depender del transporte público cuando la espera y el costo forman parte del trayecto.',
    problema: [
      'Llegar a la escuela o al trabajo suele depender de rutas que no siempre pasan a tiempo.',
      'Hipótesis: el tiempo y el dinero destinados al traslado limitan oportunidades.'
    ],
    encontramos: [
      { tipo: 'hecho', texto: 'La movilidad está reconocida como derecho en el artículo 4.º de la Constitución.' },
      { tipo: 'pendiente', texto: '¿Cuánto tiempo y dinero dedican las personas a trasladarse?' }
    ],
    datos: ['ev-constitucion', 'ev-origen-destino']
  }
];

var botonMenu = document.querySelector('.menu-toggle');
var menuPrincipal = document.querySelector('#menu-principal');

//menu de nav
             // Abrir y cerrar el menú móvil al hacer clic en el botón
if (botonMenu && menuPrincipal) {
  botonMenu.addEventListener('click', function () {
    // Si el menú tiene la clase 'is-open', se la quitamos; si no, se la agregamos
    if (menuPrincipal.classList.contains('is-open')) {
      menuPrincipal.classList.remove('is-open');
      botonMenu.setAttribute('aria-expanded', 'false');
    } else {
      menuPrincipal.classList.add('is-open');
      botonMenu.setAttribute('aria-expanded', 'true');
    }
  });
}

// Colocar el año actual automáticamente en el pie de página
var elementosAnio = document.querySelectorAll('[data-anio]');
for (var i = 0; i < elementosAnio.length; i++) {
  elementosAnio[i].textContent = new Date().getFullYear();
}


// mostrar investigaciones y tarjetas

// Función para crear el código HTML 
function crearHTMLTarjeta(reportaje) {
  var nombreCategoria = CATEGORIAS[reportaje.categoria] || reportaje.categoria;

  var html = '<article class="card" data-categoria="' + reportaje.categoria + '">';
  html += '  <div class="ph ph--card"><span class="ph__txt">Fotografía · espacio reservado</span></div>';
  html += '  <div class="card__body">';
  html += '    <p class="card__meta">';
  html += '      <span class="chip">' + nombreCategoria + '</span> ';
  html += '      <time>' + reportaje.fecha + '</time>';
  html += '    </p>';
  html += '    <h3 class="card__title">';
  html += '      <a href="investigaciones.html#' + reportaje.slug + '" data-abrir="' + reportaje.slug + '">' + reportaje.titulo + '</a>';
  html += '    </h3>';
  html += '    <p>' + reportaje.resumen + '</p>';
  html += '    <p class="card__foot"><span class="tag-demo">Ilustrativo</span></p>';
  html += '  </div>';
  html += '</article>';

  return html;
}

// Cargar las 3 investigaciones más recientes en la página de inicio
var contenedorRecientes = document.querySelector('#recientes');
if (contenedorRecientes) {
  var contenidoHTML = '';
  // Recorremos los primeros 3 reportajes
  for (var j = 0; j < REPORTAJES.length && j < 3; j++) {
    contenidoHTML += crearHTMLTarjeta(REPORTAJES[j]);
  }
  contenedorRecientes.innerHTML = contenidoHTML;
}


