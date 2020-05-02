<template>
  <main>
    <div
      class="relative pt-16 pb-32 flex content-center items-center justify-center"
      style="min-height: 75vh;"
    >
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover bg-gradient--1"
      ></div>
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div class="pr-12">
              <h1 class="text-white font-semibold text-5xl">
                Vuepress Tools
              </h1>
              <p class="mt-4 text-lg text-gray-300">
                Everything you need to start creating Great Documentation using
                Vuepress
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style="height: 70px; transform: translateZ(0px);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-teal-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <section class="pb-20 bg-teal-100 -mt-40">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div
            v-for="card of headerCards"
            :key="card.link"
            class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
          >
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient--2"
                >
                  <i class="text-2xl" :class="card.icon"></i>
                </div>
                <h6 class="text-xl font-semibold">{{ card.title }}</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  {{ card.description }}
                </p>
                <router-link :to="card.link">
                  <el-button> Explore {{ card.title }} </el-button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center text-center mb-24">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold">
              Chosen for you
            </h2>
            <p class="text-lg leading-relaxed m-4 text-gray-600">
              Check out these tools we picked for you!
            </p>
          </div>
        </div>
        <el-carousel :interval="5000" arrow="always" type="card" height="400px">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="h-full w-full bg-teal-900 text-center p-10">
              <div>
                <h2 class="text-white text-2xl">Title</h2>
                <p class="text-base text-gray-400">description</p>
              </div>
              <div class="pt-2">
                <router-link to="/">
                  <el-button type="primary">
                    Link
                  </el-button>
                </router-link>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>
    <section class="relative pt-20 pb-48">
      <div
        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style="height: 80px; transform: translateZ(0px);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-24">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold">
              Contribute to this website
            </h2>
            <p class="text-lg leading-relaxed m-4 text-gray-600">
              Here are the people behined this website, you can be one of them,
              this website is free and open-source
            </p>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                alt="Ahamd Mostafa"
                src="../assets/images/Ahmad-Mostafa.png"
                class="shadow-lg rounded-full max-w-full mx-auto"
                style="max-width: 120px;"
              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">Ahmad Mostafa</h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Software Engineer at @britecore
                </p>
              </div>
            </div>
          </div>
          <div
            class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
            v-for="i of 3"
            :key="i"
          >
            <div class="px-6">
              <img
                alt="Be the next"
                src="../assets/images/anonymous.jpg"
                class="shadow-lg rounded-full max-w-full mx-auto"
                style="max-width: 120px;"
              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">You?</h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Contribuote Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-20 relative block bg-teal-900">
      <div
        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style="height: 80px; transform: translateZ(0px);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-teal-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <footer class="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div class="flex flex-wrap text-center justify-center">
          <div class="w-full lg:w-6/12 px-4">
            <p class="text-lg leading-relaxed mt-4 mb-4 text-teal-200">
              Made with Love ❤️ by
              <a
                href="http://github.com/arab-open-source/vuepress-tools"
                target="_blank"
                rel="noopener noreferrer"
                class="text-teal-100 px-1 hover:text-teal-500"
                >Arab Open-Source</a
              >
            </p>
          </div>
        </div>
      </footer>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      headerCards: [
        {
          title: "Vuepress Plugins",
          decsription:
            "Add extra functionality to your Vuepress project efortlessly!",
          link: "/plugins",
          icon: "el-icon-magic-stick"
        },
        {
          title: "Vuepress Themes",
          decsription:
            "Add a touch of beauty to your Vuepress project with no time!",
          link: "/themes",
          icon: "el-icon-brush"
        },
        {
          title: "Vuepress Projects",
          decsription:
            "See Open-source live examples of great sites built with Vuepress!",
          link: "/projects",
          icon: "el-icon-suitcase"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.bg-gradient--1 {
  background: linear-gradient(
    to right,
    lighten($--color-primary, 20%),
    darken($--color-primary, 10%)
  );
}
.bg-gradient--2 {
  background: linear-gradient(
    to right,
    $--color-primary,
    lighten($--color-primary, 10%)
  );
}
</style>
