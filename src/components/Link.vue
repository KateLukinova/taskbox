<template>
<!--  <router-link :to="href" :class="classes">{{ label }}</router-link>-->
  <a :href="href" :class="classes">
    <m-icon :name="icon" v-if="icon"></m-icon>
    <span class="button__label" v-if="label">{{ label }}</span>
  </a>
</template>


<script>
import { reactive, computed } from 'vue';
import MIcon from "@/components/Icon.vue";


export default {
  name: "MLink",
  components: {
    MIcon
  },

  props: {
    label: {
      type: String,
      required: true,
    },
    white: {
      type: Boolean,
      default: false,
    },
    violet: {
      type: Boolean,
      default: false,
    },
    black: {
      type: Boolean,
      default: false,
    },
    gold: {
      type: Boolean,
      default: false,
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      required: true,
    },
    icon: {
      type: String
    },
    float: {
      type: Boolean,
      default: false
    }
  },

  emits: ['click'],

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'link': true,
        'link--black': props.black,
        'link--gold': props.gold,
        'link--float': props.float,
        'link--white': props.white,
        'link--violet': props.violet,
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


.link {
  font-family: sans-serif;
  font-size: 1.1rem;
  line-height: 1;
  letter-spacing: 0.005em;
  color: $retinol-violet;
  text-decoration: none;
  transition: all 0.5s ease;

  @media (max-width: $mob) {
    font-size: 1.2rem;
  }

  &--uppercase {
    text-transform: uppercase;
  }

  &--gold {
    color: $rose-gold;
  }

  &--white {
    color: $white;

    &:hover {
      color: $rose-gold;
    }
  }

  &--black {
    color: $black;

    &:hover {
      color: $rose-gold;
    }
  }

  &--violet {
    color: $liftactivator-violet;

    &:hover {
      color: $secondary-color;
    }
  }

  .icon {
    margin-right: 1rem;
  }

  &--float {
    display: flex;
    justify-content: flex-end;
    flex-direction: row-reverse;

    .icon {
      margin-right: 0;
      margin-left: 1rem;
    }
  }

}

</style>
