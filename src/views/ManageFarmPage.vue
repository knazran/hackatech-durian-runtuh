<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ManageFarmVue/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import ManageFarmVue from '@/components/ManageFarm.vue';

export default defineComponent({
  name: 'ManageFarmPage',
  components: {  IonContent, IonPage, ManageFarmVue }
});
</script>
