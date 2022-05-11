<template>
  <div class="stack-showcase">
    <div class="bubbles grid gap-4 grid-cols-8 lg:grid-cols-6 xl:grid-cols-8">
      <div class="bubble w-24 h-24 p-4 m-auto" v-for="lang in stack" :key="lang.title" :title="lang.title">
        <img :src="require('devicon/icons/' + lang.path)" :alt="lang.title + ' icon'">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StackShowcase',
  data () {
    return {
      stack: [
        {
          title: 'Docker',
          path: 'docker/docker-original.svg'
        },
        {
          title: 'Kubernetes',
          path: 'kubernetes/kubernetes-plain.svg'
        },
        {
          title: 'Javascript',
          path: 'javascript/javascript-original.svg'
        },
        {
          title: 'Typescript',
          path: 'typescript/typescript-original.svg'
        },
        {
          title: 'NodeJs',
          path: 'nodejs/nodejs-original.svg'
        },
        {
          title: 'Express',
          path: 'express/express-original.svg'
        },
        {
          title: 'VueJs',
          path: 'vuejs/vuejs-original.svg'
        },
        {
          title: 'NuxtJs',
          path: 'nuxtjs/nuxtjs-original.svg'
        },
        {
          title: 'Sass',
          path: 'sass/sass-original.svg'
        },
        {
          title: 'Git',
          path: 'git/git-original.svg'
        },
        {
          title: 'GraphQL',
          path: 'graphql/graphql-plain.svg'
        },
        {
          title: 'PHP',
          path: 'php/php-original.svg'
        },
        {
          title: 'Symfony',
          path: 'symfony/symfony-original.svg'
        },
        {
          title: 'MongoDB',
          path: 'mongodb/mongodb-original.svg'
        },
        {
          title: 'Postgresql',
          path: 'postgresql/postgresql-original.svg'
        },
        {
          title: 'MySQL',
          path: 'mysql/mysql-original.svg'
        },
        {
          title: 'HTML5',
          path: 'html5/html5-original.svg'
        },
        {
          title: 'CSS3',
          path: 'css3/css3-original.svg'
        },
        {
          title: 'TailwindCSS',
          path: 'tailwindcss/tailwindcss-plain.svg'
        },
        {
          title: 'Jest',
          path: 'jest/jest-plain.svg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/_variables.scss';

.stack-showcase {
  text-align: center;
  z-index: 2;
  position: relative;
  .bubbles {
    // display: grid;
    // grid-template-columns: repeat(6, 128px);
    // gap: 2rem 5%;
    justify-content: center;

    .bubble {
      // width: 128px;
      // height: 128px;
      overflow: hidden;
      border: solid 8px $bgColor;
      box-shadow: 8px 8px $mainColor;
      // padding: 2rem;
      box-sizing: border-box;
      transition: box-shadow .3s;
      img {
        transition: filter .3s;
        filter: grayscale(1);
      }
      &:hover {
        box-shadow: 8px 8px $mainColor, inset 0 -128px $mainColor;
        color: $bgColor;
        img {
          filter: none;
        }
      }
    }
  }
}
</style>
