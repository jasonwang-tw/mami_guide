<template>
  <div class="booking bg-linghtgary">
    <div class="bg-white pb-5 mb-5 block">
      <div class="room">
        <img src="../assets/images/room.jpg" alt="" />
      </div>

      <div class="text-center mt-5 px-6">
        <div class="flex justify-center items-center">
          <div class="text-xl font-semibold mr-2">新禾產後護理之家</div>
          <div><img src="../assets/images/Pricing.png" alt="" srcset="" /></div>
        </div>
        <span class="text-sm">100台北市中正區光復南路2號1F</span>
      </div>
    </div>

    <div class="bg-white p-6 block">
      <div class="text-xl font-extrabold">您希望預約的時間</div>
      <!-- booking_ui -->
      <bookingUi />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import bookingUi from "@/components/booking_ui.vue";

  export default {
    name: "booking",
    components: {
      bookingUi,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped></style>
