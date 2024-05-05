<template>
  <div class="content">
    <dv-full-screen-container>
      <!--  -->
      <div class="module-box">
        <dv-decoration-8 :reverse="true" style="width:100%;height:60px;" />
        <dv-decoration-5 style="width:100%;height:60px;" title="大数据" > 大数据</dv-decoration-5>
        <dv-decoration-8 style="width:100%;height:60px;" />
      </div>
      <div class="module-box">
        <!-- 头 -->
        <!-- flex:0 1 ，0代表放大的比例， 1代表缩小的比例 -->
        <div style="flex: 0 1 50%">
          <dv-border-box-8 :reverse="true" style="width: 100%; height: 200px">
            <div class="module-box">
             
              <dv-decoration-9 style="width:30%;height:200px;">88%</dv-decoration-9>
              <dv-conical-column-chart
                :config="config6"
                style="width: 70%; height: 200px"
              />
            </div>
          </dv-border-box-8>
        </div>

        

        <!-- 右 -->
        <div style="flex: 0 1 50%">
          <dv-border-box-8 :reverse="true" style="width: 100%; height: 200px">
            <dv-capsule-chart
              :config="config"
              style="width: 100%; height: 200px"
            />
          </dv-border-box-8>
        </div>
      </div>
      <!-- 中间 -->
      <div class="module-box">
        <!-- 左 -->
        <div style="flex: 0 1 25%">
          <dv-border-box-1 style="width: 100%; height: 100px"
            ><dv-water-level-pond
              :config="config1"
              style="width: 100%; height: 100px"
          /></dv-border-box-1>
          <dv-border-box-1 style="width: 100%; height: 100px">
            <dv-percent-pond
              :config="config7"
              style="width: 100%; height: 100px"
            />
          </dv-border-box-1>
          <dv-border-box-1 style="width: 100%; height: 100px"
            >
            <dv-digital-flop :config="config8" style="width:200px;height:50px;" />
            </dv-border-box-1
          >
        </div>

        <!-- 中 -->
        <div style="flex: 0 1 50%">
          <dv-border-box-8 style="width: 100%; height: 300px">
            <dv-flyline-chart
              :config="config5"
              style="width: 100%; height: 100%"
            />
          </dv-border-box-8>
        </div>
        <!-- 右 -->
        <div style="flex: 0 1 25%">
          <dv-border-box-1 style="width: 100%; height: 300px"
            ><dv-scroll-ranking-board
              :config="config3"
              style="width: 500px; height: 300px"
          /></dv-border-box-1>
        </div>
      </div>

      <!-- 一行两等分 -->
      <!-- 尾部 -->
      <div style="display: flex; background-color: black">
        <div style="flex: 0 1 60%">
          <dv-border-box-3 style="width: 100%; height: 200px"
            ><dv-scroll-board
              :config="config2"
              style="width: 100%; height: 200px"
          /></dv-border-box-3>
        </div>
        <!-- 右 -->
        <div style="flex: 0 1 40%">
          <dv-border-box-3 style="width: 100%; height: 200px">
            <div class="module-box">
              <dv-active-ring-chart
              :config="config4"
              style="width: 100%; height: 200px"
            />
            <dv-charts :option="option" style="width: 100%;height: 200px" />
            <dv-decoration-12 style="width:100%;height:200px;" />
            </div>
            
          </dv-border-box-3>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        data: [
          {
            name: "南阳",
            value: 167,
          },
          {
            name: "周口",
            value: 67,
          },
          {
            name: "漯河",
            value: 123,
          },
          {
            name: "郑州",
            value: 55,
          },
          {
            name: "西峡",
            value: 98,
          },
        ],
        unit: "单位",
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        showValue: true
        // data: [66],
      },
      config5: {
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
      config1: {
        data: [66],
      },
      config2: {
        header: ["列1", "列2", "列3"],
        data: [
          ["行1列1", "行1列2", "行1列3"],
          ["行2列1", "行2列2", "行2列3"],
          ["行3列1", "行3列2", "行3列3"],
          ["行4列1", "行4列2", "行4列3"],
          ["行5列1", "行5列2", "行5列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行7列1", "行7列2", "行7列3"],
          ["行8列1", "行8列2", "行8列3"],
          ["行9列1", "行9列2", "行9列3"],
          ["行10列1", "行10列2", "行10列3"],
        ],
      },
      config3: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 78,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
          {
            name: "信阳",
            value: 45,
          },
          {
            name: "漯河",
            value: 29,
          },
        ],
      },
      config4: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 78,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
        ],
      },
      config6: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 71,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
          {
            name: "信阳",
            value: 35,
          },
          {
            name: "漯河",
            value: 15,
          },
        ],
        img: [
          "	http://datav.jiaminghi.com/img/conicalColumnChart/1st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/2st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/3st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/4st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/5st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/6st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/7st.png",
        ],
      },
      config7: {
        value: 99,
        borderWidth: 5,
        borderRadius: 10,
        borderGap: 5,
      },
      option:{
        title: {
    text: '剩余油量表',
    style: {
      fill: '#fff'
    }
  },
  series: [
    {
      type: 'gauge',
      data: [ { name: 'itemA', value: 55 } ],
      center: ['50%', '55%'],
      axisLabel: {
        formatter: '{value}%',
        style: {
          fill: '#fff'
        }
      },
      axisTick: {
        style: {
          stroke: '#fff'
        }
      },
      animationCurve: 'easeInOutBack'
    }
  ]
      }

    };
    
  },
};



</script>

<style lang="scss" scoped></style>
