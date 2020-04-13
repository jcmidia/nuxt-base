<template>
  <div class="container">
    <div class="row center-xs">
      <div class="col-md-6 col-xs-12">
        <logo />
        <h1 class="title-h1">webapp</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: em(120) 0;
}
</style>
