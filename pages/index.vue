<template>
  <div class="wrap">
    <Header />
    <main class="Main">
      <div class="bg first">
        <!-- <img src="@/assets/images/background-1.png" alt="Crossing the street by Andrea Cau"> -->
        <MyParticles />
        <div class="web-title">
          <h1 class=" animate__fadeInRight animate__delay-1s">Hi! I'm Adrian</h1>
          <div class="badge">Fullstack developer</div>
          <p class=" animate__fadeInUp animate__delay-2s">This is my portfolio. Check out my stack and projects. Contact my anytime.</p>
          <button class="contact-button">Contact me</button>
        </div>
      </div>
      <div class="polygon"></div>
      <div class="scroll-down">
        <font-awesome-icon
          @click="scrollToFirstSection"
          class="icon animate__animated animate__slow animate__infinite animate__pulse"
          icon="fa-solid fa-chevron-down" />
      </div>

      <section id="about" class="section">
        <p>something about me</p>
        <img src="https://picsum.photos/200/300" alt="">
      </section>

      <section id="stack" class="section text-center">
        <h2 class="section-title">Tech stack</h2>
        <StackShowcase />
      </section>

      <section id="contact" class="section">
        <h2 class="section-title">Tools i use</h2>
        <ToolsShowcase />
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    scrollToFirstSection () {
      const firstSection = document.querySelector('.section')
      firstSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/_variables.scss';

.Main {
  min-height: 13000px;

  .bg {
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .web-title {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 6rem;
      color: $gray;
      padding: 2rem;

      h1 {
        font-size: 5rem;
        font-family: 'Jost', cursive;
      }

      .badge {
        color: $bgColor;
        background: $mainColor;
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 1rem;
        font-family: 'Inconsolata';
        font-size: large;
      }

      p {
        font-size: 2rem;
        font-family: 'Poppins', sans-serif;
        color: #a1a79f;
        max-width: 50vw;
        margin-bottom: 1rem;
      }

      .contact-button {
        border: solid 3px $mainColor;
        padding: 16px 64px;
        font-size: large;
        font-family: 'Inconsolata';
        transition: box-shadow .3s;

        &:hover {
          box-shadow: inset 0 -65px $mainColor;
          color: $bgColor;
        }
      }
    }

    &.first {
      height: 95vh;
      background: $bgColor;
    }
  }

  .polygon {
    background: #fff;
    height: 10vh;
    width: 100%;
    position: absolute;
    transform: translateY(calc(-80%));
    clip-path: ellipse(60% 100% at 50% 100%);
  }

  .scroll-down {
    position: relative;
    text-align: center;
    transform: translateY(-2rem);
    height: 5vh;
    .icon {
      font-size: 2.5rem;
      color: $bgColor;
      fill: red;
      cursor: pointer;
    }
  }

  .section {
    position: relative;
    padding: 0 8rem;
    padding-bottom: 5rem;

    &.dark {
      background: $bgColor;
    }

    .section-title {
      font-size: 4rem;
      position: relative;
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2rem;
      font-family: "Inconsolata", monospace;
      text-transform: uppercase;
      color: $bgColor;

      &::before, &::after {
        content: '';
        background: $mainColor;
        height: 5px;
        flex: 1;
      }
    }
  }
}
</style>
