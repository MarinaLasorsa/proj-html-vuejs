<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppHero from './components/AppHero.vue';
import CourseSection from './components/CourseSection.vue';
import TutoringSection from './components/TutoringSection.vue';
import VideoSection from './components/VideoSection.vue';
import TestimonialSection from './components/TestimonialSection.vue';
import NumbersSection from './components/NumbersSection.vue';
import BlogSection from './components/BlogSection.vue';
import NewsletterSection from './components/NewsletterSection.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    AppHero,
    CourseSection,
    TutoringSection,
    VideoSection,
    TestimonialSection,
    NumbersSection,
    BlogSection,
    NewsletterSection,
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
      pages: [
        {
          id: 1,
          text: 'Start here',
          href: '#'
        },
        {
          id: 2,
          text: 'Success Story',
          href: '#'
        },
        {
          id: 3,
          text: 'About me',
          href: '#'
        },
        {
          id: 4,
          text: 'About us 01',
          href: '#'
        },
        {
          id: 5,
          text: 'About us 02',
          href: '#'
        },
        {
          id: 6,
          text: 'About us 03',
          href: '#'
        },
        {
          id: 7,
          text: 'Contact me',
          href: '#'
        },
        {
          id: 8,
          text: 'Contact us',
          href: '#'
        },
        {
          id: 9,
          text: 'Purchase guide',
          href: '#'
        },
        {
          id: 10,
          text: 'Privacy Policy',
          href: '#'
        },
        {
          id: 11,
          text: 'Terms of Service',
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
    <AppHeader :menu="nav" :pagesMenu="pages" />
    <AppHero />
    <CourseSection />
    <TutoringSection />
    <VideoSection />
    <TestimonialSection />
    <NumbersSection />
    <BlogSection />
    <NewsletterSection />
    <AppFooter :exploreMenu="explore" :infoMenu="info" />
  </div>
</template>

<style lang="scss">
@use './styles/general';
</style>
