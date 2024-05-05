<template>
  <div>
    <!-- <span class="demonstration">默认 click 触发子菜单</span>
    <el-cascader v-model="value" :options="options" filterable> </el-cascader> -->
   <router-view></router-view>
  </div>
</template>

<script>
// import req from '@/utils/req'
export default {
  data() {
    return {
  //     value: ['1','1-1','1-1-1'],
  //     options: [
  //       {
  //         value: '1',
  //         label: '山西省',
  //         children: [
  //           {
  //             value: "1-1",
  //             label: "忻州市",
  //             children:[
  //               {
  //                 value:'1-1-1',
  //                 label:'忻府区'
  //               }
  //             ]
  //           },
  //           {
  //             value: "太原市",
  //             label: "太原市",
  //             children:[
  //               {
  //                 value:'小店区',
  //                 label:'小店区'
  //               }
  //             ]
  //           }
  //         ],
  //       },
  //     ],
    };
  },
  // created(){
  //   req.get('').then((res)=>{
  //     console.log(res);
  //   })
  // },
  // mounted(){
  //   req.get('').then((res)=>{
  //     console.log(res);
  //   })
  // }
};
</script>

<style lang="scss" scoped></style>
