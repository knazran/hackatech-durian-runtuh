<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <FarmDetailsVue/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import FarmDetailsVue from '@/components/FarmDetails.vue';

export default defineComponent({
  name: 'FarmDetailsPage',
  components: {  IonContent, IonPage, FarmDetailsVue }
});
</script>
