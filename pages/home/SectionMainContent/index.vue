<template>
  <section>
    <article
      id="siteTitleSection"
      class="vh-100 w-100 flex items-center justify-start w-100 bg-light-gray relative z-1"
      data-scroll-section
    >
      <div
        class="black ph3 animatedHeading"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="-11"
        data-scroll-position="top"
      >
        <h1
          class="tl animatedHeadingLine"
          data-scroll
          data-scroll-class="selfRotate"
          data-splitting="chars"
          data-scroll-repeat="true"
        >
          {{ $t('hero') }}
        </h1>
      </div>
    </article>
    <article
      id="secondSection"
      class="w-100 flex flex-wrap items-center justify-between bg-white relative z-2 pv4 br3"
      data-scroll-section
    >
      <div class="w-100 w-100-m w-33-ns tl black ph3">
        <div
          class="br3 pa4 mb2 dib black bg-light-gray vh-100 flex items-start"
        >
          <h3>
            {{ $t('column_one') }}
          </h3>
        </div>
      </div>
      <div class="w-100 w-100-m w-33-ns tl black ph3">
        <div
          class="br3 pa4 mb2 dib black bg-light-gray vh-100 flex items-start"
        >
          <h3>
            {{ $t('column_two') }}
          </h3>
        </div>
      </div>
      <div class="w-100 w-100-m w-33-ns tl black ph3">
        <div
          class="br3 pa4 mb2 dib black bg-light-gray vh-100 flex items-start"
        >
          <h3>
            {{ $t('column_three') }}
          </h3>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
#secondSection {
  min-height: 100vh;
}
</style>
