<template>
  <div class="ProjectsSlider">
    <div class="text-center text-6xl text-white-main mb-8 font-inconsolata uppercase">
      {{ currentSlide.title }}
    </div>
    <div class="slider-wrapper">
      <div v-viewer class="slides m-auto">
        <div class="slide previous" @click.stop="handleChangeSlide(-1)">
          <img :src="require('@/assets/images/' + previousSlide.filename)" :alt="previousSlide.title">
        </div>

        <div class="slide current">
          <img :src="require('@/assets/images/' + currentSlide.filename)" :alt="currentSlide.title">
        </div>

        <div class="slide next" @click.stop="handleChangeSlide(1)">
          <img :src="require('@/assets/images/' + nextSlide.filename)" :alt="nextSlide.title">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsSlider',
  data () {
    return {
      slides: [
        { id: 1, title: 'slide 1', filename: 'slide1.png' },
        { id: 2, title: 'slide 2', filename: 'slide2.png' },
        { id: 3, title: 'slide 3', filename: 'slide3.png' }
      ],
      currentId: 1,
      timeout: null,
      interval: null,
      viewerOpened: false
    }
  },
  computed: {
    currentSlide () {
      return this.slides[this.currentId]
    },
    nextSlide () {
      return this.slides[this.currentId + 1] ?? this.slides[0]
    },
    previousSlide () {
      return this.slides[this.currentId - 1] ?? this.slides[this.slides.length - 1]
    }
  },
  methods: {
    update (val = 1) {
      const nextSlideId = this.currentId + val
      document.querySelector('.slide.current img').classList.add('opacity-0')

      this.timeout = setTimeout(() => {
        if (nextSlideId < 0) {
          this.currentId = this.slides.length - 1
        } else if (nextSlideId > this.slides.length - 1) {
          this.currentId = 0
        } else {
          this.currentId = nextSlideId
        }
      }, 300)
    },
    intervalSet () {
      this.interval = setInterval(this.update, 5000)
    },
    handleChangeSlide (val) {
      clearTimeout(this.timeout)
      clearInterval(this.interval)
      this.update(val)
      this.intervalSet()
    }
  },
  mounted () {
    this.intervalSet()
  },
  watch: {
    currentId () {
      document.querySelector('.slide.current img').classList.remove('opacity-0')
    }
  }
}
</script>

<style scoped lang="scss">
.slider-wrapper {
  .slides {
    width: 100%;
    height: 320px;
    perspective: 1000px;

    .slide {
      width: 768px;
      height: inherit;
      position: absolute;
      left: 50%;
      cursor: pointer;
      max-width: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &.previous {
        transform: translateX(-120%) scale(.6) rotateY(-36deg);
      }

      &.current {
        z-index: 3;
        transform: translateX(-50%);

        img {
          transition: opacity .3s;
        }
      }

      &.next {
        transform: translateX(20%) scale(.6) rotateY(36deg);
      }
    }
  }
}
</style>
