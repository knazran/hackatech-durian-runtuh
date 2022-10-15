<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <AccountDetailsContainerVue/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import AccountDetailsContainerVue from '@/components/AccountDetailsContainer.vue';

export default defineComponent({
  name: 'Tab2Page',
  components: { IonContent, IonPage, AccountDetailsContainerVue }
});
</script>
