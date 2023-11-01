<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 El CRM y la relación con el cliente
    
    p(data-aos="fade-right") El contacto con el cliente y el seguimiento siempre será primordial para cualquier empresa, por ello se hace necesaria la existencia de múltiples técnicas para la predicción de datos, que le permitan conocer situaciones o tendencias de los clientes. 
    p.mt-4(data-aos="fade-left") A continuación, en el siguiente video se menciona el concepto de CRM no solo como un software o aplicativo sino como proceso:

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background: linear-gradient(180deg, rgba(0,169,255,1) 0%, rgba(0,80,219,1) 100%);border-radius:10px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema2/1.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4.mb-0.text-white Customer Relationship Management (CRM)
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=G5SZHCsYEcU" target="_blank")
              span Enlace web
              i.fas.fa-link
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Para gestionar este proceso, muchas empresas usan aplicaciones especializadas para esta misión, algunas pymes  que tienen recursos limitados optan por el uso de sistemas de análisis #[em open source]; entre las herramientas más destacadas se encuentran: #[strong Microsoft Decision, Trees Algorithm, Microsoft Naive Bayes Algorithm o Microsoft Clustering Algorithm, pertenecientes a Microsoft.]
        p.mt-4 Por otra parte, existen los CRM (Customer Relationship Management), sistemas de información más especializados, que hacen referencia a las estrategias, prácticas, y tecnologías enfocadas en las relaciones con los clientes. Con el CRM las empresas administran y analizan el comportamiento del cliente, que permiten anticiparse a las necesidades de éstos, optimizando la rentabilidad, y aumentando las ventas.
        p.mt-4 Con el siguiente video, podemos complementar todos los beneficios de la aplicación del CRM:
        .m-auto.mt-4
          .p-4(data-aos="flip-up" style="background: linear-gradient(180deg, rgba(0,169,255,1) 0%, rgba(0,80,219,1) 100%);border-radius:10px;")
            .row.m-0
              .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
                figure.text-center
                  img(src="@/assets/curso/tema2/2.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
              .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
                h4.mb-0.text-white Beneficios del CRM
              .col-lg-3.col-md-3.text-center(style="place-self:center;")
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=PF_yA02FGIM" target="_blank")
                  span Enlace web
                  i.fas.fa-link
      .col-lg-4(data-aos="fade-left")
        figure.col-lg-12.col-md-6.col-7.m-auto
          img(src="@/assets/curso/tema2/3.svg" alt="Imagen decorativa")
    
    .row.mt-5.p-4(style="background-color:#DFF7C2;" data-aos="zoom-in")
      .col-lg-4.col-md-6.mb-4.mb-md-0(data-aos="fade-right" style="place-self:center;")
        figure.col-lg-12.col-md-12.col-7.m-auto
          img(src="@/assets/curso/tema2/4.svg" alt="Imagen decorativa")
      .col-lg-8.col-md-6(data-aos="fade-left" style="place-self:center;")
        p Con los CRM se pueden crear:
        ul.lista-ul.mt-4.mb-0
          li.d-flex
            i.fas.fa-check(style="color:#0050DB;")
            | Equipos de ventas, para volver más eficientes las actividades.
          li.d-flex
            i.fas.fa-check(style="color:#0050DB;")
            | Administradores de áreas específicas.
          li.d-flex
            i.fas.fa-check(style="color:#0050DB;")
            | Listas de clientes por grupos, según la caracterización que defina la compañía.
          li.d-flex
            i.fas.fa-check(style="color:#0050DB;")
            | Asignación de tareas por sectores o áreas. 
          li.d-flex.mb-0
            i.fas.fa-check(style="color:#0050DB;")
            | Asignar a los miembros de los equipos sus acciones puntuales.
    
    p.mt-5(data-aos="fade-right") Todo lo anterior hace que el CRM facilite el seguimiento, los cierres de ventas y la fidelización de los clientes.
    p.mt-4(data-aos="fade-left") En la siguiente figura, se pueden apreciar los usos de los CRM.

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Figura 2.
      span Usos de los CRM
    
    .col-xl-8.m-auto.mt-4.col-lg-10(data-aos="zoom-in-up")
      .p-4.p-lg-5(style="background-color:#EAFAD6;")
        figure.col-xl-8.m-auto.col-lg-10
          img(src="@/assets/curso/tema2/5.svg" alt="Figura que relaciona los usos de los CRM, los cuales son: Rendimiento de vendedores. Meta de vendedores. Historial de conversaciones. Recordatorios. Priorización de cotizaciones. Lista unificada de contactos.")
      figcaption.fw-normal.mt-2(style="background-color:#E8E8E8;") #[strong Nota.] IFICORP (2022)

    p.mt-5(data-aos="fade-right") A continuación se presenta un paso a paso como ejemplo, para explicar la gestión de base de datos de clientes mediante el proceso CRM:

    .row.mt-5
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/6.svg" alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Primer paso")
            .col-lg-8.col-md-6.mb-4.mb-md-0
              p Importar una base de datos de clientes, sea en archivo de texto plano (.csv) o Excel (.xlsx) 
            .col-lg-4.col-md-6
              figure.m-auto.col-8.col-md-12
                img(src="@/assets/curso/tema2/7.png" alt="Imagen decorativa")
          .row(numero="2" titulo="Segundo paso")
            .col-lg-8.col-md-6.mb-4.mb-md-0
              p El CRM crea una lista tomando los datos de cada registro (nombre, apellido, teléfono, ciudad, etc.)
            .col-lg-4.col-md-6
              figure.m-auto.col-8.col-md-12
                img(src="@/assets/curso/tema2/8.png" alt="Imagen decorativa")
          .row(numero="3" titulo="Tercer paso")
            .col-lg-8.col-md-6.mb-4.mb-md-0
              p En cada registro se genera una tarjeta con toda la información pertinente al contacto o cliente.
            .col-lg-4.col-md-6
              figure.m-auto.col-8.col-md-12
                img(src="@/assets/curso/tema2/9.png" alt="Imagen decorativa")
          .row(numero="4" titulo="Cuarto paso")
            .col-lg-8.col-md-6.mb-4.mb-md-0
              p Del mismo modo, se puede importar la lista de los colaboradores o gestores de ventas, creando así el equipo de la organización encargados de la información y seguimiento de cada cliente. 
            .col-lg-4.col-md-6
              figure.m-auto.col-8.col-md-12
                img(src="@/assets/curso/tema2/10.png" alt="Imagen decorativa")
          .row(numero="5" titulo="Quinto paso")
            .col-lg-8.col-md-6.mb-4.mb-md-0
              p Una vez creada la lista de equipo de trabajo y de clientes, cada miembro del equipo se hace responsable de los contactos que le sean asignados.
            .col-lg-4.col-md-6
              figure.m-auto.col-8.col-md-12
                img(src="@/assets/curso/tema2/11.png" alt="Imagen decorativa")
          .row(numero="6" titulo="Sexto paso")
            .col-lg-8.col-md-6.mb-4.mb-md-0
              p Finalmente, el administrador de la plataforma tendrá en tiempo real la información del seguimiento de cada cliente y las responsabilidades cumplidas por medio de reportes que se generan en periodicidades programadas.
            .col-lg-4.col-md-6
              figure.m-auto.col-8.col-md-12
                img(src="@/assets/curso/tema2/12.png" alt="Imagen decorativa")

    p.mt-5(data-aos="fade-right") La siguiente imagen es un ejemplo de un tablero de gestión con un CRM:

    .col-xl-10.m-auto.mt-4(data-aos="zoom-in-up")
      figure
        img(src="@/assets/curso/tema2/13.svg" alt="Imagen que muestra un ejemplo de un tablero de gestión con un CRM, en el cual se relacionan las diferentes acciones presentes en este, como cambio de estados de cada tarjeta y avance de estas, entre otros aspectos.")
      figcaption.fw-normal.mt-2(style="background-color:#E8E8E8;") #[strong Nota.] Fondeopyme (2022)










      
</template>

<script>
export default {
  name: 'Tema2',
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
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #BFE9FF
.linea-tiempo-d.color-primario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #BFE9FF
.linea-tiempo-d.color-primario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number span
  color: #12263F
.linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #f6f6f6
</style>
