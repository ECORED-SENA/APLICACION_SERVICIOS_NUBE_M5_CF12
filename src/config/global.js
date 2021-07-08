export default {
  global: {
    componenteFormativo: 'Entrega continua',
    descripcionCurso:
      'En este componente formativo se especifican las características y elementos necesarios para la implementación de la práctica de entrega continua en el contexto del desarrollo de software.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Implementación de integración continua y entrega continua básica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Implementación del proceso de entrega continua automatizada',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [],
  },
  referencias: [
    {
      referencia:
        'Alex. (2019). Introducción a CI/CD con GitLab. Alexmarket.medium. ',
      link:
        'https://alexmarket.medium.com/introducci%C3%B3n-a-ci-cd-con-gitlab-23d4e9cc6482',
    },
    {
      referencia:
        'Fileinfo.com. (2021). YML File Extension - What is a YML file? The file information database. ',
      link: 'https://fileinfo.com/extension/yml ',
    },
    {
      referencia:
        'Ghimire, B. (2021). Introducción a YAML para principiantes. Geekflare. ',
      link: 'https://geekflare.com/es/yaml-introduction/ ',
    },
  ],
  glosario: [
    {
      termino: 'Git',
      significado: 'Software para el control de versiones.',
    },
    {
      termino: 'IDE',
      significado: 'Entorno integrado de desarrollo.',
    },
    {
      termino: 'Plugins',
      significado:
        'Programas complementarios que se instalan para ampliar las capacidades de un software.',
    },
    {
      termino: 'Repositorio',
      significado: 'Lugar en el que se almacenan archivos.',
    },
    {
      termino: 'Runner',
      significado: 'Servicio que permite ejecutar un conjunto de scripts.',
    },
  ],
  complementario: [
    {
      texto:
        'Nicobytes. (2019). Angular + GitLab DevOps: Integración continua y entrega continua en proyectos Angular.',
      tipo: 'Video',
      link: 'https://youtu.be/C5voC7WAEaY ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Instructor',
        centro:
          'Regional Cauca, Centro de Teleinformática y Producción Industrial.',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
