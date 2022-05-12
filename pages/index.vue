<template>
  <div class="wrap">
    <Header />
    <main class="Main">
      <div class="hero h-screen bg-dark-gray">
        <MyParticles />
        <div class="web-title font-poppins text-gray-main absolute top-1/2 left-4 right-4 lg:w-auto transform -translate-y-1/2 text-center lg:text-left lg:left-32 2xl:left-72">
          <h1 class="animate__fadeInUp leading-20 text-7xl font-jost">
            Hi! I'm Adrian
          </h1>
          <div class="badge font-inconsolata py-1.5 px-3 text-lg my-4 inline-block text-dark-gray bg-yellow-main">
            Fullstack developer
          </div>
          <p class="animate__fadeInUp mx-auto lg:mx-0 mb-4">
            This is my portfolio. Check out my stack and projects. Contact me anytime.
          </p>
          <button class="contact-button text-lg font-inconsolata">
            Contact me
          </button>
        </div>
      </div>
      <div class="polygon transform -translate-y-3/4 md:-translate-y-full bg-white-main border-b-2 border-white-main" />
      <div class="scroll-down transform -translate-y-8 md:-translate-y-14 absolute -left-1/2">
        <font-awesome-icon
          class="icon animate-bounce-slow"
          icon="fa-solid fa-chevron-down"
          @click="scrollToFirstSection"
        />
      </div>

      <section id="about" class="section about pt-8 md:pt-0 flex justify-center gap-x-12 items-center pb-20 flex-col-reverse md:flex-row bg-white-main">
        <div class="about__content flex-1">
          <h2 class="content__name text-6xl my-4 md:mt-0 md:mb-4 text-dark-gray text-center md:text-left">
            Adrian Jaskot
          </h2>
          <p class="content__desc text-xl max-w-3xl text-justify md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique suscipit vestibulum. Aenean eu justo id lorem tincidunt fermentum. Pellentesque pretium, urna non ullamcorper hendrerit, turpis tortor varius dui, sit amet euismod ante enim non mauris. Cras tempor ipsum eget nunc sollicitudin, non feugiat justo consectetur.
          </p>
        </div>
        <div class="about__photo w-80 text-right">
          <img class="rounded-full w-80 h-80 inline-block" src="https://picsum.photos/200/300" alt="Jaskot Adrian">
        </div>
      </section>

      <div id="stack" class="showcase-sections pb-20 bg-white-main">
        <Showcase />
      </div>

      <section id="projects" class="section projects bg-dark-gray text-gray-main py-40 overflow-x-hidden">
        <ProjectsSlider />
      </section>

      <section id="contact" class="section contact">
        contact me
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      observer: null
    }
  },
  methods: {
    scrollToFirstSection () {
      const firstSection = document.querySelector('.section')
      firstSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  },
  mounted () {
    // const sections = document.querySelectorAll('.section')

    // this.observer = new IntersectionObserver((entries, observer) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add('animate__animated', 'animate__fadeInUp')
    //       observer.unobserve(entry.target)
    //     }
    //   })
    // }, { rootMargin: '0px 0px -300px 0px' })

    // sections.forEach((el) => {
    //   this.observer.observe(el)
    // })
  }
}
</script>

<style lang="scss">
.Main {
  .hero {
    .web-title {
      p {
        font-size: 2rem;
        color: #a1a79f;
        @screen md {
          max-width: 50vw;
        }
      }

      .contact-button {
        border: solid 3px $mainColor;
        padding: 16px 64px;
        transition: box-shadow .3s;

        &:hover {
          box-shadow: inset 0 -65px $mainColor;
          color: $bgColor;
        }
      }
    }
  }

  .polygon {
    height: 10vh;
    width: 100%;
    position: absolute;
    z-index: 2;
    clip-path: ellipse(60% 100% at 50% 100%);
  }

  .scroll-down {
    text-align: center;
    height: 5vh;
    z-index: 3;
    .icon {
      font-size: 2rem;
      color: $bgColor;
      fill: red;
      cursor: pointer;
    }
  }
}
</style>
