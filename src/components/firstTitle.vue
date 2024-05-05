<template>
    <div class="module-box">
        <!-- 左 -->
        <div style="flex: 0 1 30%">
          <dv-decoration-10 style="height: 5px" />
        </div>

        <!-- 中 -->
        <div style="flex: 0 1 40%" class="d-box">
            <dv-decoration-8 style="height:50px;flex:1" />
            <div style="flex:1;color: aqua;" class="tc" >智慧大数据工厂</div>
            <dv-decoration-8 :reverse="true" style="height:50px;flex:1" />
        </div>

        <!-- 右 -->
        <div style="flex: 0 1 30%">
          <dv-decoration-10 style="height: 5px;transform: rotateY(180deg);" />
        </div>
      </div>
</template>