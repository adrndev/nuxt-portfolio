<template>
  <header class="Header">
    <div class="header-wrapper px-32">
      <div class="logo-wrapper">
        logo
      </div>
      <nav class="menu">
        <ul class="menu-list">
          <li class="menu-item" v-for="item in menuItems" :key="item.title">
            <a :href="item.anchor" @click="scrollTo">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  data () {
    return {
      scrollTop: 0,
      menuItems: [
        {
          title: 'About',
          anchor: '#about'
        },
        {
          title: 'Stack',
          anchor: '#stack'
        },
        {
          title: 'Contact me',
          anchor: '#contact'
        }
      ]
    }
  },
  mounted () {
    this.handleScroll()
    document.addEventListener('scroll', () => {
      this.handleScroll()
    })
  },
  methods: {
    handleScroll () {
      this.scrollTop = document.documentElement.scrollTop

      document.querySelectorAll('.Header .menu .menu-item a').forEach((item) => {
        const section = document.querySelector(item.getAttribute('href'))

        if (
          this.scrollTop + window.innerHeight / 2 > section.offsetTop &&
          this.scrollTop + window.innerHeight / 2 < section.offsetTop + section.offsetHeight
        ) {
          item.parentElement.classList.add('active')
        } else {
          item.parentElement.classList.remove('active')
        }
      })
    },
    scrollTo (ev) {
      ev.preventDefault()

      const hash = ev.target.hash
      const element = document.querySelector(hash)

      if (element.offsetHeight > window.innerHeight - 100) {
        window.scroll({ top: element.offsetTop - 100, behavior: 'smooth' })
      } else {
        window.scroll({ top: element.offsetTop - window.innerHeight / 2 + element.offsetHeight / 2, behavior: 'smooth' })
      }
    }
  },
  watch: {
    scrollTop (newValue, oldValue) {
      const header = document.querySelector('.Header')
      header.classList.toggle('scrolled', newValue > 240)
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/_variables.scss';

html {
  scroll-behavior:smooth;
}

.Header {
  color: $gray;
  position: sticky;
  top: 0;
  z-index: 100;
  background: transparent;
  transition: color .3s;
  font-family: 'Inconsolata', monospace;
  max-height: 120px;
  font-size: 1.5rem;
  box-sizing: border-box;
  height: 100px;

  &.scrolled {
    color: $bgColor;

    &::before {
      content: '';
      background: $mainColor;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      animation: slideDown .3s;
    }
  }

  .header-wrapper {
    margin-top: -100px;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    transition: margin-top .3s;

    .menu {
      .menu-list {
        display: flex;
        .menu-item {
          margin-left: 1rem;
          position: relative;

          &.active {
            // text-decoration: line-through;
            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 50%;
              // transform: translateY(-50%);
              height: 2px;
              background: black;
              animation: slideRight .3s forwards;
            }
            // &::before {
            //   content: '';
            //   position: absolute;
            //   width: 4px;
            //   height: 4px;
            //   background: #071013;
            //   border-radius: 50%;
            //   left: 50%;
            //   transform: translateX(-50%);
            //   bottom: -4px;
            //   animation: fadeIn 1s;
            // }
          }
        }
      }
    }
  }
}

@keyframes slideDown {
  from {
    top: -120px;
  }
  to {
    top: 0;
  }
}

@keyframes slideRight {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
