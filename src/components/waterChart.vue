<template>
  <div>
    <!-- 水位图 -->
    <dv-water-level-pond :config="config2" style="height: 200px" />
  </div>
</template>

<script>
export default {
  props: {
    waterData: {
      type: Array,
      default: () => [55],
    },
    waterColors: {
      type: Array,
      default: () => ["green"],
    },
  },
  data() {
    return {
      config2: {
        data: this.waterData,
        shape: "roundRect",
        colors: this.waterColors,
        waveOpacity: 0.2,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
