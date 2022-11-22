<template>
  <header class="header" v-bind:class="{ 'header--simple': headerSimple }" @scroll="handleScroll">
    <div class="header__wrapper">
      <a href="#" class="logo">
        <img v-if="headerSimple" src="@/assets/img/logo-simple.svg" alt="logo" >
        <img v-else src="@/assets/img/logo.png" alt="logo">
      </a>
      <nav class="menu">
        <ul>
          <li>
            <div class="menu__dropdown" @click.prevent="collapse = !collapse">
              <m-link role="link" aria-disabled="true" label="Каталог" :white="white" :violet="violet" uppercase/>
              <div class="menu__collapse" v-bind:class="{ 'opened': collapse }">
                <div class="menu__collapse-item" @click="submenuOne = true">Тип средств</div>
                <div class="menu__collapse-item" @click="submenuTwo = true">Потребности кожи</div>
                <div class="menu__collapse-item" @click="submenuThree = true">Тип кожи</div>
                <div class="menu__collapse-item" @click="submenuFour = true">Коллеция</div>
              </div>
              <nav class="submenu">
                <ul>
                  <li class="submenu__title">ТИП СРЕДСТВ</li>
                  <li v-for="(link, index) in linksOne" :key="index">
                    <m-link :href="link.href" :label="link.label" black/>
                  </li>
                </ul>
                <ul>
                  <li class="submenu__title">ПОТРЕБНОСТИ КОЖИ</li>
                  <li v-for="(link, index) in linksTwo" :key="index">
                    <m-link :href="link.href" :label="link.label" black/>
                  </li>
                </ul>
                <ul>
                  <li class="submenu__title">Тип кожи</li>
                  <li v-for="(link, index) in linksThree" :key="index">
                    <m-link :href="link.href" :label="link.label" black/>
                  </li>
                </ul>
                <ul>
                  <li class="submenu__title">Коллекция</li>
                  <li v-for="(link, index) in linksFour" :key="index">
                    <m-link :href="link.href" :label="link.label" black/>
                  </li>
                </ul>
              </nav>
            </div>

          </li>
          <li>
            <m-link label="О бренде" :href="'#'" :white="white" :violet="violet" uppercase/>
          </li>
          <li>
            <m-link label="Блог" :href="'#'" :white="white" :violet="violet" uppercase/>
          </li>
        </ul>
      </nav>
      <div class="button-box" style="display: none">
        <m-button
            :white="white"
            size="small"
            label="Подписаться"/>
        <m-button
            float
            icon="search"
            :black="black"
            :white="white"
            size="small"
            label="Поиск"/>
        <m-button
            :white="white"
            :black="black"
            size="small"
            label="Купить"/>
      </div>
      <div class="button-box">
        <icon-button
            :white="white"
            :black="black"
            size="large"
            icon="search"/>
        <icon-button
            float
            icon="burger"
            :black="black"
            :white="white"
            size="large"/>
      </div>
    </div>
  </header>
</template>

<script>
import MLink from '@/components/Link'
import MButton from '@/components/Button'
import IconButton from '@/components/IconButton'

export default {
  name: 'my-header',
  components: {
    MLink,
    MButton,
    IconButton
  },
  data() {
    return {
      collapse: false,
      submenuOne: false,
      submenuTwo: false,
      submenuThree: false,
      submenuFour: false,
      lastScrollTop: 0,
      headerSimple: false,
      white: true,
      black: false,
      violet: false,
      linksOne: [
        { label: 'Очищение', href: '@' },
        { label: 'Тонизирование', href: '#' },
        { label: 'Средства для глаз', href: '@' },
        { label: 'Эссенции', href: '#' },
        { label: 'Сыворотки и концентраты', href: '@' },
        { label: 'Кремы и основной уход', href: '#' },
        { label: 'Маски', href: '#' },
        { label: 'Скрабы и пилинги', href: '@' },
        { label: 'Средства для губ', href: '#' },
        { label: 'Солнцезащитные средства', href: '@' },
        { label: 'Бестселлеры', href: '#' }
      ],
      linksTwo: [
        { label: 'Увлажнение кожи', href: '@' },
        { label: 'Питание кожи', href: '#' },
        { label: 'Антивозрастной уход', href: '@' },
        { label: 'Коррекция несовершенств', href: '#' },
        { label: 'Лифтинг и упругость', href: '@' },
        { label: 'Сужение пор', href: '#' },
        { label: 'Сокращение пигментации', href: '#' },
        { label: 'Защита от УФ-излучения', href: '@' }
      ],
      linksThree       : [
        { label: 'Комбинированная кожа', href: '@' },
        { label: 'Сухая кожа', href: '#' },
        { label: 'Нормальная кожа', href: '@' },
        { label: 'Жирная кожа', href: '#' },
        { label: 'Проблемная кожа', href: '@' },
        { label: 'Чувствительная кожа', href: '#' }
      ],
      linksFour: [
        { label: 'LiftActivator', href: '@' },
        { label: 'Retinol+ ', href: '#' },
        { label: 'Коллаген', href: '@' },
        { label: 'Экстремальное увлажнение', href: '#' },
        { label: 'Маски для лица ', href: '@' },
        { label: 'Очищение + Уход ', href: '#' },
        { label: 'Мультикрем', href: '#' },
        { label: 'BB Крем', href: '@' },
        { label: 'Подарочные наборы ', href: '@' }
      ],
      buttons: [
        { label: 'подписаться' },
        { label: 'Поиск' ,icon: 'search', float: true },
        { label: 'Купить' }
      ],
      top: true,
    }
  },
  methods: {
    handleScroll() {
      const sticky = window.pageYOffset || document.documentElement.scrollTop;
      if (sticky > this.lastScrollTop){
        this.headerSimple = true;
        this.white = false;
        this.black = true;
        this.violet = true;
      } else if (window.pageYOffset === 0) {
        this.headerSimple = false;
        this.white = true;
        this.black = false;
        this.violet = false;
      }
      this.lastScrollTop = sticky <= 0 ? 0 : sticky;
    },
    collapsed() {
      this.collapse = !this.collapse
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll);
    });
  },
  computed() {

  }
};
</script>
<style lang="scss">

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


  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    transition: all 1s ease;

    &__wrapper {
      width: 100%;
      box-sizing: border-box;
      padding: $gutter48 $gutter80;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 1s ease;

      @media (max-width: $mob) {
        padding: $gutter24 $gutter16;
        align-items: flex-start;
      }
    }

    &--simple {
      background-color: $white;

      .header__wrapper {
        padding: 3rem 4rem;

        @media (max-width: $mob) {
          padding: $gutter24 $gutter16;
        }
      }

      .logo {
        width: 17rem;

        @media (max-width: $mob) {
          width: 14.7rem;
        }
      }
    }
  }

  .submenu {
    justify-content: space-between;
    align-items: flex-start;
    padding: 4.8rem 16.8rem;
    background-color: white;
    box-sizing: border-box;
    position: absolute;
    top: 5rem;
    left: 0;
    transform: translateX(-43%);
    width: 108vw;
    height: max-content;
    display: none;
    opacity: 0;
    animation: fade-up 0.5s ease forwards;

    @media (max-width: $mob) {
      position: relative;
      display: none;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: transparent;
      padding: 0;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      grid-gap: 0.8rem;

      @media (max-width: $mob) {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: $white;
        top: 0;
        left: 0;
        transform: translateX(-100%);
      }

      li {
        a.link {
          font-size: 1.4rem;
          line-height: 1.5;
        }
      }
    }

    &__title {
      font-size: 1.1rem;
      letter-spacing: 0.005em;
      text-transform: uppercase;
      color: $black;
      margin-bottom: 2.4rem;
    }
  }

  nav ul, .button-box {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    grid-gap: 1.2rem;
    position: relative;
    padding-left: 0;

    @media (max-width: $tablet) {
      grid-gap: 0;
    }
  }

  .logo {
    width: 23.6rem;

    @media (max-width: $mob) {
      width: 14.7rem;
    }

    img {
      width: 100%;
    }
  }

  .menu {
    @media (max-width: $mob) {
      position: fixed;
      top: 7.75rem;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: $white;
      border-top: 0.1rem solid $secondary-color;
    }

    &__dropdown {
      position: relative;

      &:after {
        content: "";
        background-image: url('@/assets/img/catalog-border.svg');
        background-repeat: no-repeat;
        background-size: 105.6%;
        width: 136rem;
        height: 2.3rem;
        position: absolute;
        top: auto;
        bottom: -4rem;
        left: -53.7rem;
        z-index: 1;
        display: none;
        opacity: 0;
        animation: fade-up 0.5s ease forwards;

        @media (max-width: $mob) {
          display: none!important;
        }
      }

      &:before {
        content: "";
        width: 100%;
        height: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        display: none;
        opacity: 0;
        animation: fade-up 0.5s ease forwards;
        cursor: pointer;

        @media (max-width: $mob) {
          display: none!important;
        }
      }

      &:hover {
        &:after {
          display: block;
        }

        &:before {
          display: block;
        }

        .submenu {
          display: flex;
        }
      }
    }

    &__collapse {
      padding: 0.5rem 0;
      height: 0;
      overflow: hidden;

      &.opened {
        height: 20rem;
      }
    }

    ul {

      li {
        padding: 0 1.2rem;

        @media (max-width: $mob) {
          .link {
            color: $liftactivator-violet;
          }
        }
      }

      @media (max-width: $mob) {
       flex-direction: column;
       align-items: flex-start;
      }
    }
  }

  @keyframes fade-up {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>

