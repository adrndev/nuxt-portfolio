<template>
  <div class="wrap">
    <Header />
    <main class="Main">
      <div class="hero">
        <MyParticles />
        <div class="web-title absolute top-1/2 left-4 right-4 w-full lg:w-auto transform -translate-y-1/2 text-center lg:text-left">
          <h1 class=" animate__fadeInRight animate__delay-1s">Hi! I'm Adrian</h1>
          <div class="badge py-1.5 px-3 text-lg mb-4 inline-block text-dark-gray bg-yellow-main">Fullstack developer</div>
          <p class=" animate__fadeInUp animate__delay-2s mx-auto lg:mx-0 mb-4">This is my portfolio. Check out my stack and projects. Contact me anytime.</p>
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

      <section id="about" class="section about flex justify-center gap-x-12 items-center">
        <div class="about__content flex-1">
          <h2 class="content__name text-6xl mb-2 pb-2 text-dark-gray">Adrian Jaskot</h2>
          <p class="content__desc text-xl max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique suscipit vestibulum. Aenean eu justo id lorem tincidunt fermentum. Pellentesque pretium, urna non ullamcorper hendrerit, turpis tortor varius dui, sit amet euismod ante enim non mauris. Cras tempor ipsum eget nunc sollicitudin, non feugiat justo consectetur.</p>
        </div>
        <div class="about__photo w-80 text-right">
          <img class="rounded-full w-80 h-80 inline-block" src="https://picsum.photos/200/300" alt="Jaskot Adrian">
        </div>
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
  .hero {
    height: 95vh;
    background: $bgColor;
    .web-title {
      color: $gray;

      @screen lg {
        @apply left-32;
      }

      @screen 2xl {
        @apply left-72;
      }

      h1 {
        font-size: 5rem;
        font-family: 'Jost', cursive;
      }

      .badge {
        font-family: 'Inconsolata';
      }

      p {
        font-size: 2rem;
        font-family: 'Poppins', sans-serif;
        color: #a1a79f;
        max-width: 50vw;
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
    padding-bottom: 5rem;
    @apply px-4;
    @screen lg {
      @apply px-32;
    }

    @screen 2xl {
      @apply px-72;
    }

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

    &.about {
      .about__content {
        .content__name {
          text-shadow: 8px 8px $mainColor;
          font-family: 'Jost', cursive;
        }

        .content__desc {
          font-family: 'Roboto';
          color: #6c6c6c;
        }
      }
    }
  }
}
</style>
