<template>
  <component
    :is="componentType"
    class="btn"
    :href="href"
    :class="{
      'btn--default': !primary && !text,
      'btn--filled': filled,
      'btn--primary': primary,
      'btn--text': text,
      'btn--label': label,
    }"
    v-bind="$attrs"
    @click="clickEvent"
    ><slot
  /></component>
</template>

<script>
export default {
  props: {
    primary: { type: Boolean, default: false },
    filled: { type: Boolean, default: false },
    text: { type: Boolean, default: false },
    label: { type: Boolean, default: false },
    href: { type: String, default: null },
  },
  computed: {
    componentType() {
      return this.href ? 'a' : 'button';
    },
  },
  methods: {
    clickEvent(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  font-size: rem(14);
  line-height: em(16, 14);
  margin: 0;
  text-transform: uppercase;
  font-family: $font_subtitle;
  font-weight: normal;
  background-color: transparent;
  padding: 0;
  border: none;

  @media screen and (max-width: $tablet_breakpoint) {
    font-size: rem(12);
  }

  &:not(.btn--label) {
    cursor: pointer;
  }

  &--default,
  &--primary {
    padding: 1em 2em;
    border: 1px solid currentColor;
    min-width: em(125, 14);
    position: relative;
    transition: color 0.5s $curve;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 0.5s $curve;
      opacity: 0;
      z-index: -1;
    }

    &:not(.btn--label) {
      &:hover {
        &:before {
          transform-origin: left center;
          opacity: 1;
          transform: scaleX(1);
        }
      }
    }
  }

  &--default {
    color: $color_body;
    border-color: $color_body;

    &:before {
      background-color: $color_body;
    }

    &:not(.btn--label) {
      &:hover {
        color: $color_bg;
      }
    }

    &.btn--filled {
      background-color: $color_body;
      color: $color_bg;
    }
  }

  &--primary {
    color: $color1;
    border-color: $color1;

    &:before {
      background-color: $color1;
    }

    &:not(.btn--label) {
      &:hover {
        color: #fff;
      }
    }
  }

  &--text {
    color: $color_body;
    position: relative;

    &:after {
      content: '';
      display: block;
      width: 100%;
      border-bottom: 1px solid currentColor;
      bottom: -2px;
      transform: scaleX(0);
      transform-origin: right center;
      transition: transform 0.5s $curve;
    }

    &:not(.btn--label) {
      &:hover {
        &:after {
          transform: scaleX(1);
          transform-origin: left center;
          transition: transform 0.7s $curve;
        }
      }
    }
  }
}
</style>
