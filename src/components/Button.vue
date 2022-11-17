<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>


<script>
import { reactive, computed } from 'vue';

export default {
  name: "MButton",

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'button': true,
        'button--primary': props.primary,
        'button--disabled': props.disabled,
        'button--secondary': !props.primary,
        [`button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
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


.button {
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
    background-color: #725FA2;

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
    color: #725FA2;

    &:hover {
      border: 0.1rem solid #725FA2;
    }
  }

  &--small {
    font-size: 12px;
    padding: 10px 16px;
  }

  &--medium {
    font-size: 1.2rem;
    padding: 1.4rem 2.4rem;
  }

  &--large {
    padding: 1.8rem 4rem;
  }

  &--disabled {
    background-color: $violet-light-color;
    color: $secondary-color;
  }
}


</style>
