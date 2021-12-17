<template>
  <div id="app">
    <main>
      <nav>
        <button class="close">
          <close/>
          <div v-if="tabletSize">Návrat do obchodu</div>
        </button>

        <div>
          <button class="info" @click="showInfo()">
            <info />
            <div>Detail platby</div>
          </button>

          <dropdown locale="CZ" :tablet="tabletSize"/>
        </div>
      </nav>
      
      <payment-info v-if="isInfo" />
      <pay-method/>

      <footer>
        <p>Bezpečnou a rychlou platbu zařídí</p>
        <the-pay/>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      isInfo: false,
      tabletSize: false,
      windowWidth: window.innerWidth
    }
  },

  created() {
      if (this.windowWidth >= 768) {
        this.tabletSize = true
      }
  },

  methods: {
    showInfo() {
       this.isInfo = !this.isInfo
    }
  },

  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth

      if (this.windowWidth >= 768) {
        this.tabletSize = true
      } else {
        this.tabletSize = false
      }
    }
  }
}
</script>