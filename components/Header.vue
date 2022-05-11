<template>
  <header class="Header">
    <div class="header-wrapper px-8 md:px-24">
      <div class="logo-wrapper">
        logo
      </div>
      <nav class="menu hidden md:block">
        <ul class="menu-list">
          <li v-for="item in menuItems" :key="item.title" class="menu-item">
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
          title: 'My projects',
          anchor: '#projects'
        },
        {
          title: 'Contact me',
          anchor: '#contact'
        }
      ]
    }
  },
  watch: {
    scrollTop (newValue, oldValue) {
      const header = document.querySelector('.Header')
      console.log(newValue)
      header.classList.toggle('scrolled', newValue > 120)
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
  }
}
</script>

<style lang="scss">
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
            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 50%;
              height: 2px;
              background: black;
              animation: slideRight .3s forwards;
              pointer-events: none;
            }
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
