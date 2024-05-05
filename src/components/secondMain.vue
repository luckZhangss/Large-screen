<template>
  <div class="module-box">
    <!-- 左 -->
    <dv-border-box-2 style="flex: 0 1 25%">
      <dv-border-box-1 style="height: 200px">
        <!-- 胶囊图 -->
        <capsuleChart :data-chart="dataChart" />
      </dv-border-box-1>
      <dv-border-box-1 style="height: 200px">
        <!-- 水位图 -->
        <waterChart/>
      </dv-border-box-1>
      <dv-border-box-1 style="height: 200px">
         <!-- 胶囊图 -->
         <capsuleChart :data-chart="dataChart" />
      </dv-border-box-1>
    </dv-border-box-2>
    <!-- 中 -->
    <dv-border-box-8 style="flex: 0 1 50%; height: 600px">
      <!-- 飞线图 -->
     <flylineChart style="width: 100%; height: 100%" :flyPoints="flyPoints"/>
    </dv-border-box-8>
    <!-- 右 -->
    <dv-border-box-8 style="flex: 0 1 25%">
      <dv-border-box-9 style="height: 300px">
          <!-- 胶囊图 -->
          <capsuleChart  style="height: 300px;"/>
      </dv-border-box-9>
      <dv-border-box-9 style="height: 200px">
        <!-- 水位图 -->
      <waterChart :water-colors="['pink','yellow','blue']" :water-data="[33,44,56]"/>
      </dv-border-box-9>
      <dv-border-box-9 style="height: 100px">
          <!-- 胶囊图 -->
          <capsuleChart :data-chart="dataChart" :colors-chart="['red','green','blue','yellow']" style="height: 100px;" />
      </dv-border-box-9>
    </dv-border-box-8>
  </div>
</template>

<script>
import capsuleChart from "./capsuleChart.vue";
import waterChart from "./waterChart.vue";
import flylineChart from "./flylineChart.vue";
export default {
  components: {
    capsuleChart,
    waterChart,
    flylineChart
  },
  data() {
    return {
      dataChart: [
        {
          name: "标题1",
          value: 167,
        },
        {
          name: "标题2",
          value: 123,
        },
        {
          name: "标题3",
          value: 98,
        },
        {
          name: "标题4",
          value: 475,
        },
        {
          name: "标题5",
          value: 66,
        },
      ],
      flyPoints:[
      {
          position: [0.52, 0.235],
          text: "太原",
        },
        {
          position: [0.43, 0.29],
          text: "大同",
        },
        {
          position: [0.59, 0.35],
          text: "阳泉",
        },
        {
          position: [0.53, 0.47],
          text: "长治",
        },
        {
          position: [0.45, 0.54],
          text: "忻州",
        },
        {
          position: [0.36, 0.38],
          text: "晋城",
        },
        {
          position: [0.62, 0.55],
          text: "运城",
        },
        {
          position: [0.56, 0.56],
          text: "朔州",
        },
        {
          position: [0.37, 0.66],
          text: "晋中",
        },
        {
          position: [0.55, 0.81],
          text: "临汾",
        },
        {
          position: [0.55, 0.67],
          text: "吕梁",
        },
        {
          position: [0.37, 0.29],
          text: "济源",
        },
        {
          position: [0.2, 0.36],
          text: "三门峡",
        },
        {
          position: [0.76, 0.41],
          text: "商丘",
        },
        {
          position: [0.59, 0.18],
          text: "鹤壁",
        },
        {
          position: [0.68, 0.17],
          text: "濮阳",
        },
        {
          position: [0.59, 0.1],
          text: "安阳",
        },
      ]
  
    
    };
  },
};
</script>
