<template>
  <a :href="href" :class="classes">{{ label }}</a>
</template>


<script>
import { reactive, computed } from 'vue';

export default {
  name: "MLink",

  props: {
    label: {
      type: String,
      required: true,
    },
    white: {
      type: Boolean,
      default: false,
    },
    uppercase: {
      type: Boolean,
      default: true,
    },
    href: {
      type: String,
      required: true,
    },
  },

  emits: ['click'],

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'link': true,
        'link--white': props.white,
        'link--uppercase': props.uppercase,
      }))
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


.link {
  font-family: sans-serif;
  font-size: 1.1rem;
  line-height: 1;
  letter-spacing: 0.005em;
  color: $primary-color;
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.75;
  }

  &--uppercase {
    text-transform: uppercase;
  }

  &--gold {
    text-transform: $rose-gold;
  }

  &--white {
    color: $white;

    &:hover {
      color: $rose-gold;
    }
  }

}

</style>
