<template>
  <div class="booking_ui">
    <!-- year_month -->
    <div class="flex justify-between my-5">
      <div><i class="bi bi-chevron-left"></i></div>
      <div>2021年5月</div>
      <div><i class="bi bi-chevron-right"></i></div>
    </div>
    <!-- week -->
    <div class="flex justify-between text-sm text-gray-400">
      <div class="text-main">日</div>
      <div>一</div>
      <div>二</div>
      <div>三</div>
      <div>四</div>
      <div>五</div>
      <div>六</div>
    </div>
    <!-- day -->
    <div class="flex justify-between text-sm mt-5 mb-10">
      <div
        v-for="(d, i) in booking_day"
        :key="i"
        :class="{ 'text-main': i === 0, day_avtive: i === booking_day_active }"
        @click="booking_day_active = i"
      >
        {{ d }}
      </div>
    </div>
    <!-- time -->
    <div class="grid grid-cols-3 gap-3">
      <div v-for="(t, i) in booking_time" :key="i" class="text-center">
        <div
          class="border py-3 rounded-lg text-sm"
          :class="{
            booking_disable: t.booking === false,
            booking_active: i === booking_time_avtive && t.booking === true,
          }"
          @click="booking(t.booking, i)"
        >
          {{ t.hour }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "booking_ui",
    data() {
      return {
        booking_day_active: "",
        booking_day: [14, 15, 16, 17, 18, 19, 20],
        booking_time_avtive: "",
        booking_time: [
          {
            hour: "10:00",
            booking: true,
          },
          {
            hour: "11:00",
            booking: true,
          },
          {
            hour: "12:00",
            booking: false,
          },
          {
            hour: "13:00",
            booking: true,
          },
          {
            hour: "14:00",
            booking: false,
          },
          {
            hour: "15:00",
            booking: true,
          },
          {
            hour: "16:00",
            booking: true,
          },
          {
            hour: "17:00",
            booking: false,
          },
          {
            hour: "18:00",
            booking: true,
          },
        ],
      };
    },
    methods: {
      booking(e, i) {
        if (e === true) {
          this.booking_time_avtive = i;
        } else {
          return;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .day_avtive {
    position: relative;
    color: white;
    z-index: 1;
    &:before {
      position: absolute;
      content: "";
      background: #f55f8d;
      width: 38px;
      height: 38px;
      z-index: -1;
      left: calc(-50% - 2px);
      top: -50%;
      border-radius: 99px;
    }
  }
  .booking_disable {
    color: gainsboro;
  }
  .booking_active {
    color: white;
    border: none;
    background: linear-gradient(91.97deg, #f55f8d 14.73%, #f8ae56 97.52%);
  }
</style>
