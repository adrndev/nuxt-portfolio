<template>
  <div class="showcase-wrapper">
    <section class="section stack pb-8">
      <div class="section-title">
        Stack
      </div>
      <div class="bubbles grid gap-4 grid-cols-3 md:grid-cols-6 xl:grid-cols-8">
        <div v-for="lang in stack" :key="lang.title" class="bubble w-24 h-24 p-4 m-auto" :title="lang.title">
          <img :src="require('devicon/icons/' + lang.path)" :alt="lang.title + ' icon'">
        </div>
      </div>
    </section>

    <section class="section tools">
      <div class="section-title">
        Tools
      </div>
      <div class="bubbles grid gap-4 grid-cols-3 lg:grid-cols-6 xl:grid-cols-8">
        <div v-for="tool in tools" :key="tool.title" class="bubble w-24 h-24 p-4 m-auto" :title="tool.title">
          <img :src="require('devicon/icons/' + tool.path)" :alt="tool.title + ' icon'">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ShowCase',
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
      ],
      tools: [
        {
          title: 'Photoshop',
          path: 'photoshop/photoshop-plain.svg'
        },
        {
          title: 'Illustator',
          path: 'illustrator/illustrator-plain.svg'
        },
        {
          title: 'Figma',
          path: 'figma/figma-original.svg'
        },
        {
          title: 'Heroku',
          path: 'heroku/heroku-original.svg'
        },
        {
          title: 'Linux',
          path: 'linux/linux-original.svg'
        },
        {
          title: 'npm',
          path: 'npm/npm-original-wordmark.svg'
        },
        {
          title: 'Trello',
          path: 'trello/trello-plain.svg'
        },
        {
          title: 'Visual Studio Code',
          path: 'vscode/vscode-original.svg'
        },
        {
          title: 'Blender',
          path: 'blender/blender-original.svg'
        },
        {
          title: 'Wordpress',
          path: 'wordpress/wordpress-original.svg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.showcase-wrapper {
  text-align: center;
  z-index: 2;
  position: relative;
  .bubbles {
    justify-content: center;

    .bubble {
      overflow: hidden;
      border: solid 5px $bgColor;
      box-shadow: 5px 5px $mainColor;
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
