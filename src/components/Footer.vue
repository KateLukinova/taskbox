<template>
  <div class="footer">
    <div class="footer__content">
      <a href="#" class="footer__logo">
        <img src="@/assets/img/logo.png" alt="logo">
      </a>
      <a href="tel:+78002001200" class="footer__phone">
        <span class="phone-label">Телефон горячей линии</span>
        <span class="phone-number">+7 800 200 1 200</span>
        <p>бесплатно по России</p>
      </a>
      <div class="footer__feedback">
        <p>Крем для лица: Каждый день наносить крем на лицо, чтобы оно было гладким и красивым, но не забывать покупать крем для ног. </p>
        <div class="footer__social">
          <div  v-for="(item, index) in social" :key="index">
            <m-link gold uppercase :href="item.href" :label="item.label" :icon="item.icon"/>
          </div>
        </div>
        <p>Крем для лица: Каждый день наносить крем на лицо, чтобы оно было гладким и красивым, но не забывать покупать крем для ног. </p>
        <m-button
            size="small"
            full
            label="Связаться с нами"/>
      </div>
      <div class="footer__info">
        <div class="footer__links">
          <div class="footer__links-item"  v-for="(item, index) in links" :key="index">
            <m-link gold uppercase :float="item.float" :href="item.href" :label="item.label" :icon="item.icon"/>
          </div>
        </div>
        <p>
          ООО «Юнилевер Русь»<br>
          г. Москва, ул. Сергея Макеева, д. 13. ИНН 7705183476<br>
          <a href="tel:+74957457500">+7 (495) 745 75 00</a><br>
          <a href="mailto:communications.russia@unilever.com">communications.russia@unilever.com</a>
        </p>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__coop">© Черный Жемчуг 2022, Россия</div>
      <div class="footer__unilever">
        <img src="@/assets/img/logo-unilever.png" alt="unilever">
        <div class="footer__coop">© 2022 Unilever</div>
      </div>
    </div>
  </div>
</template>

<script>
import MLink from '@/components/Link'
import MButton from '@/components/Button'

export default {
  name: "MyFooter",
  components: {
    MLink,
    MButton
  },

  data() {
    return {
      social: [
        { label: 'ВКОНТАКТЕ', href: '@', icon: 'vk' },
        { label: 'YouTube', href: '@', icon: 'yt' },
        { label: 'Одноклассники', href: '@', icon: 'ok' },
      ],

      links: [
        { label: 'Вопросы и ответы', href: '@' },
        { label: 'Политика конфиденциальности', href: '@', icon: 'up-right', float: true },
        { label: 'Условия использования сайта', href: '@', icon: 'up-right', float: true },
        { label: 'Политика cookie', href: '@', icon: 'up-right', float: true },
        { label: 'Карта сайта', href: '@' },
      ],
    }
  }
}
</script>

<style scoped lang="scss">

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

$ipad: 1440px;
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


 .footer {
   width: 100%;
   background-color: $primary-color;
   padding: $gutter1 $gutter32;

   @media (max-width: $mob) {
     padding: $gutter1;
   }

   p {
     font-family: 'Gotham Pro', sans-serif;
     font-size: 1.4rem;
     line-height: 1.5;
     color: $white;
     margin-bottom: 2.6rem;

     a {
       color: inherit;
       text-decoration: none;

       &:hover {
         text-decoration: underline;
       }
     }
   }

   &__content {
     padding: $gutter56 $gutter32;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr 1fr;
     grid-template-rows: 15rem 1fr;
     gap: 0 $gutter32;
     grid-template-areas:
      "logo phone feedback info"
      "logo phone feedback info";

     @media (max-width: $ipad) {
       grid-template-columns: 1fr 1fr 1fr;
       gap: 0 $gutter48;
       grid-template-areas:
        "logo phone info"
        ". feedback info";
     }

     @media (max-width: $tablet) {
       grid-template-columns: 1fr 1fr;
       grid-template-rows: 15rem 15rem 1fr;
       gap: 0 $gutter48;
       grid-template-areas:
        "logo info"
        "phone info "
        "feedback info ";
     }

     @media (max-width: $mob) {
       display: flex;
       flex-direction: column;
       padding: 0;
     }
   }

   &__logo { grid-area: logo; }
   &__phone { grid-area: phone; }
   &__feedback { grid-area: feedback; }
   &__links { grid-area: links; }

   &__logo {
     width: 28.6rem;

     @media (max-width: $mob) {
       width: 20.6rem;
       margin-bottom: 3.2rem;
     }

     img {
       width: 100%;
     }
   }
   &__phone {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     text-decoration: none;

     .phone-label {
       font-family: 'Gotham Pro', sans-serif;
       font-size: 1.2rem;
       line-height: 1.6;
       letter-spacing: 0.03em;
       text-transform: uppercase;
       color: $rose-gold;
     }

     .phone-number {
       font-family: 'Gotham Pro', sans-serif;
       font-size: 3.2rem;
       line-height: 1.6;
       text-transform: uppercase;
       color: $rose-gold;
     }

     p {
       text-align: right;
       align-self: flex-end;
     }
   }
   &__feedback {
     display: flex;
     flex-direction: column;
     align-items: flex-start;

     @media (max-width: $mob) {
       margin-bottom: 3.2rem;
     }
   }

   &__social {
     border-bottom: 0.1rem solid $rose-gold;
     padding-bottom: 2.6rem;
     width: 100%;
     margin-bottom: 2.6rem;
   }

   &__info {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
   }

   .footer__links {
     width: 100%;
   }

   &__links-item {
     padding-bottom: 1.2rem;
     border-bottom: 0.1rem solid $rose-gold;
     margin-bottom: 1.2rem;
   }

   &__bottom {
     width: 100%;
     border-bottom: 0.1rem solid $rose-gold;
     border-top: 0.1rem solid $rose-gold;
     display: flex;
     justify-content: space-between;
     align-items: center;
   }

   &__unilever {
     display: flex;
     justify-content: space-around;
     align-items: center;
     width: 28rem;
     border-left: 0.1rem solid $rose-gold;
     padding: 1.2rem 0;

     @media (max-width: $mob) {
       border: none;
       width: 10rem;

       .footer__coop {
         display: none;
       }
     }

     img {
       width: 6.2rem;

       @media (max-width: $mob) {
         width: 3rem;
       }
     }
   }

   &__coop {
     font-family: 'Gotham Pro', sans-serif;
     font-style: normal;
     font-weight: 400;
     font-size: 1.2rem;
     line-height: 1.6;
     text-align: right;
     letter-spacing: 0.03em;
     text-transform: uppercase;
     color: $rose-gold;

     @media (max-width: $mob) {
       text-align: left;
     }
   }
 }
</style>
