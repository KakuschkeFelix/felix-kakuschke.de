<template>
  <div class="about-me-header">
    <p class="title">About Me</p>
  </div>
  <div class="about-me-card">
    <div class="card-image">
      <!-- <img src="@/assets/images/fk.png" alt="Felix Kakuschke"> -->
    </div>
    <div class="card-text">
      <p class="title">Hi! My name is Felix Kakuschke</p>
      <p class="card-content">I am a Software Engineer and Full Stack
        Web Developer and student in Media Coputer Science.
        I started learning to code when I was 13 and haven't stopped learning since.
        <br>
        When I started my studies in 2020, I fully commited on developing full stack web
        applications using various frameworks and technologies. <br>
        I love a good challenge and thus I always strive to deepen my skills and connect
        them to new and exciting technologies.
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .about-me-header {
    .title {
      font-size: 3rem;
    }
  }
    .about-me-card {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .title {
        font-size: 2rem;
      }
      .card-content {
        font-size: 1.5rem;
        width: clamp(45ch, 50%, 75ch);
        }
    }
</style>
