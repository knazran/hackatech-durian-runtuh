<template>
  <div id="container">
    <div class="bg-durianprimary-900 px-6 pb-2 pt-10">
      <p class="text-gray-200 tracking-wide leading-none font-semibold" style="font-size:12px">BALANCE</p>
      <p><span class="text-gray-200 text-md">RM </span><span
          class="text-gray-200 text-3xl font-bold tracking-wider leading-none">3,400</span></p>
      <button class="bg-duriansecondary-500 rounded-full px-6 py-0.5 text-gray-700" style="font-size:12px">134
        TICKETS</button>
    </div>
    <div class="-translate-y-1">
      <img src="assets/wave4.png" />
    </div>

    <ion-card class="bg-duriansecondary-300 mx-6 rounded-lg shadow-2xl -translate-y-16">
      <ion-card-header>
        <p class="text-duriansecondary-400 font-semibold text-lg">Farm Together</p>
      </ion-card-header>

      <ion-card-content>
        <p class="text-durianprimary-900 ">Work together with friends to increase your chances for a Durian Runtuh!</p>

        <div class="flex justify-between my-8">
          <div>
            <p class="text-xs text-duriansecondary-400">Your Farms</p>
            <p class="text-md text-durianprimary-900 font-bold mt-1 tracking-wider">Diamond Hands Only</p>
          </div>
          <div>
            <p class="text-xs text-duriansecondary-400 text-right">Ticket</p>
            <p class="text-md text-durianprimary-900 font-bold mt-1 tracking-wider text-right">657</p>
          </div>
        </div>
        <div class="flex justify-between">
          <button class="text-gray-700 font-semibold text-xs underline">How It Works</button>
          <button @click="() => router.push('/tabs/tab3/manage-farm')"
            class="rounded-full bg-durianprimary-900 text-gray-200 text-center py-1 px-6">Manage</button>
        </div>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'PoolParty',
  components: {},
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

<style>
</style>