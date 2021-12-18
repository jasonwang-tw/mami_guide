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
      <starRatingUi @child_star="star_change_path" />
    </div>
    <p class="text-center">
      感謝您的分享，協助我們為所有入住的媽媽提供更美好的服務體驗！
    </p>
    <router-link
      :to="star_after_path"
      class="bg-main py-4 text-center mt-24 text-white text-xl rounded-lg font-bold block"
      >送出</router-link
    >
  </div>
</template>

<script>
  import starRatingUi from "@/components/star_rating_ui.vue";

  export default {
    name: "star_rating",
    data() {
      return {
        star_after_path: "",
      };
    },
    components: {
      starRatingUi,
    },
    watch: {},
    methods: {
      star_change_path(e) {
        // 根據評價設置路徑

        if (e <= 4) {
          this.star_after_path = "/comment";
        } else {
          this.star_after_path = "/goolge_comment";
        }
      },
    },
  };
</script>

<style lang="scss" scoped></style>
