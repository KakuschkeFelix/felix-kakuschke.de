<template>
    <div class="abilities-section">
        <div class="icons">
            <div class="icon" v-for="tech in technologies"
            :key="tech.name"
            :class="tech.class == 0 ? 'start' :
             tech.class == 1 ? 'reveal' :
              tech.class == 2 ? 'end' : ''">
              <img :src="tech.customImage" :alt="tech.name" v-if="tech.customImage">
                <font-awesome-icon v-if="tech.iconName" :icon="`fa-brands ${tech.iconName}`" />
                <p>{{ tech.name }}</p>
            </div>
            <div class="scrollbar"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.icons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

}
    .icon {
        transition: all 0.5s ease-out;
        font-size: 8rem;
        padding: 1rem;
        color: $light;
        img {
          width: 8rem;
          height: 8rem;
        }
        p {
            font-size: 1.5rem;
            text-align: center;
            transition: opacity 0.5s ease-out;
            margin-top: 0;
        }
        &.start {
            transform: scale(0.8);
            opacity: 0.25;
            p {
              opacity: 0;
            }
        }
        &.end {
          transform: scale(0.8);
          opacity: 0.25;
          p {
            opacity: 0;
          }
        }
        &.reveal {
          transform: scale(1.2);
          opacity: 1;
        }
    }
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import technologies from '@/assets/config/abilities.json';

interface Technology {
  name: string;
  iconName?: string;
  class: number;
  customImage?: string;
}

export default defineComponent({
  data() {
    return {
      technologies: [] as Technology[],
      index: 0,
    };
  },
  methods: {
    rotateIcons() {
      const iconsEachTime = 1;
      setInterval(() => {
        this.index = this.mod(this.index + iconsEachTime, this.technologies.length);
        for (let i = 0; i < iconsEachTime; i += 1) {
          this.technologies[
            this.mod(this.index - i - iconsEachTime, this.technologies.length)
          ].class = 0;
        }
        for (let i = 0; i < iconsEachTime; i += 1) {
          this.technologies[
            this.mod(this.index - i, this.technologies.length)
          ].class = 1;
        }
        for (let i = 1; i <= iconsEachTime; i += 1) {
          this.technologies[
            this.mod(this.index + i, this.technologies.length)
          ].class = 2;
        }
      }, 3000);
    },
    mod(n: number, m: number) {
      return ((n % m) + m) % m;
    },
  },
  mounted() {
    this.rotateIcons();
    const technames = technologies;
    technames.forEach((tech) => {
      this.technologies.push({
        name: tech.name,
        iconName: tech.iconName,
        customImage: tech.customImage,
        class: 0,
      });
    });
    this.technologies[this.index].class = 1;
  },
});
</script>
