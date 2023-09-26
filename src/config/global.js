export default {
  global: {
    componenteFormativo: 'Email Marketing Estratégico',
    descripcionCurso:
      'Es este componente formativo, el aprendiz adquirirá los conocimientos del plan estratégico de la pyme, el CRM y la relación con el cliente, el comercio electrónico, el marco legal, la creación y gestión de contenidos digitales, el email marketing y las plataformas de mailing, para finalmente realizar analítica web y reporte de métricas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El plan estratégico para pyme',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto del plan estratégico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Las pymes y la planificación estratégica',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El CRM y la relación con el cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'El Comercio electrónico y el marco legal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de comercio electrónico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de comercio electrónico',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Marco legal del comercio electrónico',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Creación y gestión de contenidos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de contenido digital',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de contenidos digitales para el marketing',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'El email marketing y las plataformas de mailing',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de email marketing',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Plataformas para el email marketing',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Planificación del email marketing',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Analítica web y reportes de métricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto de analítica',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Indicadores y KPI’s',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Reportes de métricas',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '3. El comercio electrónico y el marco legal',
      referencia:
        'Tapscott, D, Lowy, A. Ticoll, D. (1.999). <em>La Era De Los Negocios Electrónicos: Cómo Generar Utilidades En La Economía Digital</em>. Bogotá: McGraw-Hill, Print.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000003420',
    },
    {
      tema: '5. El email marketing y las plataformas de mailing',
      referencia:
        'Moro, M. (2.014). <em>Marketing Digital</em>. Madrid: Ediciones Paraninfo. Print.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000080197',
    },
    {
      tema: '5.3. Planificación del email marketing',
      referencia:
        'Vila, N. Küster, I. (2.002). <em>Oportunidades y Amenazas Del E-mail Márketing<7em>. Barcelona]: Ediciones Deusto - Planeta De Agostini Profesional y Formación S.L. Web.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB14834',
    },
  ],
  glosario: [
    {
      termino: 'Comercio electrónico',
      significado:
        'hace referencia a la distribución, venta, compra, marketing y suministro de información de productos o servicios a través de internet.',
    },
    {
      termino: 'CRM',
      significado:
        'software de gestión de la relación con los clientes (Customer Relationship Management). Es una poderosa herramienta que ayuda a las empresas a organizar y gestionar la relación con sus clientes desde una plataforma centralizada y fácil de usar.',
    },
    {
      termino: 'Email marketing',
      significado:
        'as empresas pueden recurrir al marketing por email para comunicarse de forma periódica con su audiencia. Se publicita el contenido o los eventos, se ofrece descuentos o dirigir a los clientes a ubicaciones concretas, como al sitio web o a las publicaciones del blog.',
    },
    {
      termino: 'Entorno Digital',
      significado:
        'representa la mejora de experiencia de los clientes y el aumento de sus competencias para dar soporte a su núcleo productivo, cubriendo con agilidad las necesidades cambiantes exigidas por los mercados en un ecosistema volátil, incierto, complejo y ambiguo.',
    },
    {
      termino: 'Negocios electrónicos',
      significado:
        'los E-business están basados en la integración de las TIC’s (Tecnologías de la Información y Comunicación) con las actividades de los negocios. Es decir, son las estrategias empresariales integradas con las nuevas tecnologías para desarrollar cualquier modelo de negocio a través del internet, permitiendo mejorar su gestión y aumentar la productividad.',
    },
    {
      termino: 'Plan estratégico',
      significado:
        'proceso de proyección en un intervalo de tiempo de actividades por día, semana o mes de una empresa u organización, y debe disponer de un mecanismo que le permita lograr los objetivos establecidos de una manera eficiente y estructurada, esperando obtener los resultados proyectados.',
    },
    {
      termino: 'Social media',
      significado:
        'plataformas donde comunidades y personas pueden interactuar y socializar diversos temas, con la finalidad de compartir noticias, gustos, intereses, ideas, tendencias, etc, donde el contenido digital es generado por todos los participantes y no por un único creador como en los medios tradicionales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Edraw. (2.022). <em>Beneficios de la comunicación visual</em>.',
      link:
        'https://www.edrawsoft.com/es/benefits-of-visual-communication.html',
    },
    {
      referencia: 'Fondeopyme (2.022). <em>CRM</em>.',
      link: 'https://fondeopyme.com/crm.php',
    },
    {
      referencia: 'Gadmin. (2.022). <em>Ciclos de email marketing</em>.',
      link:
        'https://venderloteriaporinternet.gadmin.es/disena-campana-email-marketing/',
    },
    {
      referencia:
        'Herrera, H. H. (2.012). Las redes sociales: <em>una nueva herramienta de difusión</em>. Revista reflexiones, 91(2).',
      link: 'https://concepto.de/redes-sociales/#ixzz7TPxAMgyc',
    },
    {
      referencia: 'Iebschool (2.022). <em>Que es SEO</em>.',
      link:
        'https://www.iebschool.com/blog/que-es-seo-social-y-como-puede-ayudar-a-mi-estrategia-de-seo-sem/',
    },
    {
      referencia: 'IFICORP (2.022). <em>CRM</em>.',
      link:
        'http://www.ificorp.net/web/index.php/impuestos/52-clientes-cartera/790-que-es-un-crm-software-y-para-que-sirve-crm-significado-y-aplicaciones',
    },
    {
      referencia: 'JuanCMejia (2.020). <em>Indicadores de redes sociales</em>.',
      link:
        'https://www.juancmejia.com/redes-sociales/kpis-de-redes-sociales-guia-con-principales-metricas-e-indicadores-de-social-media/',
    },
    {
      referencia:
        'Kapeí. (2.022). <em>¿Qué es el Embudo de Conversión y por qué es importante para el Marketing Digital?</em>',
      link: 'https://kapei.pe/marketing-digital/que-es-embudo-de-conversion/',
    },
    {
      referencia:
        'Moro, V. (2.014). <em>Marketing Digital</em>. Madrid: Ediciones Paraninfo, 2014. Print.',
      link: '',
    },
    {
      referencia: 'Pinterest (2.022). <em>Analítica web</em>.',
      link: 'https://co.pinterest.com/pin/772226667329553158/',
    },
    {
      referencia:
        'Serrano, J. (2.015). <em>SEO</em>. Barcelona: Editorial UOC. Web',
      link: '',
    },
    {
      referencia:
        'Top position. (2.022). <em>Plan estratégico en redes sociales</em>.',
      link: 'https://t-position.com/plan-estrategico-en-redes-sociales/',
    },
    {
      referencia:
        'Wix. (2.022). <em>App externa: Social Media Stream de SmartFox</em>.',
      link:
        'https://support.wix.com/es/article/app-externa-social-media-stream-de-smartfox',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Margarita Rosa Triana Sánchez',
          cargo: 'Experto temático',
          centro:
            'Región Norte de Santander - Centro de la industria, la empresa y los servicios',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital – Centro Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de contenidos educativos',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de contenidos educativos y vinculación al LMS',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
