<template>
  <button class="toggle-button" :class="{opened: opened}" @click="click">
    <span>Toggle Menu</span>
  </button>
</template>

<script>
export default {
  props: {
    opened: { type: Boolean, default: false },
  },
  methods: {
    click(event) {
      event.preventDefault();
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle-button {
  font-size: 1em;
  display: block;
  padding: em(10) 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  color: currentColor;
  position: relative;
  color: currentColor;
  z-index: 3;
  position: absolute;
  left: rem(24);

  @media screen and (min-width: $mobile_breakpoint) {
    display: none;
  }

  span {
    display: block;
    width: rem(28);
    height: 2px;
    background-color: currentColor;
    text-indent: -99999px;
    position: relative;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: transform 0.4s, background 0.3s ease-in-out 0s;

    &:before,
    &:after {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background: currentColor;
      content: '';
      -webkit-transition: -webkit-transform 0.3s;
      transition: transform 0.3s;
      transition: background 0.3s ease-in-out;
    }

    &:before {
      animation: nav_up_reverse 0.3s linear forwards;
    }

    &:after {
      animation: nav_down_reverse 0.3s linear forwards;
    }
  }

  &.opened {
    span {
      background-color: transparent !important;
      transition: background-color 0.1s linear 0s;

      &:before {
        animation: nav_up 0.3s linear forwards;
      }
      &:after {
        animation: nav_down 0.3s linear forwards;
      }
    }
  }
}

@keyframes nav_up {
  0% {
    transform: translateY(-300%) rotate(0);
  }
  10% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(45deg);
  }
}

@keyframes nav_down {
  0% {
    transform: translateY(300%) rotate(0);
  }
  10% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(-45deg);
  }
}

@keyframes nav_up_reverse {
  0% {
    transform: translateY(0) rotate(45deg);
  }
  10% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateY(-300%) rotate(0);
  }
}

@keyframes nav_down_reverse {
  0% {
    transform: translateY(0) rotate(-45deg);
  }
  10% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateY(300%) rotate(0);
  }
}
</style>
