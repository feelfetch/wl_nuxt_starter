<template>
  <div id="__default">
    <header
      id="masthead"
      class="site-header top-0 w-100 z-4 pv4 ph3 flex justify-between"
      data-direction
    >
      <div class="flex items-center justify-start">
        <NuxtLink
          to="/"
          class="mv0 siteTitle br3 ph3 pv2 mb2 dib light-gray bg-black mr3 no-underline"
          data-svg-title
          >WL Starter</NuxtLink
        >
        <p
          v-shortkey="['meta', 'k']"
          class="mv0 siteTitle br3 ph3 pv2 mb2 dib light-gray bg-black mr3 cmdK"
          data-svg-title
          @shortkey="
            ;(showModal = true),
              $toast
                .show('META + K', {
                  action: {
                    text: '╳',
                    class: 'wlToastAction',
                    onClick: (e, toastObject) => {
                      toastObject.goAway(0)
                    }
                  }
                })
                .goAway(2000)
          "
          @click="showModal = true"
        >
          Info
        </p>
      </div>

      <NuxtLink
        v-for="locale of availableLocales"
        :key="locale.code"
        class="mv0 siteTitle br3 ph3 pv2 mb2 dib black bg-light-gray ba no-underline"
        :to="switchLocalePath(locale.code)"
        @click.prevent.stop="$i18n.setLocale(locale.code)"
        >{{ locale.name }}</NuxtLink
      >
    </header>
    <Nuxt />
    <Modal v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import { canonical, facebook, twitter, appLdJson } from '~/utils/getHeadData'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Modal
  },

  data() {
    return {
      showModal: false
    }
  },

  head() {
    const { path } = this.$route
    this.$nuxtI18nHead({ addSeoAttributes: true })

    return {
      meta: [...facebook(path), ...twitter()],

      link: [...canonical(path)],

      script: [...appLdJson(path)]
    }
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
