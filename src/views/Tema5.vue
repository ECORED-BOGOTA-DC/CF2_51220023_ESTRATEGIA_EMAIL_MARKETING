<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 El #[em email marketing] y las plataformas de mailing
    
    .row
      .col-lg-4.mb-4.mb-md-0.col-md-6(data-aos="fade-right")
        figure.m-auto.col-7.col-md-12
          img(src="@/assets/curso/tema5/1.png")
      .col-lg-8.col-md-6(data-aos="fade-left")
        p El envío de correos electrónicos en el momento oportuno puede reducir los posibles obstáculos que hayan surgido en el proceso de compra y animar a los clientes potenciales a comprar. Además, es necesario hacer un seguimiento del rendimiento de cada uno de los correos electrónicos para que la estrategia de email marketing siga evolucionando.
        p.mt-4 El #[em email marketing] funciona mejor si los correos que se envían llegan al cliente en la fase del recorrido de compra en el que se encuentran; las estrategias de correo masivo no suelen funcionar. Lo importante es buscar el equilibrio en la cantidad de correos electrónicos que envías; de otro modo, corres el riesgo de molestar al cliente potencial.
        p.mt-4 Existen plataformas que permiten llegar a una mayor cantidad de clientes mediante contenido meditado y segmentado con plantillas predefinidas con el correo electrónico; este método es preferido para la comunicación de la marca, junto con el sitio web y el correo electrónico directo.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_5_1 5.1 Concepto de #[em email marketing]
    
    .cont_5_1.pt-5
      p(data-aos="fade-right") En el siguiente video, se puede apreciar el concepto de #[em email marketing] y los diferentes tipos de correos electrónicos de aplicación #[em marketing]:
      figure.mt-5(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_5_2 5.2 Plataformas para el #[em email marketing]
    
    .row
      .col-lg-4.mb-4.mb-md-0.col-md-6(data-aos="fade-right")
        figure.m-auto.col-7.col-md-12
          img(src="@/assets/curso/tema5/2.svg")
      .col-lg-8.col-md-6(data-aos="fade-left")
        p Es una acción o técnica de mercadeo directo que se apoya del envío de correos electrónicos de forma masiva para enviar un mensaje a una audiencia específica. Este envío de correos busca estimular las ventas o informar de novedades. Existen varias plataformas que prestan este servicio, entre las más populares están mailchimp y sendinblue.
        p.mt-4 En el siguiente video se puede explica el concepto de mailchimp:
    
    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background: linear-gradient(180deg, rgba(0,169,255,1) 0%, rgba(0,80,219,1) 100%);border-radius:10px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema5/3.svg" style="display:inline;max-width:80px;")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4.mb-0.text-white Mailchimp
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Tifqdwz_TE4" target="_blank")
              span Enlace web
              i.fas.fa-link
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_5_3 5.3. Planificación del #[em email marketing]
    
    .row
      .col-lg-8.col-md-6.mb-4.mb-md-0(data-aos="fade-right" style="place-self:center;")
        p Para crear una campaña de #[em email marketing], lo primero que se debe realizar en la segmentación de la base de datos, luego crear el contenido definiendo los objetivos de la campaña, para ello es fundamental tener conocimiento del público objetivo, después crear el contenido para los emails, ya sea con botones de llamados a la acción o simplemente de manera informativa, y por último determinar cuáles son los de la campaña, si el deseo es vender más,  conseguir seguidores o visitas a los diferente medios digitales de la organización.
      .col-lg-4.col-md-6(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-12
          img(src="@/assets/curso/tema5/4.svg")
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Figura 4.
      span Ciclo #[em Email marketing]
    
    .col-xl-10.m-auto.mt-5(data-aos="zoom-in-up")
      figure
        img(src="@/assets/curso/tema5/5.svg")
      figcaption.fw-normal.mt-2(style="background-color:#E8E8E8;") #[strong Nota.] Gadmin (2.022)


  





      
</template>

<script>
export default {
  name: 'Tema5',
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
.cont_5_1, .cont_5_1 *
  position: relative
.cont_5_1:before
  content: ''
  background-color: #EAFAD6
  position: absolute
  width: 125%
  left: -15%
  height: 50%
  top: 0
</style>
