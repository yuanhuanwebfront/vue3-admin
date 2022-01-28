<script lang="ts" setup>
  import ChartArea from './part/ChartArea.vue';
</script>


<template>
  <div class="flex home-page">
    <div class="main">
      <!-- 标题区域 -->
      <div class="title">
        <h2 class="f-m mb-12 f-42">Stats</h2>
        <p class="f-c bold f-12">MONTHLY UPDATES</p>
      </div>

      <!-- 图标区域 -->
      <div class="mt-60 flex chart-area">
        <ChartArea></ChartArea>
      </div>
      



    </div>
    <div class="timing"></div>
  </div>
</template>

<style scoped>
  .home-page{
    height: 100%;
  }

  .home-page .main{
    padding: 50px 24px 24px 50px;
    width: 75%;
    height: 100%;
    border-right: 1px solid #e9ecf1;
  }

</style>