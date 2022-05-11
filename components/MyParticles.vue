<template>
  <Particles
    id="tsparticles"
    :particles-init="particlesInit"
    :options="options"
    class="particles-container"
  />
</template>

<script>
import { loadFull } from 'tsparticles'

export default {
  name: 'MyParticles',
  data () {
    return {
      options: {
        fpsLimit: 120,
        particles: {
          color: {
            value: '#ffffff'
          },
          move: {
            direction: 'top',
            enable: true,
            outModes: {
              default: 'out'
            },
            random: true,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 2 }
          }
        },
        detectRetina: true
      }
    }
  },
  methods: {
    async particlesInit (engine) {
      await loadFull(engine)
    }
  }
}
</script>

<style lang="scss">
.particles-container {
  animation: fadeIn 3s;
}
</style>
