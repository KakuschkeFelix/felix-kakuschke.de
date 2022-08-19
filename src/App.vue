<template>
<nav>
  <NavBar></NavBar>
</nav>
<div class="page">
  <div class="sidebar">
    <div class="icons">
      <a href="https://github.com/KakuschkeFelix">
        <font-awesome-icon icon="fa-brands fa-github" /><p>Github</p>
      </a>
      <a href="https://www.linkedin.com/in/felix-kakuschke-b55676216/">
        <font-awesome-icon icon="fa-brands fa-linkedin-in" /><p>LinkedIn</p>
      </a>
      <a href="https://twitter.com/KakuschkeFelix">
        <font-awesome-icon icon="fa-brands fa-twitter" /><p>Twitter</p>
      </a>
      <a href="mailto:contact@felix-kakuschke.de">
        <font-awesome-icon icon="fa-solid fa-at" /><p>Email</p>
      </a>
    </div>
  </div>
  <div class="content">
    <div class="home-content">
      <HomeContent></HomeContent>
    </div>
    <div class="about-me-content fadeIn right">
      <AboutMeContent></AboutMeContent>
    </div>
    <div class="projects-content fadeIn top">
      <ProjectsContent></ProjectsContent>
    </div>
    <div class="experience-content fadeIn right">
      <ExperienceContent></ExperienceContent>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeContent from '@/components/home/HomeContent.vue';
import NavBar from './components/NavBar.vue';
import AboutMeContent from './components/aboutme/AboutMeContent.vue';
import ProjectsContent from './components/projects/ProjectsContent.vue';
import ExperienceContent from './components/experience/ExperienceContent.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    HomeContent,
    AboutMeContent,
    ProjectsContent,
    ExperienceContent,
  },
  mounted() {
    window.addEventListener('scroll', this.checkForShow);
    this.checkForShow();
  },
  methods: {
    checkForShow() {
      const fadeIn: Element[] = [];
      document.querySelectorAll('.fadeIn').forEach((el) => fadeIn.push(el));
      if (fadeIn?.length === 0) {
        return;
      }
      const height = window.innerHeight;
      const revealOnce = 200;

      fadeIn.forEach((el) => {
        const { top } = el.getBoundingClientRect();
        if (top < height - revealOnce) {
          el.classList.add('show');
        }
      });
    },
  },
});
</script>

<style lang="scss">
#app {
  nav {
    position: sticky;
    top: 0;
    z-index: 1000;
    display: none;
  }
}
.sidebar {
  position: fixed;
  bottom: 0;
  .icons {
    font-size: 2rem;
    height: calc(100% - 1rem);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;
    padding-left: 1rem;
    a {
      padding: 1.5rem;
      transition: transform 0.3s ease-out;
      color: $light;
      opacity: 0.5;
      &:hover {
        transform: scale(1.5);
      }
      p {
        display: none;
      }
    }
  }
  }

  .home-content {
    margin-bottom: 15rem;
    margin-top: 5rem;
  }

  .about-me-content {
    margin-bottom: 20rem;
    margin-left: 10rem;
  }

  .projects-content {
    margin-left: 7rem;
    margin-bottom: 20rem;
  }

  .experience-content {
    margin-left: 12rem;
    margin-bottom: 20rem;
  }

  @media only screen and (min-width: 600px) {
    nav {
      display: block !important;
    }
    .home-content{
      margin-top: 10rem;
    }
    .about-me-content {
    margin-left: 20rem;
  }
  .projects-content {
    margin-left: 10rem;
  }
  .page {  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "sidebar content";
  width: 99%;
}

.content { grid-area: content; }

.sidebar {
  grid-area: sidebar;
  }

  .experience-content {
    margin-left: 15rem;
    margin-bottom: 20rem;
  }
}

</style>
