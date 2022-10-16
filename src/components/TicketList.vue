<template>
    <ion-card class="bg-duriansecondary-300 mx-6 rounded-lg mt-6 shadow-xl">
      <ion-card-header class="border-b">
        <div class="flex justify-between align-center">
          <p class="text-duriansecondary-400 align-bottom">YOU HAVE</p>
          <button class="bg-duriansecondary-450 rounded-full text-white py-1 px-3" style="font-size:12px">My
            Stats</button>
        </div>
        <p class="text-lg text-durianprimary-900 font-semibold">134 Tickets</p>
        <p class=" text-duriansecondary-400 mt-1" style="font-size:12px">Show pool play tickets</p>
      </ion-card-header>

      <div class="my-4 px-4">
        <div class="flex align-center">
          <div class="text-durianprimary-900 rounded-full p-1 align-middle text-center text-lg">
            <ion-icon :icon="ticketOutline" />
          </div>
          <div class="flex justify-center flex-col">
            <p class="pl-1 text-durianprimary-900 font-semibold leading-none align-middle" style="font-size:12px">You
              have a total of 134 tickets this week including all of your pools!</p>
          </div>
        </div>
        <div class="flex align-center">
          <div class="text-durianprimary-900 rounded-full p-1 align-middle text-center text-lg">
            <ion-icon :icon="peopleOutline" />
          </div>
          <div class="flex justify-center flex-col">
            <p class="pl-1 text-durianprimary-900 font-semibold leading-none align-middle" style="font-size:12px">133 of
              your tickets are in pool play. </p>
          </div>
        </div>

        <p class=" text-duriansecondary-400 mt-3 underline font-semibold" style="font-size:12px">How much can I win?</p>
      </div>
      
      <TicketBreakVue/>

      <div class="px-4 py-4">
          <p class="text-duriansecondary-400 align-bottom">YOUR TICKETS</p>
          <p class="text-durianprimary-900 font-bold text-right text-md mt-1">512-621-776-124</p>
          <div class="mt-4">
            <button class="w-full rounded-full bg-duriansecondary-450 text-gray-200 text-center py-0.5" style="font-size:12px">Pool Payout: 100%</button>
          </div>
          <div class="flex justify-between mt-1">
            <button class="rounded-full bg-duriansecondary-450 text-gray-200 text-center py-0.5 px-4" style="font-size:12px">Match  3: RM15*</button>
            <button class="rounded-full bg-duriansecondary-450 text-gray-200 text-center py-0.5 px-4" style="font-size:12px">Match  DH: RM75*</button>

          </div>
      </div>
      <TicketBreakVue/>

      <div class=" px-4 py-4">
          <p class="text-durianprimary-900 font-bold text-right text-md mt-1">825-178-614-733</p>
          <div class="mt-4">
            <button class="w-full rounded-full bg-duriansecondary-450 text-gray-200 text-center py-0.5" style="font-size:12px">Pool Payout: 100%</button>
          </div>
          <div class="flex justify-between mt-1">
            <button class="rounded-full bg-duriansecondary-450 text-gray-200 text-center py-0.5 px-4" style="font-size:12px">Match  3: RM15*</button>
            <button class="rounded-full bg-duriansecondary-450 text-gray-200 text-center py-0.5 px-4" style="font-size:12px">Match  DH: RM75*</button>

          </div>
      </div>
      <TicketBreakVue/>

      <div class="px-4 py-4">
          <p class="text-durianprimary-900 font-bold text-right text-md mt-1">162-632-819-184</p>
          <div class="mt-4">
            <button class="w-full rounded-full bg-duriansecondary-450 text-gray-200 text-center py-0.5" style="font-size:12px">Pool Payout: 100%</button>
          </div>
          <div class="flex justify-between mt-1">
            <button class="rounded-full bg-duriansecondary-450 text-gray-200 text-center py-0.5 px-4" style="font-size:12px">Match  3: RM15*</button>
            <button class="rounded-full bg-duriansecondary-450 text-gray-200 text-center py-0.5 px-4" style="font-size:12px">Match  DH: RM75*</button>

          </div>

         
      </div>
      <TicketBreakVue/>
      <div class="px-4 py-2">
        <button class="w-full mt-4 rounded-full bg-durianprimary-900 text-gray-200 text-center py-2">View All Tickets</button>

      </div>





    </ion-card>
</template>
  
<script lang="ts">
import { IonCard, IonCardHeader } from '@ionic/vue';
import { defineComponent } from 'vue';
import { ticketOutline, peopleOutline } from 'ionicons/icons';
import TicketBreakVue from '@/components/TicketBreak.vue';


export default defineComponent({
  name: 'TicketList',
  components: { IonCard, IonCardHeader, TicketBreakVue },
  setup() {
    return {
      ticketOutline,
      peopleOutline
    }
  }
});
</script>
  
<style>

</style>