<template>
  <div class="goolge_comment p-6">
    <!--  -->
    <div class="room">
      <img src="../assets/images/room_1.jpg" alt="" />
    </div>
    <div class="text-center text-xl px-10 font-bold mt-10">
      您願意將新禾產後護理之家在Google留下評論推薦給朋友或其他媽咪嗎？
    </div>
    <!--  -->
    <div class="flex justify-center my-10">
      <div
        v-for="(c, i) in can_share"
        :key="i"
        class="mx-8"
        @click="face_active(), (c.checked = true)"
      >
        <template v-if="c.checked === false">
          <img :src="c.img_before" alt="" class="mx-auto mb-3" />
          <div>{{ c.text }}</div>
        </template>
        <template v-else>
          <img :src="c.img_after" alt="" class="mx-auto mb-3" />
          <div class="text-main">{{ c.text }}</div>
        </template>
      </div>
    </div>
    <!--  -->
    <p class="text-center">
      您與全球數百萬的在地嚮導協助使用者發掘可以安心造訪或購物的最佳去處。您提供的所有評論、相片和更新內容均有助於大眾掌握最新資訊，這在今年尤為重要。
    </p>
    <router-link
      to="#"
      class="bg-main py-4 text-center mt-16 text-white text-xl rounded-lg font-bold block"
      >送出</router-link
    >
  </div>
</template>

<script>
  export default {
    name: "goolge_comment",
    data() {
      return {
        can_share: [
          {
            img_before: require("../assets/images/no_face.svg"),
            img_after: require("../assets/images/no_face_active.svg"),
            checked: false,
            text: "完全不會",
          },
          {
            img_before: require("../assets/images/yes_face.svg"),
            img_after: require("../assets/images/yes_face_active.svg"),
            checked: false,
            text: "我很樂意",
          },
        ],
      };
    },
    methods: {
      face_active() {
        this.can_share.forEach((can) => {
          can.checked = false;
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .face_img {
    height: 38px;
    overflow: hidden;
  }
  .active_css {
    .face {
      margin-top: -38px;
    }
  }
</style>
