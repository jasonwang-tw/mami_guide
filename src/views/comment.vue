<template>
  <div class="star_rating p-6">
    <div class="my-8">
      <starRatingUi :parent_click_stop="click_stop"/>
    </div>
    <div class="text-center text-xl px-14 font-bold">
      請告訴我們可以如何做得更好
    </div>
    <div class="my-5">
      <textarea
        name=""
        id=""
        cols="35"
        rows="9"
        class="rounded-xl bg-linghtgary p-5"
      ></textarea>
    </div>
    <p class="text-center">
      我們非常重視您的意見，感謝您不吝分享您的意見，協助我們提供您更美好的服務！
    </p>
    <router-link
      to="#"
      class="bg-main py-4 text-center mt-10 text-white text-xl rounded-lg font-bold block"
      >送出</router-link
    >
  </div>
</template>

<script>
  import starRatingUi from "@/components/star_rating_ui.vue";

  export default {
    name: "star_rating",
    components: {
      starRatingUi,
    },
    data() {
      return {
        click_stop: true,
      };
    },
  };
</script>

<style lang="scss" scoped></style>
