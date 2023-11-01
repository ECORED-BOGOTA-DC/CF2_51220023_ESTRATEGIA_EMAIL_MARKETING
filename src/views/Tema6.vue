<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Analítica web y reportes de métricas
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema6/1.svg" alt="Imagen decorativa")
      .col(data-aos="fade-left")
        p.mb-0 Actualmente, las herramientas de medición y analítica permiten realizar soporte en investigaciones a niveles cualitativos y analizar información de archivos (desde imágenes, audios, documentos e incluso videos). Para que una estrategia de #[em marketing] sea eficiente y se logre obtener el mejor provecho de ella, es indispensable analizar el tráfico de personas a nuestras páginas.
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Figura 5.
      span Analítica web
    
    .col-xl-8.col-lg-10.m-auto.mt-5(data-aos="zoom-in-up")
      figure
        img(src="@/assets/curso/tema6/2.svg" alt="Figura que ejemplifica la analítica web a través de un proceso, el cual muestra su rendimiento a través de datos medibles, como el performance y balance, entre otros aspectos.")
      figcaption.fw-normal.mt-2(style="background-color:#E8E8E8;") #[strong Nota.] Pinterest (2022)
    
    .row.mt-5
      .col-lg-4.mb-4.mb-md-0.col-md-6(data-aos="fade-right")
        figure.m-auto.col-7.col-md-12
          img(src="@/assets/curso/tema6/3.png" alt="Imagen decorativa")
      .col-lg-8.col-md-6(data-aos="fade-left")
        p  Las herramientas como Google Ads proporcionan informes altamente detallados de la evolución de una campaña, de manera que se logre saber qué está pasando con el anuncio en cualquier instante. Esta herramienta de creación y seguimiento de campañas SEM, se conecta con Google Analytics, la cual permite monitorear las visitas a las diferentes páginas o sitios web. Este monitoreo en tiempo real permite dar seguimiento continuo y actualizado de las campañas, y así, realizar cambios en cualquier momento para ajustar parámetros dependiendo de la trazabilidad y las conversiones que se logren.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_6_1 6.1. Concepto de analítica
    
    .cont_6_1.pt-5
      p(data-aos="fade-right") En el siguiente video se puede apreciar el concepto y aplicación de analítica:
      figure.mt-5(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_6_2 6.2 Indicadores y KPI’s

    .row
      .col-lg-8.col-md-6.mb-4.mb-md-0(data-aos="fade-right" style="place-self:center;")
        p La principal diferencia entre el #[em marketing] digital y el tradicional es que el primero cuenta con eficientes y exactas posibilidades de medición, por ello es indispensable que se definan claramente los indicadores KPI y las metas que logren precisar el éxito en las estrategias de mercadeo.
        p.mt-4 Los indicadores se dividen en: KPI en Gestión y Comunidad, KPI en Interacción y Alcance y KPI en Conversión y Resultado. En los KPI en gestión y comunidad se encuentran los fans y seguidores, en los de interacción y alcance están los me gusta, comentarios, etc, y en los de conversión y resultado encontramos el ROI (Retorno a la inversión), el CPA (Costo por adquisición), entre otros.
      .col-lg-4.col-md-6(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-12
          img(src="@/assets/curso/tema6/4.png" alt="Imagen decorativa")
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Figura 6.
      span  Indicadores en RRSS (Redes sociales)
    
    .col-xl-8.col-lg-10.m-auto.mt-5(data-aos="zoom-in-up")
      figure
        img(src="@/assets/curso/tema6/5.svg" alt="Figura que representa los indicadores en RRSS; es decir, en las redes sociales. Dichos indicadores son: KPI Conversión y Resultado. KPI Interacción y Alcance. KPI Comunidad y Gestión. Lo que contiene cada KPI se indica debajo de la imagen.")
      figcaption.fw-normal.mt-2(style="background-color:#E8E8E8;") #[strong Nota.] JuanCMejia (2020) 

    p.mt-5(data-aos="fade-right") De los KPI por conversión y resultado, es importante detallar cada uno como sigue:

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Tabla 4.
      span KPI
    
    .col-xl-10.m-auto.mt-5.m-auto
      .tabla-a.color-acento-botones(data-aos="flip-up") 
        table
          thead(style="border:0;")
            tr(style="background-color:#0050DB;")
              th.text-white.text-center KPI
              th.text-white.text-center Definición
              th.text-white.text-center Describe
          tbody
            tr
              td.p-4 CTR
              td.p-4 Click Through Rate
              td.p-4 (Número de clics en los últimos 28 días / total impresiones en ese periodo) x 100
            tr
              td.p-4 %CNV
              td.p-4 Porcentaje de conversión
              td.p-4 (Número de conversión en el sitio web logradas por visitantes de redes sociales en los últimos 28 días / total visitantes al sitio web desde redes sociales en ese periodo) x100
            tr
              td.p-4 CLP
              td.p-4 Cost per Lead
              td.p-4 (Costo de la campaña en redes sociales / total de clientes potenciales logrados por la campaña de redes sociales en ese periodo) x 100
            tr
              td.p-4 CPA
              td.p-4 Cost per Acquisition
              td.p-4 (Costo de la campaña en redes sociales / total de compradores logrados por la campaña de redes sociales en ese periodo) x 100
            tr
              td.p-4 ROI
              td.p-4 Return Of Investment
              td.p-4 ((Beneficios de la campaña en redes sociales - Costo de la campaña en redes sociales) / Costo de la campaña en redes sociales) x 100
    
    .row.mt-5
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema6/6.svg" alt="Imagen decorativa")
      .col(data-aos="fade-left")
        p.mb-0 Con las fórmulas anteriores, se puede observar la forma a evaluar y saber qué tan eficiente puede ser la campaña o el anuncio que está siendo publicado en los diferentes medios digitales. Sin embargo, es importante tener en cuenta el constante cambio en los algoritmos de las RRSS, blog, motores de búsqueda, etc, para el replanteamiento de la forma a calcular los KPI.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_6_3 6.3 Reportes de métricas
  
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Facebook, Instagram y TikTok son tres de las herramientas más populares donde se publican cada segundo innumerables piezas de contenidos digitales, en ellas se pueden apreciar las tendencias, calidad y creatividad. Es una “guerra” constante por captar la atención de millones de usuarios que se monetizan de acuerdo a la interacción o conversión que pueda tener con el contenido publicado.
        p.mt-4 Por otro lado, el orden en que son visualizados los resultados en el buscador es lo que determina el posicionamiento web, y en la actualidad es vital para tener éxito en la empresa. Cada segundo, miles de millones de usuarios digitan en los buscadores sus intereses, y son los buscadores que se basan en algoritmos especializados, los que ofrecen diferentes alternativas. Si la marca, el producto o la empresa no figura entre las primeras opciones, prácticamente será invisible para los usuarios, mientras que, el aparecer en las primeras posiciones traducirá en un aumento considerable de las visitas a la web y en el aumento de visibilidad que repercute en ventas, principal objetivo de las empresas.
        .cajon.mt-4.p-4.color-primario(style="background-color:#CCEEFF;")
          p.mb-0 De este modo, para mejorar el posicionamiento web, con el objeto de mejorar la presencia en los buscadores, existen una serie de técnicas que optimizan el uso e incrementan la relevancia y visibilidad del sitio. Las técnicas tienen como objetivos principales obtener un incremento del tráfico a la web y, mejorar la visibilidad de esta.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema6/7.png" alt="Imagen decorativa")
    
    br
    .mt-5.p-3.mb-5(style="max-width:fit-content;background-color:#94E435;border-radius:0px 60px 60px 0px;position:relative;" data-aos="fade-right")
      div(style="width:50px;height:12px;background-color:#FF3E72;border-radius:60px;position:absolute;top:-5px;")
      div(style="width:15px;height:15px;background-color:#FFC401;border-radius:100%;position:absolute;top:-12px;left:40px;")
      div(style="width:40px;height:10px;background-color:#0050DB;border-radius:60px;position:absolute;bottom:-3px;right:30px;")
      h4.mb-0.pe-4.ps-3 SEO (Optimización de motores de búsqueda)
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 7.
      span SEO
    .col-xl-8.col-lg-10.m-auto.mt-5(data-aos="zoom-in-up")
      figure
        img(src="@/assets/curso/tema6/8.svg" alt="Figura que representa el proceso SEO, el cual consta de on page y off page.")
      figcaption.fw-normal.mt-2(style="background-color:#E8E8E8;") #[strong Nota.] Iebschool (2022)
    
    p.mt-5(data-aos="fade-right") Se refiere a todas aquellas acciones, estrategias y técnicas de optimización de posicionamiento que se hacen en un sitio web para aparecer orgánicamente (no pago) en los buscadores (Google, Yahoo, Bing). Con la estrategia SEO no se realiza ningún pago a las empresas dueñas de los motores de búsqueda, y se puede lograr incrementos significativos en el tráfico y la visibilidad de las marcas en Internet. Son los contenidos los que se ganan esos lugares por derecho propio.
    p.mt-4(data-aos="fade-left") El SEO presenta características importantes que se deben tener en cuenta:

    .row.mt-5.justify-content-center
      .col-lg-6.col-xl-4.mb-4.mb-xl-0.col-md-10
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false" data-aos="zoom-in-up")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.pb-0.d-flex.align-content-end.flex-wrap
              h5.mt-4.text-center.w-100.mb-3(style="color:#12263F;") El SEO es medible
              figure.col-lg-5.m-auto.col-md-6.col-lg-8.col-12.col-xl-12
                img(src="@/assets/curso/tema6/9.svg" alt="Imagen decorativa")
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#B2E5FF;")
              figure
                img(src="@/assets/curso/tema6/10.svg" style="max-width:70px;" alt="Imagen decorativa")
              h5.mt-4(style="color:#12263F;") El SEO es medible
              p.mt-4(style="color:#12263F;") Lo cual implica poder conocer en todo momento cuáles son las palabras clave y expresiones que están consiguiendo posicionar nuestro sitio web en las primeras posiciones del buscador y cuáles transforman mejor una visita en una conversión.
      .col-lg-6.col-xl-4.mb-4.mb-xl-0.col-md-10
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false" data-aos="zoom-in-up")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.pb-0.d-flex.align-content-end.flex-wrap
              h5.mt-4.text-center.w-100.mb-3(style="color:#12263F;") El SEO suele ser lento de conseguir
              figure.col-lg-5.m-auto.col-md-6.col-lg-8.col-12.col-xl-12
                img(src="@/assets/curso/tema6/11.svg" alt="Imagen decorativa")
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#CCE4AF;")
              figure
                img(src="@/assets/curso/tema6/12.svg" style="max-width:70px;" alt="Imagen decorativa")
              h5.mt-4(style="color:#12263F;") El SEO suele ser lento de conseguir
              p.mt-4(style="color:#12263F;") Por lo que es importante dedicarle tiempo y diseñar una buena campaña que reporte unos resultados acordes a los objetivos que pretende lograr la empresa.
      .col-lg-6.col-xl-4.mb-4.mb-xl-0.col-md-10
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false" data-aos="zoom-in-up")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.pb-0.d-flex.align-content-end.flex-wrap
              h5.mt-4.text-center.w-100.mb-3.text-white El SEO es dinámico
              figure.col-lg-5.m-auto.col-md-6.col-lg-8.col-12.col-xl-12
                img(src="@/assets/curso/tema6/13.svg" alt="Imagen decorativa")
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#9FB7E1;")
              figure
                img(src="@/assets/curso/tema6/14.svg" style="max-width:70px;" alt="Imagen decorativa")
              h5.mt-4(style="color:#12263F;") El SEO es dinámico
              p.mt-4(style="color:#12263F;") Un día podemos estar en las primeras posiciones, pero al día siguiente descender nuestra visibilidad. Esto puede ser debido al incremento de la competencia, al uso inadecuado de las páginas de nuestras webs o incluso a cambios en los algoritmos de los buscadores. 
    
    p.mt-5(data-aos="fade-right") El objetivo es implementar un conjunto de estrategias para que el sitio sea rastreado por los motores de búsqueda, indexado correctamente y suficientemente relevante para que algunas o muchas de las páginas sean mostradas en las primeras posiciones de los buscadores para determinadas consultas de búsqueda de los usuarios. Algunas estrategias y plataformas para tal fin son: 

    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="SEM (<em>Marketing</em> en motores de búsqueda)" :icono="require('@/assets/curso/tema6/15.svg')")
        .col-xl-11.m-auto
          .row
            .col-md-6.col-lg-8.mb-4.mb-md-0
              p Hace referencia a las estrategias que incluyen la utilización de anuncios pagos. Con una estrategia SEM se crean campañas publicitarias y cada vez que un usuario digite la búsqueda, en el buscador el sitio aparece antes que los resultados orgánicos en forma de anuncio, siempre y cuando coincida con el interés de búsqueda del usuario.
              p.mt-4 Las campañas SEM, son una forma rápida, económica y eficaz de hacer publicidad, conseguir clientes potenciales y generar ventas. Esta técnica es muy usada debido a que ofrece resultados inmediatos (la página de la empresa aparecerá en los buscadores de un día para otro, obteniendo visitas rápidamente).
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema6/18.png' alt="Imagen que representa al SEM, lo cual incluye aspectos como: Buscadores, marketing, grupos target, contenidos, enlaces y ranking.")
          a.boton.color-acento-botones.indicador__container.mt-4.ps-5.pe-5(@click="modal1 = true")
            span.fw-bold SEM
            .indicador--click(v-if="mostrarIndicador")
      .py-4.py-md-5(titulo="Segmentación del público objetivo" :icono="require('@/assets/curso/tema6/16.svg')")
        .col-xl-11.m-auto
          .row
            .col-md-6.col-lg-8.mb-4.mb-md-0
              p El objetivo de toda empresa en la era actual es masificar su marca, producto o servicio. Gracias a las herramientas del #[em marketing] digital esta labor puede ser un poco más fácil debido al alcance y penetración en la audiencia. La cantidad de Me Gusta o Me Encanta en la Fan Page de Facebook, o los suscriptores en Twitter, o los seguidores en Instagram cobran importancia porque indica la aceptación de la empresa u oferta que es presentada.
              p.mt-4 En la actualidad, existen plataformas que ayudan a las empresas a masificarse, conseguir clientes y, por consiguiente, aumentar sus ventas, siempre teniendo en cuenta los reportes estadísticos que generan estas plataformas con el propósito de ir mejorando la segmentación del público objetivo.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema6/20.png' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Segmentación del público objetivo" :icono="require('@/assets/curso/tema6/17.svg')")
        .col-xl-11.m-auto
          .row
            .col-md-6.col-lg-8.mb-4.mb-md-0
              p Esta plataforma es fundamental en el momento de crear cualquier campaña publicitaria. Con la adquisición de Instagram y WhatsApp por medio del dueño y creador de Facebook, se han ido actualizando diversas funciones que hacen a esta plataforma muy apetecida por los empresarios.
              p.mt-4 Al crear un #[em Fan Page] en Facebook, nos da la opción de integrar un botón de llamado a la acción y este botón puede configurarse para que con tan solo un Clic, nos lleve a la App de WhatsApp y generar una conversación más personalizada empresario-cliente, pero si lugar a dudas, lo más importante es la facilidad de crear una campaña publicitaria segmentado los clientes por edad, sexo, gustos y hasta nivel de escolaridad, con la opción del centro de anuncios.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema6/21.png' alt="Imagen decorativa")
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        figure
          img(src="@/assets/curso/tema6/19.svg" alt="Imagen decorativa")
  





      
</template>

<script>
export default {
  name: 'Tema6',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
    modal1: false,
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
.cont_6_1, .cont_6_1 *
  position: relative
.cont_6_1:before
  content: ''
  background-color: #EAFAD6
  position: absolute
  width: 125%
  left: -15%
  height: 50%
  top: 0
.tabs-b__tab
  background-color: #E5F6FF
  border-right: 2px solid #00A9FF
  border-bottom: 0px
.tabs-b.color-acento-contenido .tabs-b__tab--active
  background-color: #fff
</style>
