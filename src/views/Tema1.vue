<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Implementación de integración continua y entrega continua básica
    figure
      img(src="@/assets/template/tema-1-1.png" alt="Texto que describa la imagen")
    p.mt-4 Esta implementación se define como la creación de aplicaciones reales en la nube. A continuación, se explica a través de un ejemplo la implementación de esta integración usando el servidor web Apache2, Git y GitLab. Este es un proceso similar para cualquier servidor, sistema de integración y entrega continua. 
    figure.mt-5
      img(src="@/assets/template/tema-1-2.svg" alt="Texto que describa la imagen")
    p.mt-5 Para complementar este proceso de implementación es importante conocer el proceso de instalación de GitLab, el cual se realizará en un equipo que servirá para la integración y entrega continua, para este caso particular se utilizará un contenedor de Docker corriendo sobre un equipo con sistema operativo Linux en la distribución de Ubuntu, que se está ejecutando por medio de una máquina virtual en VirtualBox.
    .row.mt-5
      .col-10.offset-1
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/template/tema-1-3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .row
                    .col-3.col-sm-2.col-lg-1
                      figure
                        img(src="@/assets/template/tema-1-4.svg")
                    .col.px-0.pt-3
                      p Conozca el proceso para instalar GitLab 
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Instalacion_GitLab.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
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

<style lang="sass" scoped></style>
