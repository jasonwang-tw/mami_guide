<template>
  <div class="star_rating_ui flex justify-center">
    <div
      v-for="(star, i) in star_status"
      :key="i"
      class="star mx-2"
      :class="{ star_checked: star.status === true }"
      @click="active = i + 1"
    ></div>
  </div>
</template>

<script>
  export default {
    name: "star_rating_ui",
    data() {
      return {
        active: "",
        star_status: [
          {
            index: 1,
            status: false,
          },
          {
            index: 2,
            status: false,
          },
          {
            index: 3,
            status: false,
          },
          {
            index: 4,
            status: false,
          },
          {
            index: 5,
            status: false,
          },
        ],
      };
    },
    watch: {
      active() {
        this.star_status.forEach((sf) => {
          if (sf.index <= this.active) {
            sf.status = true;
          } else {
            sf.status = false;
          }
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .star {
    width: 30px;
    height: 30px;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(../assets/images/star.svg);
  }
  .star_checked {
    background-image: url(../assets/images/star_checked.svg);
  }
</style>
