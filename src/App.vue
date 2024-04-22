<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
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
      ]
    }
  }

}
</script>

<template>
  <div>
    <AppHeader :menu="nav" />

  </div>
</template>

<style lang="scss">
@use './styles/general';
</style>
