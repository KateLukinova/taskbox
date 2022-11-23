<template>
  <button type="button" :disabled="disabled" :class="classes" @click="onClick">
    <m-icon :name="icon"></m-icon>
  </button>
</template>


<script>
import { reactive, computed } from 'vue';
import MIcon from "@/components/Icon.vue";

export default {
  name: "IconButton",

  components: { MIcon },

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    black: {
      type: Boolean,
      default: false,
    },
    white: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    icon: {
      type: String
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'icon-button': true,
        'icon-button--primary': props.primary,
        'icon-button--black': props.black,
        'icon-button--white': props.white,
        'icon-button--secondary': !props.primary,
        [`icon-button--${props.size || 'medium'}`]: true,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
<style lang="scss" scoped>


$primary-color: #504871;
$secondary-color: #9595C5;
$violet-accent-color: #7C65BE;
$violet-medium-color: #9989C9;
$violet-light-color: #F3F1FF;
$white: #FFFFFF;
$black: #3A3A3C;
$rose-gold: #F2BFA4;
$retinol-violet: #725FA2;
$liftactivator-violet: #504871;


$tablet: 1024px;
$mob: 736px;

$gutter1: 1rem;
$gutter16: 1.6rem;
$gutter24: 2.4rem;
$gutter32: 3.2rem;
$gutter48: 4.8rem;
$gutter56: 5.6rem;
$gutter72: 7.2rem;
$gutter80: 8rem;


.icon-button {
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  box-sizing: border-box;

  &--primary {
    color: $white;
    background-color: $retinol-violet;

    &:hover {
      opacity: 0.75;
    }

    &:focus {
      background-color: $primary-color;
    }
  }

  &--secondary {
    border: 0.1rem solid transparent;
    background-color: transparent;
    color: $retinol-violet;

    &:hover {
      border: 0.1rem solid $retinol-violet;
    }

    &:focus {
      border: 0.2rem solid $primary-color;
    }
  }

  &--white {
    border: none;
    background-color: transparent;
    color: $white;

    &:hover {
      color: $rose-gold;
      border: none;
    }

    &:focus {
      border: none;
      color: $rose-gold;
    }
  }

  &--black {
    border: none;
    background-color: transparent;
    color: $black;

    &:hover {
      opacity: 0.75;
    }

    &:focus {
      color: $liftactivator-violet;
      background-color: transparent;
    }
  }

  &--small {
    font-size: 1.3rem;
    padding: 1rem 1.6rem;

    @media (max-width: $mob) {
      padding: 0.5rem;
    }
  }

  &--medium {
    font-size: 1.2rem;
    padding: 1.4rem 2.4rem;
  }

  &--large {
    padding: 1.8rem 4rem;

    @media (max-width: $mob) {
      padding: 0.5rem;
    }

    .icon {
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  &:disabled {
    background-color: $violet-light-color;
    color: $secondary-color;
    pointer-events: none;
  }
}


</style>
