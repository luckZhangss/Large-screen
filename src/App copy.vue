<template>
  <div>
    <!-- <div v-for="item in data" :key="item.id">
      <div style="display:flex ;justify-content: space-between;">
        {{ item.name }}
      </div>
    </div> -->
    <div v-for="item,index in data" :key="item.index" style="padding-top:20px ;">
      {{index + 1}}.
      {{item}}
    </div>
  </div>
</template>

<script>
// import * as echarts from "echarts";
import axios from 'axios'
export default {
 data() {
  return {
      data:[]
  }
 },
 
 created(){
 
    // axios.get('https://fts.jd.com/area/get?fid=-1').then((res)=>{
    //   console.log(res);
    //   this.data = res.data
    // })

    // https://lbs.amap.com/api/webservice/summary/
    axios.get('https://autumnfish.cn/api/joke/list?num=100' ).then((res)=>{
      console.log(res);
      this.data = res.data.data
    })
 
 },
//   mounted(){
   

// var chartDom = document.getElementById('main');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   xAxis: {
//     type: 'category',
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       data: [820, 932, 901, 934, 1290, 1330, 1320],
//       type: 'line',
//       smooth: true
//     }
//   ]
// };

// option && myChart.setOption(option);
//   }
};
</script>

<style lang="scss" scoped></style>
