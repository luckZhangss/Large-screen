<template>
   <div class="module-box">
        <dv-border-box-13 style="flex: 0 1 50%">
          <!-- <dv-capsule-chart :config="config1" style="height: 200px" /> -->
          <echartsLine />
        </dv-border-box-13>
        <dv-border-box-13 style="flex: 0 1 20%">
          <dv-capsule-chart :config="config1" style="height: 200px" />
        </dv-border-box-13>
        <dv-border-box-13 style="flex: 0 1 30%">
          <dv-water-level-pond :config="config2" style="height: 200px" />
        </dv-border-box-13>
      </div>
</template>

<script>
import echartsLine from '@/components/echartsLine.vue'
  export default {
    components:{
      echartsLine
    },
     data() {
      return {
        config1: {
        data: [
          {
            name: "南阳",
            value: 167,
          },
          {
            name: "周口",
            value: 123,
          },
          {
            name: "漯河",
            value: 98,
          },
          {
            name: "郑州",
            value: 75,
          },
          {
            name: "西峡",
            value: 66,
          },
        ],
        colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
        unit: "单位",
        showValue: true,
      },
      config2: {
        data: [55],
        shape: "roundRect",
        colors: ["green"],
        waveOpacity: 0.2,
      },
      config4: {
        data: [66],
        shape: "roundRect",
        colors: ["pink"],
        waveOpacity: 0.2,
      },
      config3: {
        centerPoint: [0.48, 0.35],
        points: [
          {
            position: [0.52, 0.235],
            text: "新乡",
          },
          {
            position: [0.43, 0.29],
            text: "焦作",
          },
          {
            position: [0.59, 0.35],
            text: "开封",
          },
          {
            position: [0.53, 0.47],
            text: "许昌",
          },
          {
            position: [0.45, 0.54],
            text: "平顶山",
          },
          {
            position: [0.36, 0.38],
            text: "洛阳",
          },
          {
            position: [0.62, 0.55],
            text: "周口",
          },
          {
            position: [0.56, 0.56],
            text: "漯河",
          },
          {
            position: [0.37, 0.66],
            text: "南阳",
          },
          {
            position: [0.55, 0.81],
            text: "信阳",
          },
          {
            position: [0.55, 0.67],
            text: "驻马店",
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
        ],
        bgImgUrl: "http://datav-react.jiaminghi.com/img/flylineChart/map.jpg",
        centerPointImg: {
          url: "	http://datav-react.jiaminghi.com/img/flylineChart/mapCenterPoint.png",
        },
        pointsImg: {
          url: "	http://datav-react.jiaminghi.com/img/flylineChart/mapPoint.png",
        },
      },
      }
     },
  }
</script>