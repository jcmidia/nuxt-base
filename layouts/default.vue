<template>
  <main class="wrapper" :class="{ 'is-touch': isTouch() }">
    <transition name="fade" mode="out-in">
      <nuxt />
    </transition>
  </main>
</template>

<script>
export default {
  computed: {
    mobileBreakpoint() {
      return this.$store.state.mobile.mobileBreakpoint;
    },
  },
  mounted() {
    this.checkMobile();
    window.onresize = this.checkMobile;
  },
  methods: {
    isTouch() {
      try {
        document.createEvent('TouchEvent');
        return true;
      } catch (e) {
        return false;
      }
    },
    checkMobile() {
      if (window.innerWidth < this.mobileBreakpoint) {
        this.$store.commit('mobile/change', true);
      } else {
        this.$store.commit('mobile/change', false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s $curve;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
