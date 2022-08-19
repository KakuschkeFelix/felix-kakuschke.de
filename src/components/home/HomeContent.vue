<template>
    <div class="page-header">
      <HeaderSection></HeaderSection>
    </div>
    <div class="page-subheader">
      <p>I am a self-taught web developer who loves learning new things.
        Starting out, I teached myself HTML, CSS and TypeScript,
        which progressed to learning various web frameworks.
        I enjoy web development and working on websites and applications.
        My experiences in web technologies include:</p>
    </div>
    <div class="page-abilities">
      <AbilitiesSection></AbilitiesSection>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderSection from '@/components/home/HeaderSection.vue';
import AbilitiesSection from './AbilitiesSection.vue';

export default defineComponent({
  components: {
    HeaderSection,
    AbilitiesSection,
  },
});
</script>
<style lang="scss" scoped>

.page-header {
  padding-left: 3rem;
  margin-bottom: 7.5rem;
}
.page-subheader {
  padding-left: 3rem;
  margin-bottom: 5rem;
    p {
      width: clamp(40ch, 50%, 75ch);
      font-size: 2rem;
      text-align: justify;
      padding-left: 3rem;
      transform: translateX(0.4rem);
    }
  }

  .page-abilities {
    padding-left: 4rem;
  }

@media only screen and (min-width: 600px) {
  .page-abilities {
    padding-left: 5rem;
  }
  .page-subheader {
  padding-left: 5rem;
    p {
      width: clamp(45ch, 50%, 75ch);
      padding-left: 5rem;
    }
  }
  .page-header {
  padding-left: 5rem;
}
}

</style>
