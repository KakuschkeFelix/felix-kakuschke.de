<template>
  <div class="about-me-header" id="about_me">
    <p class="title">About Me</p>
  </div>
  <div class="about-me-card">
    <div class="card-image">
      <img src="@/assets/images/fk.jpg" alt="Felix Kakuschke">
    </div>
    <div class="card-text">
      <p class="title">Hi! My name is Felix Kakuschke</p>
      <p class="card-content">I am a Software Engineer, Full Stack
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
    scroll-padding: 3rem;
    .title {
      font-size: 3rem;
      color: $brand;
    }
  }
    .about-me-card {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      align-content: center;
      .card-image {
        height: 25rem;
        margin-right: 3rem;
        img {
          height: 100%;
        }
      }
      .title {
        font-size: 2rem;
      }
      .card-content {
        font-size: 1.5rem;
        min-width: 45ch;
        max-width: 75ch;
        }
    }
</style>
