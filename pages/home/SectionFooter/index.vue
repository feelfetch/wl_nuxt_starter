<template>
  <section
    id="colophon"
    class="site-footer ph3 pv6 bg-light-gray"
    data-scroll-section
  >
    <div
      class="footerContainer flex flex-wrap items-center justify-between"
      data-scroll
      data-scroll-target="#colophon"
      data-scroll-direction="vertical"
      data-scroll-speed="-8"
      data-scroll-position="bottom"
    >
      <div
        class="w-100 w-100-m w-50-ns flex items-center flex-wrap justify-start pv2 lazyload"
      >
        <a
          v-shortkey.push="['meta', 't']"
          href="https://twitter.com/wrdlssclub"
          class="mv1 siteTitle link br3 ph3 pv2 dib black bg-white mr3"
          target="_blank"
          @shortkey="gotoTwitter()"
          >Twitter</a
        >
        <a
          v-shortkey.push="['meta', 'g']"
          href="https://github.com/WRDLSS"
          class="mv1 link br3 ph3 pv2 dib black bg-white mr3"
          target="_blank"
          @shortkey="gotoGithub()"
          >Github</a
        >
        <a
          v-shortkey.push="['meta', 'c']"
          href="mailto:desk@wrdlss.club"
          class="mv1 link br3 ph3 pv2 dib black bg-white"
          @shortkey="sendEmail()"
          >{{ $t('get_in_touch') }}</a
        >
      </div>
      <div
        class="w-100 w-100-m w-50-ns flex items-center justify-start-m justify-end-ns pv2 lazyload"
        data-scroll
        data-scroll-class="appear"
        data-scroll-call="itemAnimation"
        data-scroll-repeat="true"
      >
        <a
          v-shortkey.push="['meta', 'b']"
          href="https://bit.ly/3sY5lM4"
          class="mv1 link br3 ph3 pv2 dib white bg-black"
          target="_blank"
          @shortkey="gotoLicense()"
          >MIT</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    gotoTwitter() {
      window.open('https://twitter.com/wrdlssclub')
      // this.$toast.show('META + T').goAway(1500)
    },
    gotoGithub() {
      window.open('https://github.com/wrdlss')
      // this.$toast.show('META + G').goAway(1500)
    },
    sendEmail() {
      window.open('mailto:desk@wrdlss.club')
      // this.$toast.show('META + C').goAway(1500)
    },
    gotoLicense() {
      window.open('https://bit.ly/3sY5lM4')
      // this.$toast.show('META + B').goAway(1500)
    }
  }
}
</script>

<style scoped></style>
