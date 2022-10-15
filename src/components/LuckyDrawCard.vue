<template>
    <ion-card class="bg-durianprimary-700 mx-6 rounded-lg mt-6 shadow-xl">
      <ion-card-header class="border-b">
        <p class="text-gray-200 font-semibold">This Week's Pick:</p>
        <p class="text-gray-200 font-bold text-right text-lg mt-3">676-891-192-900</p>
      </ion-card-header>

      <div class="my-4 px-4">
        <p class="text-white">Winning the jackpot of...</p>
        <p class="text-duriansecondary-300  font-semibold mt-3 text-2xl">RM 1 Million!</p>

      </div>
      <div class="my-6 px-4">
        <p class="text-white">The next draw will be released Sunday at 9pm LIVE in TikTok</p>
        <div class="grid grid-cols-3 gap-4 mt-4 justify-items-center">
          <div class="bg-durianprimary-900 w-16 h-16 rounded-lg flex flex-col items-center justify-center">
            <p class="text-white font-medium text-center text-xl">20</p>
            <p class="text-duriansecondary-300 font-medium text-center text-md">hours</p>
          </div>
          <div class="bg-durianprimary-900 w-16 h-16 rounded-lg flex flex-col items-center justify-center">
            <p class="text-white font-medium text-center text-xl">29</p>
            <p class="text-duriansecondary-300 font-medium text-center text-md">minute</p>
          </div>
          <div class="bg-durianprimary-900 w-16 h-16 rounded-lg flex flex-col items-center justify-center">
            <p class="text-white font-medium text-center text-xl">50</p>
            <p class="text-duriansecondary-300 font-medium text-center text-md">seconds</p>
          </div>
        </div>
      </div>
    </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardHeader } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LuckyDrawCard',
  components: { IonCard, IonCardHeader }
});
</script>

<style>

</style>