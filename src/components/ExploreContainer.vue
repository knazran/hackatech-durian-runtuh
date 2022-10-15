<template>
  <div id="container">

    <div class="bg-durianprimary-900 h-36 mb-6 px-6 pt-10">
      <p class="text-gray-200 tracking-wide leading-none font-semibold" style="font-size:12px">BALANCE</p>
      <p><span class="text-gray-200 text-md">RM </span><span
          class="text-gray-200 text-3xl font-bold tracking-wider leading-none">3,400</span></p>
      <button class="bg-duriansecondary-500 rounded-full px-6 py-0.5 text-gray-700" style="font-size:12px">134
        TICKETS</button>
    </div>

    <!-- Announcement Card -->
    <ion-card class="bg-durianprimary-900 mx-6 rounded-lg">
      <ion-card-header>
        <p class="text-gray-200 font-semibold">Unlock more from your paycheck</p>
      </ion-card-header>

      <ion-card-content>
        <p class="text-white">Here's a small text description for the card content. Nothing more, nothing less.</p>

        <button class="text-duriansecondary-500  font-semibold mt-8">Join the Waitlist -></button>
      </ion-card-content>
    </ion-card>


    <ion-card class="bg-durianprimary-700 mx-6 rounded-lg mt-6">
      <ion-card-header class="border-b">
        <p class="text-gray-200 font-semibold">This Week's Pick:</p>
        <p class="text-gray-200 font-bold text-right text-lg mt-3">676-891-192-900</p>
      </ion-card-header>

      <div class="my-4 px-4">
        <p class="text-white">Winning the jackpot of...</p>
        <p class="text-duriansecondary-300  font-semibold mt-3 text-2xl">RM 1 Million!</p>

      </div>
      <div class="my-6 px-4">
        <LuckyDrawCardVue/>
      </div>
    </ion-card>


  </div>
</template>

<script lang="ts">
import LuckyDrawCardVue from '@/components/LuckyDrawCard.vue';
import { IonCard, IonCardContent, IonCardHeader } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'ExploreContainer',
  components: { IonCard, IonCardContent, IonCardHeader, LuckyDrawCardVue }
});
</script>

<style scoped>

</style>
