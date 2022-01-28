<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { Chart } from '@antv/g2';
  import { lineChartData } from '@/mock/Home';

  // 定义ref
  const leftRef:object = ref(null);

  onMounted(() => {
    
    initChart(leftRef, {});

  })


  function initChart(domRef:any, options:object = {data: []}){
    let dom:any = domRef.value,
        id = dom.id,
        width = dom.clientWidth,
        height = dom.clientHeight;

    const chart = new Chart({
      container: id,
      width,
      height
    })

    chart.source(options.data)
    chart.interval().position('month*Today').color('z')
    chart.render();
  }

</script>

<template>
  <div class="chart-left mr-60">
    <p class="f-m f-20 bold">Daily Time Log Activity</p>
    <p class="mt-6 f-12 f-gray">Today vs Yesterday</p>

    <div id="line" class="line-chart" ref="leftRef">

    </div>


  </div>
  <div class="chart-right">
    <p class="f-m f-20 bold">Weekly Invoices</p>
    <p class="mt-6 f-12 f-gray">From 12 Oct - 24 Now</p>
  </div>
</template>


<style>
.chart-left, .chart-right{
  height: 300px;
}
.chart-left{
  flex-grow: 1;
}
.chart-right{
  width: 240px;
  flex-shrink: 0;
}
</style>