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
    <div class="abilities-content">
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeContent from '@/components/home/HomeContent.vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    HomeContent,
  },
});
</script>

<style lang="scss">
#app {
  nav {
    position: sticky;
    top: 0;
  }
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
    margin-top: 10rem;
  }

</style>
