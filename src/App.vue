<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppHero from './components/AppHero.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    AppHero,
  },
  data() {
    return {
      nav: [
        {
          id: 1,
          text: 'Home',
          href: '#'
        },
        {
          id: 2,
          text: 'Pages',
          href: '#'
        },
        {
          id: 3,
          text: 'Courses',
          href: '#'
        },
        {
          id: 4,
          text: 'Features',
          href: '#'
        },
        {
          id: 5,
          text: 'Blog',
          href: '#'
        },
        {
          id: 6,
          text: 'Shop',
          href: '#'
        },
      ],
      explore: [
        {
          id: 1,
          text: 'Start here',
          href: '#'
        },
        {
          id: 2,
          text: 'Blog',
          href: '#'
        },
        {
          id: 3,
          text: 'About us',
          href: '#'
        },
        {
          id: 4,
          text: 'Success story',
          href: '#'
        },
        {
          id: 5,
          text: 'Courses',
          href: '#'
        },
        {
          id: 6,
          text: 'Contact us',
          href: '#'
        }
      ],
      info: [
        {
          id: 1,
          text: 'Membership',
          href: '#'
        },
        {
          id: 2,
          text: 'Purchase guide',
          href: '#'
        },
        {
          id: 3,
          text: 'Privacy policy',
          href: '#'
        },
        {
          id: 4,
          text: 'Terms of services',
          href: '#'
        },
      ]
    }
  }

}
</script>

<template>
  <div>
    <AppHeader :menu="nav" />
    <AppHero />
    <AppFooter :exploreMenu="explore" :infoMenu="info" />
  </div>
</template>

<style lang="scss">
@use './styles/general';
</style>
