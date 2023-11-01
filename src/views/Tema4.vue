<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Creación y gestión de contenidos digitales
    
    p(data-aos="fade-right") El contenido digital permite que apoyadas en el uso de imágenes, las empresas consigan convertir potenciales consumidores en clientes. Este medio ha ido en constante evolución logrando un buen grado de posicionamiento entre las empresas. Se debe tener en cuenta que la gestión en comunicación visual debe integrar la estrategia de identidad corporativa y la efectividad de la imagen interna para lograr los objetivos trazados de la organización. 

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Tabla 3.
      span Comunicación visual
    
    .col-xl-10.m-auto.mt-5.m-auto
      .tabla-a.color-acento-botones(data-aos="flip-up") 
        table
          thead(style="border:0;")
            tr(style="background-color:#0050DB;")
              th.text-white.text-center Objetivo
              th.text-white.text-center Descripción
          tbody
            tr
              td.p-4 Comprensibilidad
              td.p-4 Lograr un alto grado de visibilidad y transmitir con facilidad el concepto deseado.
            tr
              td.p-4 Calidad
              td.p-4 Generar un producto de gran calidad estética pero manteniendo la funcionalidad, sobre todo si estamos hablando del diseño de los ambientes físicos, del mobiliario y del diseño industrial del #[em packing]. 
            tr
              td.p-4 Reconocimiento de marca
              td.p-4 Trabajar fuertemente la dimensión temporal (duración y vigencia), ya que la construcción de una identidad visual no es una actividad comunicativa que se haga todos los días, implica una inversión importante para la organización. 
    
    p.mt-5(data-aos="fade-right") Además, la gestión en comunicación visual presenta ciertos elementos visuales que pueden diseñarse en diversas formas dependiendo del campo de aplicación, pero la estrategia de comunicación y el diseño manejan los mismos principios para lograr el cumplimiento óptimo de los objetivos.

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Figura 3.
      span Comunicación visual
    
    .col-xl-6.col-lg-8.m-auto.mt-5.m-auto
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema4/1.svg" alt="Figura que ejemplifica aspectos relacionados con la comunicación visual, encontrando letreros de advertencia y de señalización, gráficos estadísticos, fotografía de lugares, artes y acciones relacionadas con aparatos electrónicos (TV, PC).")
    
    p.mt-5(data-aos="fade-left") En conclusión, la gestión en comunicación visual se define como la selección de elementos idóneos que pueden ser íconos, gráficos, textos, formas, entre otros, que logren impactar a la audiencia a través de imágenes y diseño.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_4_1 4.1 Concepto de contenido digital
    
    .cont_4_1.pt-5
      p(data-aos="fade-right") Los contenidos digitales son piezas de información fundamentales en el Inbound Marketing, se pueden construir a través de videos, #[em reels], imágenes, texto, #[em gif], mapas conceptuales, entre otros; el éxito del impacto en su creación dependerá de la creatividad, y se transformará en clientes, ventas y visitantes al negocio, a continuación, se profundiza sobre su aplicación y consideraciones:
      figure.mt-5(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_4_2 4.2 Tipos de contenidos digitales para el #[em marketing]
    
    p(data-aos="fade-right") En la actualidad existen diversos contenidos para la gestión y publicación en medios sociales. Con ellos se pueden crear textos, foros, temas de discusiones, chat colaborativo, información de interés general en algún tema específico, etc.

    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Blog")
            p Es un sitio web personal donde se publica cualquier tema que se desee compartir. Este se actualiza de manera periódica y recopila textos y artículos cronológicamente de uno o varios autores.
            figure.mt-3
              img(src="@/assets/curso/tema4/3.png" alt="Imagen decorativa")
          .row(titulo="<em>Landing page</em>")
            p Es una página web diseñada como destino o “aterrizaje” que permite convertir visitantes en #[em leads] o clientes finales. Su funcionamiento es sencillo, al ofrecer algo que llame la atención del usuario, estará más dispuesto a dejar información a través de algún formulario.
            figure.mt-3
              img(src="@/assets/curso/tema4/4.png" alt="Imagen decorativa")
          .row(titulo="Tik Tok")
            p Es una red social propiedad de la empresa ByteDance (China). Es la red social por excelencia para generar y compartir vídeos cortos, que, durante esa cantidad minúscula de segundos, dan el mensaje concreto de lo que se quiere ofrecer o comunicar.
            figure.mt-3
              img(src="@/assets/curso/tema4/5.png" alt="Imagen decorativa")
          .row(titulo="YouTube")
            p Es un sitio web estadounidense especializado para crear o compartir videos de diferente temática (películas, programas de televisión, vídeos musicales, video tutoriales), así como contenido #[em amateur] de juegos o situaciones cotidianas de las personas.
            figure.mt-3
              img(src="@/assets/curso/tema4/6.png" alt="Imagen decorativa")
      .col-lg-4(data-aos="fade-left" style="")
        figure.col-8.col-lg-12.col-md-6.m-auto
          img(src="@/assets/curso/tema4/2.svg" alt="Imagen decorativa")





      
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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
.cont_4_1, .cont_4_1 *
  position: relative
.cont_4_1:before
  content: ''
  background-color: #EAFAD6
  position: absolute
  width: 125%
  left: -15%
  height: 50%
  top: 0
.acordion .tarjeta--azul
  background-color: #CCEEFF
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #B2E5FF
</style>
