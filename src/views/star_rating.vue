<template>
  <div class="star_rating p-6">
    <!--  -->
    <div class="room">
      <img src="../assets/images/room_1.jpg" alt="" />
    </div>
    <div class="text-center text-xl px-14 font-bold my-10">
      您在新禾產後護理之家的體驗如何？
    </div>
    <div class="mb-10">
      <starRatingUi />
    </div>
    <p class="text-center">
      感謝您的分享，協助我們為所有入住的媽媽提供更美好的服務體驗！
    </p>
  </div>
</template>

<script>
  import starRatingUi from "@/components/star_rating_ui.vue";

  export default {
    name: "star_rating",
    components: {
      starRatingUi,
    },
  };
</script>

<style lang="scss" scoped></style>
