<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Implementación de proceso de entrega continua automatizada
    figure
      img(src="@/assets/template/tema-2-1.svg" alt="Texto que describa la imagen")
    p.mt-4 Para esta implementación continua, la producción tiene lugar de manera automática, es decir, no hay una aprobación explícita, por lo que su entrega continua automatiza todo el proceso de publicación de software. A continuación, se describen las actividades requeridas para que el proceso de actualización en el repositorio del servidor web se realice cada vez que el equipo de desarrollo confirme una nueva versión en el repositorio central. 
    figure.mt-5
      img(src="@/assets/template/tema-1-2.svg" alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-8
        p Para la realización de esta implementación se requiere utilizar un archivo de extensión YML, lo que representa un archivo de configuración en formato YAML, que es un formato especial de serialización de datos para transferir información a través de redes o Internet, tal como lo hacen otros formatos comunes como JSON o XML.
        p.mt-3 YAML no es un lenguaje de marcado (YAML Ain`t Markup Language) realmente es un archivo en texto plano, cuya ventaja es su legibilidad, capacidad de escritura y compatibilidad con diferentes tipos de datos de tipo escalar y colecciones #[strong (Ghimire, 2021).] 
        p.mt-3 Según #[strong Fileinfo.com (2021)] los archivos de extensión YML pueden ser fácilmente incorporados en programas escritos en los lenguajes de programación más populares como son C/C++, Ruby, Python, Java, Perl, C#, PHP, entre otros. 
      .col-4.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-2-2.png" alt="Texto que describa la imagen")
      p.mt-4 A continuación, podrá conocer cómo se debe crear el archivo #[strong .gitlab-ci.yml] dentro del mismo directorio del ambiente de desarrollo para que sea enviado en un push al repositorio central. 
    .row.mt-5
      .col-10.offset-1
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/template/tema-2-3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .row
                    .col-3.col-sm-2.col-lg-1
                      figure
                        img(src="@/assets/template/tema-1-4.svg")
                    .col.px-0.pt-3
                      p Conozca el proceso para instalar el repositorio central para GitLab.
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Repositorio_central_gitlab.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


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

<style lang="sass" scoped></style>
