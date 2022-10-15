<template>
  <ion-page class="bg-white">
    <div class="flex flex-col justify-center items-center h-screen">
      <ion-img src="assets/durian1.png"></ion-img>
      <p class="text-durianprimary-900 font-bold text-3xl mt-4">DURIAN RUNTUH</p>
      <p class="text-durianprimary-700 text-md mt-4">Sikit-sikit lama-lama jadi bukit</p>
      <div class="mt-8 w-4/5">
        <button @click="() => router.push('/tabs/tab1')" class="w-full rounded-md my-1 bg-durianprimary-700 text-gray-200 text-center py-1 text-sm">Sign up with Facebook</button>

        <button @click="() => router.push('/tabs/tab1')" class="w-full rounded-md my-1 bg-duriansecondary-300 text-gray-700 text-center py-1 text-sm">Sign up with Instagram</button>

        <p @click="() => router.push('/tabs/tab1')" class="my-1 text-durianprimary-900 text-xs text-center" style="color:#2D9CDB">Sign in now</p>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'IntroPage',
  components: {  IonPage },
  setup() {
      const router = useRouter();
      return { router };
    },
});
</script>
