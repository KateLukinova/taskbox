<template>
  <nav class="menu">
    <ul>
      <li>
        <div class="menu__dropdown">
          <m-link label="Каталог" :href="'href'" :white="white" :black="black" uppercase/>
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
        <m-link label="О бренде" :href="'#'" :white="white" :black="black" uppercase/>
      </li>
      <li>
        <m-link label="Блог" :href="'#'" :white="white" :black="black" uppercase/>
      </li>
    </ul>
  </nav>
</template>

<script>
import MLink from "@/components/Link";

export default {
  name: 'MMenu',
  components: {
    MLink
  },
  data() {
    return {
      white: true,
      black: false,
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
      ]
    }
  },
  methods: {
    handleScroll() {
      const sticky = window.pageYOffset || document.documentElement.scrollTop;
      if (sticky > this.lastScrollTop){
        this.headerSimple = true;
        this.white = false;
        this.black = true;
      } else if (window.pageYOffset === 0) {
        this.headerSimple = false;
        this.white = true;
        this.black = false;
      }
      this.lastScrollTop = sticky <= 0 ? 0 : sticky;
    },
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

<style lang="scss" scoped>
  .menu {
    .li {
      padding: 0 1.2rem;
    }

    .&__dropdown {
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

      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        grid-gap: 0.8rem;

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
