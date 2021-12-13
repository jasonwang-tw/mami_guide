<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" class="mx-auto" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="bg-white pb-5 mb-5">
      <div class="room">
        <img src="../assets/images/room.jpg" alt="" />
      </div>
      <div class="text-xl font-black text-center mt-5 px-20">
        您在新禾產後護理之家的體驗為何？
      </div>
    </div>
    <!--  -->
    <div class="p-8 bg-white text-center share_msg">
      請分享您在新禾產後護理之家的體驗，協助我們為大家提供更美好的服務體驗
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    name: "Home",
    components: {
      // HelloWorld,
    },
  };
</script>

<style lang="scss" scoped>
  .share_msg {
    min-height: 500px;
  }
</style>
