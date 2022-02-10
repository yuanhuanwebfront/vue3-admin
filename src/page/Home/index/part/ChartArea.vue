<script lang="ts" setup>

  import LineChart from './comp/LineChart.vue';
  import BarChart from './comp/BarChart.vue';

</script>

<template>
  <div class="chart-left mr-20">
    <p class="f-m f-20 bold">Daily Time Log Activity</p>
    <p class="mt-6 f-12 f-gray">Today vs Yesterday</p>
    <LineChart></LineChart>
  </div>
  <div class="chart-right">
    <p class="f-m f-20 bold">Weekly Invoices</p>
    <p class="mt-6 f-12 f-gray">From 12 Oct - 24 Now</p>
    <BarChart></BarChart>
  </div>
</template>


<style scoped>
.chart-left, .chart-right{
  height: 300px;
}
.chart-left{
  flex-grow: 1;
}
.chart-right{
  width: 340px;
  flex-shrink: 0;
}
</style>