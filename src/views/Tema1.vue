<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 El plan estratégico para pyme
    
    .cont_1_1.pt-5
      p(data-aos="fade-right") Para iniciar el desarrollo temático y conceptual de este componente formativo, es importante tener un contexto sobre lo que se tratará en él, por tal motivo, se presenta una breve introducción, la cual lo enrutará en este aprendizaje:
      figure.mt-5(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mt-5(data-aos="fade-right") Es importante comprender que una pyme por pequeña que sea, se recomienda la aplicación de un plan estratégico que sea implementado sobre la gestión de las redes sociales y manejo de herramientas digitales como el email marketing, en la siguiente figura, se exponen unas recomendaciones a seguir a la hora de establecer el plan estratégico, teniendo en cuenta que cada empresa diseña su propio plan, con base a sus recursos, capacidades y alcance: 

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-left")
      h5 Figura 1.
      span Plan estratégico en redes sociales
    
    .col-xl-10.m-auto.mt-5
      figure.p-4.p-lg-5(style="background-color:#FAFEF4;")
        img(src="@/assets/curso/tema1/1.svg" data-aos="zoom-in-up")
      figcaption.fw-normal(style="background-color:#E8E8E8;") #[strong Nota.] Top position (2.022)

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_1 1.1 Concepto del plan estratégico
    
    .row
      .col-lg-4.mb-4.mb-md-0.col-md-6(style="place-self:center;" data-aos="fade-right")
        figure.m-auto.col-7.col-md-12
          img(src="@/assets/curso/tema1/2.png")
      .col-lg-8.col-md-6(data-aos="fade-left" style="place-self:end;")
        p Un plan estratégico es la proyección en un intervalo de tiempo de actividades a realizar por día, semana, mes, semestre, etc. Estos periodos son definidos teniendo en cuenta los procesos internos de cada organización, y debe disponer de un mecanismo que le permita lograr los objetivos establecidos de una manera eficiente y estructurada, esperando obtener los resultados proyectados. 
        .cajon.p-4.color-secundario.mt-4(style="background-color:#B2E5FF;")
          p.fw-bold Importante:
          p.mb-0 Las actividades a realizar en el plan estratégico, deben estar a fin con los objetivos establecidos, para poder evidenciar resultados concretos y evitar las perdidas en recursos invertidos. 
    
    br
    .mt-5.p-3.mb-4(style="max-width:fit-content;background-color:#94E435;border-radius:0px 60px 60px 0px;position:relative;" data-aos="fade-right")
      div(style="width:50px;height:12px;background-color:#FF3E72;border-radius:60px;position:absolute;top:-5px;")
      div(style="width:15px;height:15px;background-color:#FFC401;border-radius:100%;position:absolute;top:-12px;left:40px;")
      div(style="width:40px;height:10px;background-color:#0050DB;border-radius:60px;position:absolute;bottom:-3px;right:30px;")
      h4.mb-0.pe-4.ps-3 Etapas del plan estratégico
    
    p(data-aos="fade-left") El plan estratégico está compuesto por la planificación, organización, dirección y control, y éstos están organizados en 2 fases:
    

  





      
</template>

<script>
export default {
  name: 'Tema1',
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
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  background-color: #EAFAD6
  position: absolute
  width: 125%
  left: -15%
  height: 50%
  top: 0
</style>
