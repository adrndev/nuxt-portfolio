<template>
  <div class="ContactMe">
    <div class="contact-form-wrapper flex bg-secondary shadow-inner -mt-32 text-gray-main flex-col xl:flex-row">
      <div class="form-wrapper w-full xl:w-3/5 p-16 text-dark-gray">
        <form class="h-full w-full flex flex-col">
          <div class="input-row flex w-full gap-6 mb-6 flex-col sm:flex-row">
            <input
              type="text"
              placeholder="Name"
              class="w-full bg-opacity-80 text-xl bg-white-main p-4">
            <input
              type="text"
              placeholder="Surname"
              class="w-full bg-opacity-80 text-xl bg-white-main p-4">
          </div>
          <input
            type="text"
            placeholder="E-mail"
            class="w-full bg-opacity-80 text-xl bg-white-main p-4 mb-6">
          <textarea
            placeholder="Your message.."
            rows="8"
            class="w-full h-full bg-opacity-80 text-xl bg-white-main resize-none p-4 flex-1">
          </textarea>

          <div class="submit-wrapper mt-6">
            <button class="bg-yellow-main py-4 w-full text-xl">Send</button>
          </div>
        </form>
      </div>

      <div class="sidebar p-16 w-full xl:w-2/5 relative">
        <img src="@/assets/images/form-bg.webp" class="absolute w-full h-full object-cover left-0 top-0" alt="">
        <div class="bg-white-main text-dark-gray bg-opacity-80 relative m-auto h-full w-full  md:w-3/4 xl:w-full p-6 flex flex-col justify-between">
          <div>
            <h2 class="text-2xl border-b border-gray-main pb-4 mb-4">Adrian Jaskot</h2>
            <h3 class="flex justify-between border-b border-dark-gray mb-4">
              <font-awesome-icon icon="fa-solid fa-at" />
              <a class="no-underline" href="mailto:real.adrn@gmail.com">real.adrn@gmail.com</a>
            </h3>
            <h3 class="flex justify-between border-b border-dark-gray mb-4">
              <font-awesome-icon icon="fa-solid fa-phone" />
              <a class="no-underline" href="callto:+48537833791">+48 537 833 791</a>
            </h3>
          </div>
          <div class="xl:self-end text-center">
            <a href="https://github.com/adrndev" class="icon-wrapper text-3xl">
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
            <a href="https://github.com/adrndev" class="icon-wrapper text-3xl">
              <font-awesome-icon icon="fa-brands fa-facebook" />
            </a>
            <a href="https://github.com/adrndev" class="icon-wrapper text-3xl">
              <font-awesome-icon icon="fa-brands fa-behance" />
            </a>
            <a href="https://github.com/adrndev" class="icon-wrapper text-3xl">
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactMe'
}
</script>

<style lang="scss">
.ContactMe {
  .contact-form-wrapper {
    min-height: 640px;
  }

  input[type=text]:focus,
  textarea:focus {
    outline: none;
  }

  .icon-wrapper {
    position: relative;

    @screen xl {
      display: block;
    }

    &::before {
      content: '';
      position: absolute;
      right: -12px;
      top: 0;
      width: 5px;
      height: 100%;
      background: transparent;
      transition: background .3s;
    }

    &:hover::before {
      background: $bgColor;
    }
  }
}
</style>
