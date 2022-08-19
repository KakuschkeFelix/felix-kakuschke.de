<template>
  <div class="projects-header" id="projects">
    <p class="title">Projects</p>
  </div>
  <div class="projects-section-content">
    <p>Many of my Projects can be found on my <a href="https://github.com/KakuschkeFelix" class="link">
      Github&nbsp;<font-awesome-icon icon="fa-brands fa-github" /></a>.
       These include (with many more to come): </p>
    <div class="projects-cards">
      <Card>
        <template #image>
          <img src="../../assets/images/mk8calc.png" alt="Mario Kart 8 Deluxe Calculator">
        </template>
        <template #title>
          <a href="https://kakuschkefelix.github.io/mk8calculator/" class="link">Mario Kart 8 Deluxe Calculator</a>
        </template>
        <template #content>
          A simple Project using:
          <ul>
            <li class="checkmark">Angular</li>
            <li class="checkmark">ngRx State Management</li>
            <li class="checkmark">Mobile First aproach</li>
            <li class="checkmark">Serverless Application</li>
            <li class="checkmark">Memory Leak Prevention</li>
          </ul>
        </template>
      </Card>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .projects-header {
    .title {
      font-size: 3rem;
    }
  }

  .projects-section-content {
    font-size: 2rem;
    .link {
      font-size: 1em;
      padding: 0;
      color: $light;
    }
    .projects-cards {
      margin-top: 7rem;
    }
  }
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import Card from '../Card.vue';

export default defineComponent({
  components: {
    Card,
  },
});
</script>
