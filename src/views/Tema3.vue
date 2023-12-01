<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 El comercio electrónico y el marco legal
    
    .row
      .col-lg-4.mb-4.mb-md-0.col-md-6(data-aos="fade-right")
        figure.m-auto.col-7.col-md-12
          img(src="@/assets/curso/tema3/1.png" alt="Imagen decorativa")
      .col-lg-8.col-md-6(data-aos="fade-left")
        p La mayoría de las empresas ya están presentes en internet, por lo que además del #[em marketing] móvil, otro reto será disponer de plataformas de comercio electrónico para sus productos y servicios. Las empresas que no lo hagan aún, si quieren estar a la altura de las últimas realidades tecnológicas, deben adaptarse a este tipo de venta.
        p.mt-4 Son innumerables las ventajas que este tipo de venta ofrece a las empresas, porque no solo supone un ahorro de costes, sino que aumenta considerablemente el número de ventas. Sumadas ambas ventajas suponen un incremento en el volumen de ingresos de las compañías, sin embargo, se deben regir por el marco legal en la ley de #[em habeas data] y los derechos de autor del contenido que se pueda generar para promocionar los productos o servicios.
        p.mt-4 En el siguiente video, se explica el concepto y aplicación de la ley de #[em habeas data]
        .col-xl-12.m-auto.mt-4
          .p-4(data-aos="flip-up" style="background: linear-gradient(180deg, rgba(0,169,255,1) 0%, rgba(0,80,219,1) 100%);border-radius:10px;")
            .row.m-0
              .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
                figure.text-center
                  img(src="@/assets/curso/tema3/2.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
              .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
                h4.mb-0.text-white Ley estatutaria 1581 de 2012: disposiciones generales para la protección de datos personales
              .col-lg-3.col-md-3.text-center(style="place-self:center;")
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=U8OGCJaKORY" target="_blank")
                  span Video
                  i.fas.fa-video
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_3_1 3.1 Concepto de comercio electrónico
    
    .row
      .col-lg-8.mb-4.mb-md-0.col-md-6(data-aos="fade-right")
        p El comercio electrónico o #[em e-commerce] hace referencia a la distribución, venta, compra y suministro de información de productos o servicios a través de internet. Muchas empresas son reticentes a desarrollar estrategias de este tipo dentro de sus compañías, pero no son conscientes de las grandes pérdidas que puede acarrear el no estar presente en este tipo de mercados virtuales.
        p.mt-4 Para desarrollar este comercio electrónico, las empresas o profesionales, deben contar con páginas o portales web o herramientas digitales que les permitan desarrollar sus transacciones comerciales.
        p.mt-4 Ese tipo de sitios web deberán contar con las siguientes secciones:
      .col-lg-4.col-md-6(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/3.png" alt="Imagen decorativa")
    
    .tarjeta.tarjeta--gris.p-4.mt-5(style="background-color:#EFFBE1;")
      LineaTiempoC.color-acento-contenido
        .row.col-lg-11.m-auto(titulo="1")
          .col-lg-4.mb-4.mb-md-0.col-md-6
            figure.col-md-12.m-auto.col-7
              img(src="@/assets/curso/tema3/4.png" alt="Imagen decorativa")
          .col-lg-8.col-md-6
            h5 Información institucional
            p.mt-3 En esta sección se habla de la empresa u organización para inspirar confianza en el usuario, también pueden incluir valores corporativos entre otros datos según las preferencias de cada compañía.
        .row.col-lg-11.m-auto(titulo="2")
          .col-lg-4.mb-4.mb-md-0.col-md-6
            figure.col-md-12.m-auto.col-7
              img(src="@/assets/curso/tema3/5.png" alt="Imagen decorativa")
          .col-lg-8.col-md-6
            h5 Catálogo digital
            p.mt-3 Este catálogo digital debe incluir todos los productos y servicios de la empresa, así como información detallada de los mismos. También es recomendable incluir valoraciones y opiniones de otros usuarios, así como técnicas de venta cruzada.
        .row.col-lg-11.m-auto(titulo="3")
          .col-lg-4.mb-4.mb-md-0.col-md-6
            figure.col-md-12.m-auto.col-7
              img(src="@/assets/curso/tema3/6.png" alt="Imagen decorativa")
          .col-lg-8.col-md-6
            h5 Procesamiento de órdenes
            p.mt-3 Esta sección especifica los métodos para configurar los envíos de los pedidos. Debe incluir datos como: dirección de envío, formas de envío, métodos de pago.
        .row.col-lg-11.m-auto(titulo="4")
          .col-lg-4.mb-4.mb-md-0.col-md-6
            figure.col-md-12.m-auto.col-7
              img(src="@/assets/curso/tema3/7.png" alt="Imagen decorativa")
          .col-lg-8.col-md-6
            h5 Pasarelas de pago
            p.mt-3 Una plataforma de comercio electrónico debe estar adaptada para la realización de pagos electrónicos. La integración de herramientas de pago como Paypal y entidades bancarias es fundamental.
        .row.col-lg-11.m-auto(titulo="5")
          .col-lg-4.mb-4.mb-md-0.col-md-6
            figure.col-md-12.m-auto.col-7
              img(src="@/assets/curso/tema3/8.png" alt="Imagen decorativa")
          .col-lg-8.col-md-6
            h5 Condiciones del servicio y devoluciones
            p.mt-3 Todo negocio debe cumplir con la normativa legal y tener preparado un protocolo de devoluciones para cuando el cliente no queda satisfecho con el producto o servicio.
        .row.col-lg-11.m-auto(titulo="6")
          .col-lg-4.mb-4.mb-md-0.col-md-6
            figure.col-md-12.m-auto.col-7
              img(src="@/assets/curso/tema3/9.png" alt="Imagen decorativa")
          .col-lg-8.col-md-6
            h5 Motor de búsqueda interno
            p.mt-3 La plataforma de comercio electrónico debe ofrecer la posibilidad de que el usuario pueda localizar fácilmente, dentro del catálogo, el producto o servicio que está buscando.
        .row.col-lg-11.m-auto(titulo="7")
          .col-lg-4.mb-4.mb-md-0.col-md-6
            figure.col-md-12.m-auto.col-7
              img(src="@/assets/curso/tema3/10.png" alt="Imagen decorativa")
          .col-lg-8.col-md-6
            h5 Contacto
            p.mt-3 El cliente puede necesitar información para cerrar el proceso de venta. Por tanto, es necesario disponer de algún apartado en la web donde el usuario pueda acceder para contactar con la empresa u organización para realizar consultas o despejar sus dudas.
        .row.col-lg-11.m-auto(titulo="8")
          .col-lg-4.mb-4.mb-md-0.col-md-6
            figure.col-md-12.m-auto.col-7
              img(src="@/assets/curso/tema3/11.png" alt="Imagen decorativa")
          .col-lg-8.col-md-6
            h5 Boletines de correo electrónico
            p.mt-3 En esta sección, el cliente puede suscribirse para recibir información y actualizaciones sobre los productos o servicios de la empresa.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_3_2 3.2 Tipos de comercio electrónico
    
    p(data-aos="fade-right") Cuando se busca captar un tráfico cualificado, con buena probabilidad de conversión, del cual se espera que complete todo el proceso y terminen por adquirir o contratar los productos y servicios, se deben poner en prácticas algunas técnicas:

    .row.mt-5
      .col-lg-4.col-md-6.mb-4.mb-md-0.pe-lg-5(data-aos="fade-right" style="place-self:center;")
        figure.col-lg-12.col-md-12.col-7.m-auto
          img(src="@/assets/curso/tema3/12.svg" alt="Imagen decorativa")
      .col-lg-8.col-md-6(data-aos="fade-left" style="place-self:center;")
        ul.lista-ul.mt-4.mb-0
          li.d-flex.mb-3
            i.fas.fa-check(style="color:#94E435;")
            | Garantizar la visibilidad a los ojos de los clientes o usuarios potenciales y mejorar la eficacia de los puntos de contacto.
          li.d-flex.mb-3
            i.fas.fa-check(style="color:#94E435;")
            | Contar con un sitio web que potencie la compra en la primera visita.
          li.d-flex
            i.fas.fa-check(style="color:#94E435;")
            | Mejorar la ratio de conversión, desde que los usuarios ven nuestro anuncio hasta que realizan la transacción o compra.
    
    p.mt-5(data-aos="fade-right") Para conseguir aumentar la conversión a ventas, se necesita saber hacia dónde va dirigido el contenido:
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.h-100.p-lg-5(style="background-color:#B2E5FF;")
          figure.col-lg-12.col-md-7.col-8.m-auto
            img(src="@/assets/curso/tema3/13.png" alt="Imagen decorativa")
          h5.mt-3 B2B
          p.mt-3.mb-0 El término B2B (#[em Business to Business]) es un acrónimo con el que nos referimos a aquellos modelos de negocio en los que las transacciones de bienes, o la prestación de servicios se producen entre dos empresas.
      .col-lg.mb-4.mb-lg-0(data-aos="fade-left")
        .p-4.h-100.p-lg-5(style="background-color:#B2E5FF;")
          figure.col-lg-12.col-md-7.col-8.m-auto
            img(src="@/assets/curso/tema3/14.png" alt="Imagen decorativa")
          h5.mt-3 B2C
          p.mt-3.mb-0 #[em Business to Consumer], o relaciones de empresas con clientes, es un término normalmente utilizado para las relaciones establecidas en internet entre diferentes empresas, proveedores, distribuidores, #[em partners], y, en definitiva, para todas aquellas relaciones profesionales entre empresas.
    
    Separador

    .titulo-segundo
      h2#t_3_3 3.3 Marco legal del comercio electrónico
    
    .row
      .col-lg-8.mb-4.mb-md-0(data-aos="fade-right")
        p En la actualidad la medición continua de variables es cada vez más común. Cada instante se genera una gran cantidad de datos que son convertidos en información. El acceso a esta información permite a los dirigentes crear campañas de mercadeo en medios sociales, logrando segmentar el público objetivo, no obstante, el manejo de grandes volúmenes de información trae consigo un alto grado de responsabilidad, debido a que la información no es propiedad de la empresa que gestiona los datos, sino de la persona directamente implicada, y también, porque la información mal utilizada, puede ser robada, borrada o alterada, los que afectaría su disponibilidad, veracidad y fidelidad, poniendo en riesgo a los propietarios de esa información.
        p.mt-4 El marco jurídico aplicable en Colombia para el aprovechamiento y recolección de datos está regido por:
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/15.png" alt="Imagen decorativa")
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Tabla 1.
      span Marco jurídico para Colombia
    
    .col-xl-10.m-auto.mt-5.m-auto
      .tabla-a.color-acento-botones(data-aos="flip-up") 
        table
          thead(style="border:0;")
            tr(style="background-color:#0050DB;")
              th.text-white.text-center Normativa
              th.text-white.text-center Describe
          tbody
            tr
              td.p-4 Constitución Política de Colombia 1991 en su Artículo 15.
              td.p-4 Mediante el cual se establece el derecho que tienen las personas a conocer, actualizar y ratificar la información personal.
            tr
              td.p-4 Ley 1266 de 2008.
              td.p-4 Por medio de la cual se dictan las disposiciones generales de #[em habeas data].
            tr
              td.p-4 Ley 1273 de 2009.
              td.p-4 El cual modifica el código penal y crea como bien jurídico tutelado la protección de la información y de los datos.
            tr
              td.p-4 Ley 1581 de 2012.
              td.p-4 Vela por los principios y disposiciones que definen los derechos sobre los datos personales, en su Artículo 9, con la exigencia de consentimiento previo del uso de datos personales.
            tr
              td.p-4 Decreto 1377 de 2012.
              td.p-4 Reglamenta aspectos relacionados con la titularidad del uso de la información para el tratamiento de sus datos personales.
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0.pe-lg-5(data-aos="fade-right" style="place-self:end;")
        figure.col-lg-12.col-md-7.col-7.m-auto
          img(src="@/assets/curso/tema3/16.svg" alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p La cantidad de datos que las entidades recolecten, traten o generen requieren, la implementación de una adecuada gestión de la información para asegurar la protección, almacenamiento y acceso de los datos. Para ello es importante que las entidades consideren el diseño e implementación de una arquitectura de almacenamiento de datos, que respalde la confidencialidad, integridad y disponibilidad de ellos.
        p.mt-4 En el siguiente video, hay algunas recomendaciones a tener en cuenta en el #[em marketing] digital, en el ámbito del #[em habeas data]:
        .col-xl-12.m-auto.mt-4
          .p-4(data-aos="flip-up" style="background: linear-gradient(180deg, rgba(0,169,255,1) 0%, rgba(0,80,219,1) 100%);border-radius:10px;")
            .row.m-0
              .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
                figure.text-center
                  img(src="@/assets/curso/tema3/17.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
              .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
                h4.mb-0.text-white Recomendaciones de aplicación del #[em.text-white habeas data]
              .col-lg-3.col-md-3.text-center(style="place-self:center;")
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=3LuHTByY51w" target="_blank")
                  span Video
                  i.fas.fa-video
        p.mt-5 Es importante tener en cuenta que todas las obras están protegidas desde que se crean, no obstante, se debe contar con el registro por la Dirección Nacional de Derechos de Autor, entidad competente que otorga dicho registro y vela por los derechos del creador en el momento que pueda ocurrir alguna controversia.
        p.mt-4 A continuación, se explican los derechos de autor:
        .col-xl-12.m-auto.mt-4
          .p-4(data-aos="flip-up" style="background: linear-gradient(180deg, rgba(0,169,255,1) 0%, rgba(0,80,219,1) 100%);border-radius:10px;")
            .row.m-0
              .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
                figure.text-center
                  img(src="@/assets/curso/tema3/17.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
              .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
                h4.mb-0.text-white Derechos de autor
              .col-lg-3.col-md-3.text-center(style="place-self:center;")
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=uKZZxlT4F5M" target="_blank")
                  span Video
                  i.fas.fa-video
    
    p.mt-5(data-aos="fade-right") Este trámite se puede realizar de manera virtual, directamente en la página web de la entidad (#[a(href="https://www.registroenlinea.gov.co/portal.htm" target="_blank" style="word-break:break-all;") https://www.registroenlinea.gov.co/portal.htm]), o de forma presencial en la dirección Calle 28 # 13 A 15 Piso 17 de la ciudad de Bogotá. El trámite es gratuito, sencillo y seguro de realizar, no requiere intermediarios y tiene una duración de 30 días hábiles para obtener respuesta de acuerdo al Decreto 491 de 2020.
    p.mt-4(data-aos="fade-left") En la siguiente tabla, se relacionan las direcciones electrónicas donde se pueden registrar las obras y/o formulario de registro:

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Tabla 2.
      span Registro de obras
    
    .col-xl-10.m-auto.mt-5.m-auto
      .tabla-a.color-acento-botones(data-aos="flip-up") 
        table
          thead(style="border:0;")
            tr(style="background-color:#0050DB;")
              th.text-white.text-center Tipo de registro
              th.text-white.text-center Dirección electrónica
          tbody
            tr
              td.p-4 Obra literaria (Inédita o Editada)
              td.p-4 #[a(href="http://derechodeautor.gov.co:8080/documents/10181/9845668/for_literaria1.PDF" target="_blank" style="word-break:break-all;color:#0050DB;") http://derechodeautor.gov.co:8080/documents/10181/9845668/for_literaria1.PDF]
            tr
              td.p-4 Obra artística o musical.
              td.p-4 #[a(href="http://derechodeautor.gov.co:8080/documents/10181/9845668/for_artistica1.pdf" target="_blank" style="word-break:break-all;color:#0050DB;") http://derechodeautor.gov.co:8080/documents/10181/9845668/for_artistica1.pdf]
            tr
              td.p-4 Obra Audiovisual
              td.p-4 #[a(href="http://derechodeautor.gov.co:8080/documents/10181/9845668/for_audiovisual1.PDF" target="_blank" style="word-break:break-all;color:#0050DB;") http://derechodeautor.gov.co:8080/documents/10181/9845668/for_audiovisual1.PDF]
            tr
              td.p-4 Fonogramas
              td.p-4 #[a(href="http://derechodeautor.gov.co:8080/documents/10181/9845668/for_fonogramas1aa.PDF" target="_blank" style="word-break:break-all;color:#0050DB;") http://derechodeautor.gov.co:8080/documents/10181/9845668/for_fonogramas1aa.PDF]
            tr
              td.p-4 Soporte lógico – #[em Software]
              td.p-4 #[a(href="http://derechodeautor.gov.co:8080/documents/10181/9845668/for_software1.pdf" target="_blank" style="word-break:break-all;color:#0050DB;") http://derechodeautor.gov.co:8080/documents/10181/9845668/for_software1.pdf]
            tr
              td.p-4 Actos y contratos
              td.p-4 #[a(href="http://derechodeautor.gov.co:8080/documents/10181/9845668/contratos_1a.pdf" target="_blank" style="word-break:break-all;color:#0050DB;") http://derechodeautor.gov.co:8080/documents/10181/9845668/contratos_1a.pdf]

    





      
</template>

<script>
import LineaTiempoC from '../components/LineaTiempoC.vue'
export default {
  name: 'Tema3',
  components: {
    LineaTiempoC,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.linea-tiempo-c__header__btn, .linea-tiempo-c__header__btn--left, .linea-tiempo-c__header__btn--right, .pasos-b__header__btn--left, .pasos-b__header__btn--right
  border: 2px solid #FFC401
  background-color: #FFC401
</style>
