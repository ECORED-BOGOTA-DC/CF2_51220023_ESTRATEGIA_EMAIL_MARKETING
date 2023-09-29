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
    
    p.mt-5(data-aos="fade-right") Es importante comprender que una pyme por pequeña que sea, se recomienda la aplicación de un plan estratégico que sea implementado sobre la gestión de las redes sociales y manejo de herramientas digitales como el #[em email marketing], en la siguiente figura, se exponen unas recomendaciones a seguir a la hora de establecer el plan estratégico, teniendo en cuenta que cada empresa diseña su propio plan, con base a sus recursos, capacidades y alcance: 

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

    .row.mt-5
      .col-lg.mb-4.mb-lg-0(data-aos="fade-right" @mouseover="mostrarIndicador = false")
        .p-4(style="background-color:#B2E5FF;overflow: hidden;")
          figure.col-lg-12.col-md-7.col-8.m-auto
            img(src="@/assets/curso/tema1/3.png")
          .cont_hide
            h5.mt-4.mb-0.indicador__container.title_hide(style="cursor:pointer;") Fase mecánica &nbsp; #[i.fas.fa-chevron-up] #[i.fas.fa-chevron-down(style="opacity:0;")] #[.indicador--click(v-if="mostrarIndicador")]
            .cont_data
              p.mt-3 Es la parte estática del plan y está conformada por:
              p.mt-4 #[strong Planeación:] consiste en que la organización determine que se va a hacer de forma anticipada para lograr los objetivos propuestos de manera eficiente.
              p.mb-0.mt-4 #[strong Organización:] consiste en que la organización identifique cómo hacer que los recursos se utilicen de forma equilibrada, manteniendo una relación entre el trabajo y el personal que lo va a realizar o ejecutar.
      .col-lg.mb-4.mb-lg-0(data-aos="fade-left" @mouseover="mostrarIndicador = false")
        .p-4(style="background-color:#B2CAF4;overflow: hidden;")
          figure.col-lg-12.col-md-7.col-8.m-auto
            img(src="@/assets/curso/tema1/4.png")
          .cont_hide
            h5.mt-4.mb-0.title_hide(style="cursor:pointer;") Fase dinámica &nbsp; #[i.fas.fa-chevron-up] #[i.fas.fa-chevron-down(style="opacity:0;")]
            .cont_data
              p.mt-3 En esta hace referencia al movimiento y está conformada por:
              p.mt-4 #[strong Dirección:] consiste en que la organización verifique que se hagan las actividades o tareas propuestas para el logro de los objetivos, mediante el liderazgo, la motivación y la comunicación de los involucrados.
              p.mb-0.mt-4 #[strong Control:] consiste en que la organización logre tener el seguimiento y verificación de las anteriores etapas, de manera continua. 
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_2 1.2 Las pymes y la planificación estratégica
    
    .row
      .col-lg-3.col-md-5.mb-4.mb-md-0(data-aos="fade-right" style="place-self:center;")
        figure.col-7.m-auto.col-md-12
          img(src="@/assets/curso/tema1/5.svg")
      .col-lg-9.col-md-6(data-aos="fade-left" style="place-self:center;")
        p Para las pequeñas y medianas empresas, la planificación estratégica, consiste en tener un orden cronológico de las actividades a realizar, sin necesidad de implementar grandes sistemas o aplicativos para tal fin, es importante que los responsables de las actividades y tareas tengan claridad de estas, con sus responsabilidades y alcances para que sean acordes a los resultados que se obtienen. 
    
    p.mt-5(data-aos="fade-right") Existen cuatro tipos de planificación organizacional:
    
    TabsA.color-acento-contenido.mt-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones.p-4(titulo="Planificación organizacional <br> estratégica" style="background-color:#EFFBE1;")
        .row
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            p Consiste en desarrollar un plan de atención general para todas las áreas de una empresa. La formulación de objetivos se realiza en base a un periodo de tiempo y procura que dichos objetivos están adaptados con los valores empresariales, además de la visión y la misión.
            p.mt-3.mb-0 Generalmente, este tipo de planificación organizacional es hecha por altos ejecutivos o los líderes de la empresa.
          .col-lg-4(style="place-self:center;")
            figure.m-auto.col-8.col-lg-12.col-md-6
              img(src="@/assets/curso/tema1/6.png")
        .col-auto.mt-4
          a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
            span Planeación estratégica
            .indicador--click(v-if="mostrarIndicador2")
      .tarjeta.color-acento-botones.p-4(titulo="Planificación organizacional <br> táctica" style="background-color:#EFFBE1;")
        .row
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            p Describe la manera en que una compañía va a aplicar su plan estratégico. Sin embargo, este es más específico y se establece por algunos objetivos a corto plazo que apoyan al plan estratégico, su duración de acción y ejecución es de aproximadamente entre un año o menos.
            p.mt-3.mb-0 El plan táctico suele ser orientado por los gerentes de cada área que dan supervisión aquellos objetivos a corto plazo.
          .col-lg-4(style="place-self:center;")
            figure.m-auto.col-8.col-lg-12.col-md-6
              img(src="@/assets/curso/tema1/9.png")
        .col-auto.mt-4
          a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
            span Planeación Táctica
            .indicador--click(v-if="mostrarIndicador3")
      .tarjeta.color-acento-botones.p-4(titulo="Planificación organizacional <br> operacional" style="background-color:#EFFBE1;")
        .row
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            p.mb-0 Es la visión y el control de los aspectos diarios en la planificación organizacional. Se conforma por labores que se realizan a diario como actividades de operación, normativa de trabajo, horarios, cumplimiento de políticas y estándares empresariales, así mismo de asegurar que las responsabilidades, funciones y tareas se lleven a cabo de manera eficaz.
          .col-lg-4(style="place-self:center;")
            figure.m-auto.col-8.col-lg-12.col-md-6
              img(src="@/assets/curso/tema1/11.png")
        .col-auto.mt-4
          a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
            span Planeación operacional
            .indicador--click(v-if="mostrarIndicador4")
      .tarjeta.color-acento-botones.p-4(titulo="Planificación organizacional <br> de contingencia" style="background-color:#EFFBE1;")
        .row
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            p Se utiliza de forma esporádica, en especial cuando surgen imprevistos, crisis o escenarios inusuales. Es un plan estructurado y funcional que compone una serie de retos o desafíos en el cual, se debería proceder si una situación inesperada ocurre. 
            p.mt-3.mb-0 A pesar de que las empresas consideren que es un plan que nunca van a utilizar, es esencial contar con este.
          .col-lg-4(style="place-self:center;")
            figure.m-auto.col-8.col-lg-12.col-md-6
              img(src="@/assets/curso/tema1/13.png")
        .col-auto.mt-4
          a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
            span Planeación contingencia
            .indicador--click(v-if="mostrarIndicador5")

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        figure
          img(src="@/assets/curso/tema1/8.svg")
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        figure
          img(src="@/assets/curso/tema1/10.svg")
    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        figure
          img(src="@/assets/curso/tema1/12.svg")
    ModalA(:abrir-modal.sync="modal4")
      .row.align-items-center
        figure
          img(src="@/assets/curso/tema1/14.svg")




      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicador2: true,
    modal1: false,
    mostrarIndicador3: true,
    modal2: false,
    mostrarIndicador4: true,
    modal3: false,
    mostrarIndicador5: true,
    modal4: false,
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
.cont_data
  opacity: 0
  max-height: 0
  overflow: hidden
  transition: all .8s ease-in-out
.cont_hide:hover i.fas.fa-chevron-up
  opacity: 0 !important
  visibility: hidden !important
  position: absolute !important
.cont_hide:hover i.fas.fa-chevron-down
  opacity: 1 !important
.cont_hide:hover .cont_data
  opacity: 1 !important
  max-height: 500px !important
</style>
