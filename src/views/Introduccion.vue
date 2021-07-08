<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure
      img(src="@/assets/template/tema-0-1.png" alt="Texto que describa la imagen")
    .row.mt-5 
      .col-12.col-lg-8
        p La entrega continua es una práctica complementaria a la integración continua, ya que permite colocar en entornos de preproducción un proyecto que previamente se encuentra registrado y verificado en un repositorio central, generalmente por medio de un sistema de control de versiones.
        p Lo que se busca con la implementación de esta práctica es disminuir los tiempos que se requieren para llevar un fragmento de código construido por el equipo de desarrollo a un entorno en el cual pueda ser probado por el personal encargado de pruebas, en un ambiente que simula el mismo espacio de producción y potencialmente la posibilidad de tener una versión del servicio o producto para ser desplegado y entregado a un cliente final.
      .col-4.col-lg-4.offset-4.offset-lg-0.align-self-center
        figure
            img(src="@/assets/template/tema-0-2.svg" alt="Texto que describa la imagen")
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
