<template>
  <div>
    <router-link :to="link">
      <div class="flex p-4">
        <div class="h-16 w-16 gradient-animation rounded-lg">
          <img
            v-if="!placeholder"
            src="https://t4.ftcdn.net/jpg/02/07/87/79/240_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg"
            alt="author image"
            class="h-full rounded-lg"
          />
        </div>
        <div v-if="!placeholder" class="mx-3">
          <h3 class="font-semibold pb-1">
            {{ title }}
          </h3>
          <p class="text-gray-500 text-sm capitalize">
            {{ description | truncate(42) }}
          </p>
        </div>
        <div v-else class="mx-3 p-3">
          <h3 class="h-3 mb-3 w-56 gradient-animation rounded-full"></h3>
          <p class="h-3 w-64 gradient-animation rounded-full"></p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  filters: {
    truncate(text, length) {
      if (text && text.length > length) {
        return text.substring(0, length) + "...";
      } else {
        return text;
      }
    }
  },
  props: {
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    img: {
      type: String,
      default:
        "https://t4.ftcdn.net/jpg/02/07/87/79/240_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg"
    },
    link: { type: String, default: "" },
    placeholder: { type: Boolean, default: false }
  }
};
</script>

<style></style>
