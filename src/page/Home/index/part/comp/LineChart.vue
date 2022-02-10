<script lang="ts" setup>
  import { onMounted } from 'vue';
  import * as echarts from 'echarts';
  import { lineChartData } from '@/mock/Home';

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
  <div id="line" class="line-chart" ref="leftRef"></div>
</template>

<style>
  .line-chart{
    height: 300px;
  }
</style>