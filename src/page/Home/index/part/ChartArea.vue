<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts';
  import { lineChartData } from '@/mock/Home';

  // 定义ref
  const leftRef:object = ref(null);

  onMounted(() => {

    let myChart = echarts.init(document.getElementById('line'));

    myChart.setOption({
      color: ['#51459e', '#84e8f4'],
      tooltip: {},
      xAxis: {
        data: lineChartData.map(data => data.month)
      },
      grid: {
        left: 50
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Today',
          type: 'line',
          smooth: true,
          stack: 'total',
          lineStyle: {width: 4},
          data: lineChartData.map(data => data.Today)
        },
        {
          name: 'Yesterday',
          type: 'line',
          stack: 'total',
          smooth: true,
          lineStyle: {width: 4},
          data: lineChartData.map(data => data.Yesterday)
        },
      ]
    })

  })

</script>

<template>
  <div class="chart-left mr-60">
    <p class="f-m f-20 bold">Daily Time Log Activity</p>
    <p class="mt-6 f-12 f-gray">Today vs Yesterday</p>

    <div id="line" class="line-chart" ref="leftRef"></div>


  </div>
  <div class="chart-right">
    <p class="f-m f-20 bold">Weekly Invoices</p>
    <p class="mt-6 f-12 f-gray">From 12 Oct - 24 Now</p>
  </div>
</template>


<style scoped>
.chart-left, .chart-right{
  height: 300px;
}
.chart-left{
  flex-grow: 1;
}
.line-chart{
  height: 300px;
}
.chart-right{
  width: 240px;
  flex-shrink: 0;
}
</style>