<template>
  <header class="header" v-bind:class="{ 'header--top': top }">
    <div class="header__wrapper">
      <a href="#" class="logo">
        <img src="@/assets/img/logo.png" alt="logo">
      </a>
      <nav class="menu">
        <ul>
          <li>
            <m-link label="Каталог" :href="'href'" :white="true"/>
            <nav class="submenu">
              <ul>
                <li v-for="(link, index) in links" :key="index">
                  <m-link :href="link.href" :label="link.label" white/>
                </li>
              </ul>
            </nav>
          </li>
          <li>
            <m-link label="О бренде" :href="'#'" :white="true"/>
          </li>
          <li>
            <m-link label="Блог" :href="'#'" :white="true"/>
          </li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li v-for="(button, index) in buttons" :key="index">
            <m-button
                :float="button.float"
                :icon="button.icon"
                white
                size="small"
                :label="button.label"/>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import MLink from '@/components/Link'
import MButton from '@/components/Button'

export default {
  name: 'my-header',
  components: {
    MLink,
    MButton
  },
  data() {
    return {
      links: [
          { label: 'Foo', href: '@' },
          { label: 'Bar', href: '#' }
      ],
      buttons: [
        { label: 'подписаться'},
        { label: 'подписаться' ,icon: 'arrow', float: true },
      ],
      top: true,
    }
  }
};
</script>
<style lang="scss">
  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    &__wrapper {
      width: 100%;
      box-sizing: border-box;
      padding: 4.8rem 8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &--main {
      background-color: #1ea7fd;
    }
  }

  .submenu {
    display: none;
  }

  nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    grid-gap: 3.2rem;
  }

  .logo {
    width: 23.6rem;

    img {
      width: 100%;
    }
  }
</style>

