<template>
  <div class="star_rating_ui flex justify-center">
    <div
      v-for="(star, i) in star_status"
      :key="i"
      class="star mx-2"
      :class="{ star_checked: star.status === true }"
      @click="click_stop_value(star, i)"
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
    props: {
      parent_click_stop: Boolean,
    },
    watch: {},
    methods: {
      click_stop_value(e, i) {
        var star_len = "";

        if (this.parent_click_stop === true) {
          star_len = localStorage.getItem("star_length");
        } else {
          this.active = i + 1;
          star_len = this.active;

          this.$emit("child_star", star_len);
          localStorage.setItem("star_length", star_len);
        }

        this.star_status.forEach((sf) => {
          if (sf.index <= star_len) {
            sf.status = true;
          } else {
            sf.status = false;
          }
        });
      },
    },
    mounted() {
      this.click_stop_value();
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
