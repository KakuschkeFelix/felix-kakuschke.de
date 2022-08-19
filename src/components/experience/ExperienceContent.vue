<template>
  <div class="experience-header" id="experience">
    <p class="title">Experience</p>
  </div>
  <div class="experience-section-content">
    <div class="experience-cards">
      <Card>
        <template #image>
          <img src="../../assets/images/hfu-logo.png"
          alt="Mario Kart 8 Deluxe Calculator" class="contain">
        </template>
        <template #title>
          <a href="https://hs-furtwangen.de" class="link">Hochschule Furtwangen University</a>
        </template>
        <template #content>
          <ul>
            <li class="checkmark">Media Computer Science</li>
            <li class="checkmark">Project Management</li>
            <li class="checkmark">Software Design</li>
            <li class="checkmark">Media Design</li>
            <li class="arrow">Oct 2020 - now</li>
          </ul>
        </template>
      </Card>
      <Card>
        <template #image>
          <img src="../../assets/images/orsoft-logo.png"
          alt="Mario Kart 8 Deluxe Calculator" class="contain">
        </template>
        <template #title>
          <a href="https://hs-furtwangen.de" class="link">ORSOFT GmbH</a>
        </template>
        <template #content>
          <ul>
            <li class="checkmark">Working on ERP Application</li>
            <li class="checkmark">Usage of Web Frameworks</li>
            <li class="checkmark">Team Work / Time Management</li>
            <li class="checkmark">UX / UI Implementation</li>
            <li class="arrow">Oct 2021 - now</li>
          </ul>
        </template>
      </Card>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .experience-header {
    .title {
      font-size: 3rem;
    }
  }

  .experience-section-content {
    font-size: 2rem;
    .link {
      font-size: 1em;
      padding: 0;
      color: $light;
    }
    .experience-cards {
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
