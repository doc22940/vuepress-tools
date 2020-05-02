<template>
  <div>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80");'
        >
          <span class="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Vuepress Tools
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  Everything you need to start creating Great Documentation
                  using Vuepress
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
      <section class="pb-20 bg-teal-100 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <i class=" text-2xl el-icon-magic-stick"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Vuepress Plugins</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Add extra functionality to your Vuepress project
                    efortlessly!
                  </p>
                  <nuxt-link to="/plugins">
                    <el-button>
                      Explore Plugins
                    </el-button>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                  >
                    <i class=" text-2xl el-icon-brush"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Vuepress Themes</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Add a touch of beauty to your Vuepress project with no time!
                  </p>
                  <nuxt-link to="/themes">
                    <el-button>
                      Explore Themes
                    </el-button>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                  >
                    <i class=" text-2xl el-icon-suitcase"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Projects</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    See Open-source live examples of great sites built with
                    Vuepress!
                  </p>
                  <nuxt-link to="/projects">
                    <el-button>
                      Explore Projects
                    </el-button>
                  </nuxt-link>
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
          <el-carousel
            :interval="5000"
            arrow="always"
            type="card"
            height="400px"
          >
            <el-carousel-item v-for="item in 4" :key="item">
              <div class="h-full w-full bg-blue-900 text-center p-10">
                <div>
                  <h2 class="text-white text-2xl">Title</h2>
                  <p class="text-base text-gray-400">description</p>
                </div>
                <div class="pt-2">
                  <nuxt-link to="/">
                    <el-button type="primary">
                      Link
                    </el-button>
                  </nuxt-link>
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
                Here are the people behined this website, you can be one of
                them, this website is free and open-source
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
      <section class="pb-20 relative block bg-gray-900">
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
              class="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Made with Love ❤️ by
                <a
                  href="http://ahmadmostafa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Ahmad Mostafa</a
                >
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name: 'index',
  components: {}
}
</script>

<style lang="scss">
.bg-gradient--1 {
  background: linear-gradient(to right, #00c9ff, #92fe9d);
}
</style>
