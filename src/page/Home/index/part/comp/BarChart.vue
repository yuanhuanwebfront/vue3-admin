<script lang="ts" setup>
  import { onMounted } from 'vue';
  import * as echarts from 'echarts';
  import { barChartData } from '@/mock/Home';

  onMounted(() => {
    let myChart = echarts.init(document.getElementById('bar'));

    myChart.setOption({
      tooltip: {},
      xAxis: {
        data: barChartData.map(data => data.name)
      },
      grid: {
        left: 50,
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Today',
          type: 'bar',
          itemStyle: {
            borderRadius: [5, 5, 0, 0]
          },  
          data: barChartData.map((data, idx) => ({
            value: data.value,
            itemStyle: { color: idx % 2 == 0 ? '#51459e' : '#84e8f4'}
          }))
        },
      ]
    })
  })
  
</script>

<template>
  <div id="bar"></div>
</template>

<style scoped>
  #bar{
    height: 300px;
  }
</style>