<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p(data-aos="fade-right") Para cualquier organización, empresa o pyme, es importante conocer los clientes, sus necesidades, sus gustos, reacciones frente a diferentes estímulos, entre otras cosas, por lo que es importante conocer y manejar el CRM, sus conceptos, tipos, con el fin de que el acercamiento con el cliente sea mayor. De igual manera es muy necesario involucrar todos estos conocimientos en el plan estratégico de la pyme y conjugarlo con el comercio electrónico, los contenidos digitales, indicadores y todo lo que permita lograr un desarrollo comercial exitoso para las Pyme’s.
    p.mt-4.mb-5(data-aos="fade-left") Por lo anterior el presente componente formativo abordo todos estos aspectos en los temas que se resumen en el mapa conceptual que se expone a continuación:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
