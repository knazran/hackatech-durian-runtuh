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
      <p class="text-white">The next draw will be released Sunday at 9pm LIVE on TikTok</p>
      <div v-if="countdown" class="grid grid-cols-3 gap-4 mt-4 justify-items-center">
        <div class="bg-durianprimary-900 w-16 h-16 rounded-lg flex flex-col items-center justify-center">
          <p class="text-white font-medium text-center text-xl">00</p>
          <p class="text-duriansecondary-300 font-medium text-center text-md">hours</p>
        </div>
        <div class="bg-durianprimary-900 w-16 h-16 rounded-lg flex flex-col items-center justify-center">
          <p class="text-white font-medium text-center text-xl">00</p>
          <p class="text-duriansecondary-300 font-medium text-center text-md">minute</p>
        </div>
        <div class="bg-durianprimary-900 w-16 h-16 rounded-lg flex flex-col items-center justify-center">
          <p class="text-white font-medium text-center text-xl">{{countdown}}</p>
          <p class="text-duriansecondary-300 font-medium text-center text-md">seconds</p>
        </div>
      </div>
      <div v-else>
        <button class="animate-bounce w-full mt-6 rounded-full bg-durianprimary-900 text-duriansecondary-300 text-center py-2 text-md font-bold">Watch the draw LIVE on Tiktok!</button>
      </div>
    </div>
  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardHeader } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LuckyDrawCard',
  components: { IonCard, IonCardHeader },
  data() {
    return {
      countdown: 10
    }
  },
  watch: {
    countdown: {
      handler(value) {

        if (value > 0) {
          setTimeout(() => {
            this.countdown--;
          }, 1000);
        }

      },
      immediate: true
    }

  }
});
</script>

<style>

</style>