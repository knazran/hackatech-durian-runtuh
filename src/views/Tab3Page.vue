<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PoolPartyVue/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import PoolPartyVue from '../components/PoolParty.vue';

export default defineComponent({
  name: 'Tab3Page',
  components: {  IonContent, IonPage, PoolPartyVue }
});
</script>
