<template>
  <div id="container">

    <div class="bg-durianprimary-900 h-30 px-6 pt-10">
      <p class="text-gray-200 tracking-wide leading-none font-semibold" style="font-size:12px">BALANCE</p>
      <p><span class="text-gray-200 text-md">RM </span><span
          class="text-gray-200 text-3xl font-bold tracking-wider leading-none">3,400</span></p>
      <button class="bg-duriansecondary-500 rounded-full px-6 py-0.5 mb-3 text-gray-700" style="font-size:12px">134
        TICKETS</button>

    </div>
    <div class="bg-durianprimary-900 h-36 border-0 -translate-y-1" style="height:160px">
      <VueApexCharts height="140px" type="line" :options="options" :series="series"></VueApexCharts>
    </div>
    <div class="bg-durianprimary-900 -translate-y-2 py-2">
      <div class="grid grid-cols-4 text-xs text-center ">
        <p class="text-gray-300">1M</p>
        <p class="text-gray-300">3M</p>
        <p class="text-gray-300">1Y</p>
        <p class="text-white  font-semibold">All</p>
      </div>
      <div class="flex justify-center space-x-4 my-4">
        <button
          class="bg-yellow-400 rounded-full px-8 py-2 text-gray-700 font-semibold shadow-lg text-xs">Deposit</button>
        <button
          class="bg-yellow-400 rounded-full px-8 py-2 text-gray-700 font-semibold shadow-lg text-xs">Withdraw</button>
      </div>
    </div>
    <div class="-translate-y-5">
      <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 170" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(66, 95, 87, 1)" offset="0%"></stop>
            <stop stop-color="rgba(66, 95, 87, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)"
          d="M0,136L34.3,119C68.6,102,137,68,206,51C274.3,34,343,34,411,45.3C480,57,549,79,617,90.7C685.7,102,754,102,823,93.5C891.4,85,960,68,1029,53.8C1097.1,40,1166,28,1234,31.2C1302.9,34,1371,51,1440,53.8C1508.6,57,1577,45,1646,56.7C1714.3,68,1783,102,1851,116.2C1920,130,1989,125,2057,102C2125.7,79,2194,40,2263,42.5C2331.4,45,2400,91,2469,99.2C2537.1,108,2606,79,2674,76.5C2742.9,74,2811,96,2880,99.2C2948.6,102,3017,85,3086,68C3154.3,51,3223,34,3291,45.3C3360,57,3429,96,3497,110.5C3565.7,125,3634,113,3703,93.5C3771.4,74,3840,45,3909,45.3C3977.1,45,4046,74,4114,85C4182.9,96,4251,91,4320,93.5C4388.6,96,4457,108,4526,96.3C4594.3,85,4663,51,4731,48.2C4800,45,4869,74,4903,87.8L4937.1,102L4937.1,170L4902.9,170C4868.6,170,4800,170,4731,170C4662.9,170,4594,170,4526,170C4457.1,170,4389,170,4320,170C4251.4,170,4183,170,4114,170C4045.7,170,3977,170,3909,170C3840,170,3771,170,3703,170C3634.3,170,3566,170,3497,170C3428.6,170,3360,170,3291,170C3222.9,170,3154,170,3086,170C3017.1,170,2949,170,2880,170C2811.4,170,2743,170,2674,170C2605.7,170,2537,170,2469,170C2400,170,2331,170,2263,170C2194.3,170,2126,170,2057,170C1988.6,170,1920,170,1851,170C1782.9,170,1714,170,1646,170C1577.1,170,1509,170,1440,170C1371.4,170,1303,170,1234,170C1165.7,170,1097,170,1029,170C960,170,891,170,823,170C754.3,170,686,170,617,170C548.6,170,480,170,411,170C342.9,170,274,170,206,170C137.1,170,69,170,34,170L0,170Z">
        </path>
      </svg>
    </div>

    <!-- Account Overview -->
    <div class="mx-4 mb-6">
      <div class="flex justify-between align-center items-center">
        <p class="text-durianprimary-900 font-bold text-sm">Your Kebun</p>
        <div class="flex items-center">
          <button class="bg-duriansecondary-500 rounded-full px-2 py-0.5 text-gray-700" style="font-size:12px">New
            +</button>
          <button class="bg-duriansecondary-500 rounded-full ml-2 px-2 py-0.5 text-gray-700"
            style="font-size:12px">Manage ></button>
        </div>
      </div>

      <div class="rounded-md shadow-lg p-4 ">
        <p class="text-xs text-durianprimary-700">Main Account</p>
        <p class="text-md text-durianprimary-900 font-bold mt-1 tracking-wider">RM 3,400</p>
      </div>
    </div>

    <!-- Account Summary -->
    <div class="mx-4 mb-6">
      <div class="flex justify-between align-center items-center">
        <p class="text-durianprimary-900 font-bold text-sm">Account Summary</p>
      </div>

      <div class="rounded-md shadow-lg p-4 ">
        <div class="my-2">
          <p class="text-xs text-durianprimary-700">Latest Realized APY</p>
          <p class="text-md text-durianprimary-900 font-bold mt-1 tracking-wider">3.2%</p>
        </div>
        <div class="my-2">
          <p class="text-xs text-durianprimary-700">Investment Rewards</p>
          <p class="text-md text-durianprimary-900 font-bold mt-1 tracking-wider">RM135</p>
        </div>
        <div class="my-2">
          <p class="text-xs text-durianprimary-700">Prizes</p>
          <p class="text-md text-durianprimary-900 font-bold mt-1 tracking-wider">RM 2,301</p>
        </div>
      </div>
    </div>

    <div class="mx-4 mb-6">
      <div class="flex justify-between align-center items-center">
        <p class="text-durianprimary-900 font-bold text-sm">History</p>
      </div>

      <div class="rounded-md shadow-lg p-4 ">
        <div class="border-b py-2">
          <p class="text-xs text-durianprimary-900 font-bold">16 October 2022</p>
          <div class="my-2 flex justify-between">
            <div>
              <p class="text-xs text-durianprimary-700 leading-none">Type</p>
              <p class="text-xs text-durianprimary-900 font-bold mt-1 tracking-wider leading-none">Prize</p>
            </div>
            <div>
              <p class="text-xs text-durianprimary-700 leading-none">Amount</p>
              <p class="text-xs text-durianprimary-900 font-bold mt-1 tracking-wider leading-none">RM190</p>
            </div>

          </div>
        </div>
        <div class="border-b py-2">
          <p class="text-xs text-durianprimary-900 font-bold">15 October 2022</p>
          <div class="my-2 flex justify-between">
            <div>
              <p class="text-xs text-durianprimary-700 leading-none">Type</p>
              <p class="text-xs text-durianprimary-900 font-bold mt-1 tracking-wider leading-none">Prize</p>
            </div>
            <div>
              <p class="text-xs text-durianprimary-700 leading-none">Amount</p>
              <p class="text-xs text-durianprimary-900 font-bold mt-1 tracking-wider leading-none">RM145</p>
            </div>

          </div>
        </div>
        <div class="border-b py-2">
          <p class="text-xs text-durianprimary-900 font-bold">13 October 2022</p>
          <div class="my-2 flex justify-between">
            <div>
              <p class="text-xs text-durianprimary-700 leading-none">Type</p>
              <p class="text-xs text-durianprimary-900 font-bold mt-1 tracking-wider leading-none">Deposit</p>
            </div>
            <div>
              <p class="text-xs text-durianprimary-700 leading-none">Amount</p>
              <p class="text-xs text-durianprimary-900 font-bold mt-1 tracking-wider leading-none">RM50</p>
            </div>

          </div>
        </div>
        <div class="border-b py-2">
          <p class="text-xs text-durianprimary-900 font-bold">10 October 2022</p>
          <div class="my-2 flex justify-between">
            <div>
              <p class="text-xs text-durianprimary-700 leading-none">Type</p>
              <p class="text-xs text-durianprimary-900 font-bold mt-1 tracking-wider leading-none">Deposit</p>
            </div>
            <div>
              <p class="text-xs text-durianprimary-700 leading-none">Amount</p>
              <p class="text-xs text-durianprimary-900 font-bold mt-1 tracking-wider leading-none">RM30</p>
            </div>

          </div>
        </div>
        <div class="border-b py-2">
          <p class="text-xs text-durianprimary-900 font-bold">21 September 2022</p>
          <div class="my-2 flex justify-between">
            <div>
              <p class="text-xs text-durianprimary-700 leading-none">Type</p>
              <p class="text-xs text-durianprimary-900 font-bold mt-1 tracking-wider leading-none">Prize</p>
            </div>
            <div>
              <p class="text-xs text-durianprimary-700 leading-none">Amount</p>
              <p class="text-xs text-durianprimary-900 font-bold mt-1 tracking-wider leading-none">RM200</p>
            </div>

          </div>
        </div>
        
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
          background: '#425F57',
          animations: {
            enabled: true,
            easing: 'easein',
            speed: 1000,
            animateGradually: {
              enabled: true,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          }
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
  