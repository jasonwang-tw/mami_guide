<template>
  <div class="booking_1 p-6">
    <!--  -->
    <div class="step flex justify-center mb-6">
      <div
        v-for="(s, i) in step"
        :key="i"
        class="mx-6 rounded-full flex justify-center items-center text-white"
        :class="{ active: i === 0 }"
      >
        {{ s }}
      </div>
    </div>
    <!--  -->
    <div class="room relative mb-5">
      <img src="../assets/images/room_1.jpg" alt="" />
      <div class="absolute bottom-3 w-full text-center text-white">
        <div class="flex justify-center items-center">
          <div class="text-xl font-semibold mr-2 -mb-1">新禾產後護理之家</div>
          <div>
            <img src="../assets/images/Pricing_w.png" alt="" srcset="" />
          </div>
        </div>
        <span class="text-sm">100台北市中正區光復南路2號1F</span>
      </div>
    </div>
    <!--  -->
    <div>
      <div class="text-xl font-extrabold text-center">您希望預約的時間</div>
      <!-- booking_ui -->
      <bookingUi />
      <div
        class="bg-main py-4 text-center mt-10 text-white text-2xl rounded-lg font-bold"
      >
        下一步：填寫預約資訊
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import bookingUi from "@/components/booking_ui.vue";

  export default {
    name: "booking_1",
    components: {
      bookingUi,
    },
    data() {
      return {
        step: ["1", "2", "3"],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .step {
    position: relative;
    > div {
      width: 36px;
      height: 36px;
      background: #dfdede;
    }
    > .active {
      background: linear-gradient(91.97deg, #f55f8d 14.73%, #f8ae56 97.52%);
    }
    &:before {
      content: "";
      width: 150px;
      top: calc(50% - 1px);
      position: absolute;
      border: 2px solid #dfdede;
      z-index: -1;
    }
  }
</style>
