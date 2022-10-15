<template>
  <div id="container">

    <div class="bg-durianprimary-900 h-30 px-6 pt-10">
      <p class="text-gray-200 tracking-wide leading-none font-semibold" style="font-size:12px">BALANCE</p>
      <p><span class="text-gray-200 text-md">RM </span><span
          class="text-gray-200 text-3xl font-bold tracking-wider leading-none">3,400</span></p>
      <button class="bg-duriansecondary-500 rounded-full px-6 py-0.5 text-gray-700" style="font-size:12px">134
        TICKETS</button>

    </div>
    <div class="bg-durianprimary-900 h-36 border-0" style="height:160px">
      <VueApexCharts height="140px" type="line" :options="options" :series="series"></VueApexCharts>
    </div>
    <div  class="bg-durianprimary-900 py-2">
      <div class="grid grid-cols-4 text-xs text-center ">
        <p class="text-gray-300">1M</p>
        <p class="text-gray-300">3M</p>
        <p class="text-gray-300">1Y</p>
        <p class="text-white  font-semibold">All</p>
      </div>
      <div class="flex justify-center space-x-4 my-4">
        <button class="bg-yellow-400 rounded-full px-8 py-2 text-gray-700 font-semibold shadow-lg text-xs">Deposit</button>
        <button class="bg-yellow-400 rounded-full px-8 py-2 text-gray-700 font-semibold shadow-lg text-xs">Withdraw</button>
      </div>
    </div>

  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: 'AccountDetailsContainer',
  components: { VueApexCharts },
  data: function () {
    return {
      options: {
        colors: ['#ffffff'],
        chart: {
          id: 'vuechart-example',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          },
          background: '#425F57'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          labels: {
            show: false
          },
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false,
          },
        },
        stroke: {
          width: 3,
          curve: 'smooth',
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          },
        },
        yaxis: {
          show: false
        }

      },
      series: [{
        name: 'series-1',
        data: [30, 40, 145, 150, 149, 860, 870, 991]
      }]
    }
  }
});
</script>
  
<style scoped>

</style>
  