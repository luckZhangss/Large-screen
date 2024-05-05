<template>
  <div class="content">
    <dv-full-screen-container>
      <!-- 第一行 -->
      <firstTitle />
      <!-- 第二行 -->
      <secondMain />
      <!-- 第三行 -->
        <thirdLine />
    </dv-full-screen-container>
  </div>
</template>

<script>
import firstTitle from '@/components/firstTitle.vue'
import secondMain from '@/components/secondMain.vue'
import thirdLine from '@/components/thirdLine.vue'
export default {
    components:{
        firstTitle,
        secondMain,
        thirdLine
    },
  data() {
    return {
   
    };
  },
};
</script>

<style lang="scss" scoped></style>
