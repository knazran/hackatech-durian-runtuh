<template>
    <div id="container">
        <div class="bg-durianprimary-900 px-6 pb-2 pt-10">
          <div class="flex justify-between">
            <ion-icon @click="() => router.back()" :icon="chevronBackOutline" class="text-gray-200"></ion-icon>
            <p class="text-gray-200 tracking-wide leading-none font-semibold">Manage Farm</p>
            <p class="text-durianprimary-900">d</p>
          </div>
        </div>

        <div class="my-6 flex px-4 justify-center space-x-4">
          <button @click="() => router.push('/tabs/tab3/manage-farm')"
                        class="rounded-md bg-durianprimary-500 text-gray-700 text-center py-2 px-6 text-sm font-bold">Create Farm</button>
                        <button @click="() => router.push('/tabs/tab3/manage-farm')"
                        class="rounded-md bg-durianprimary-500 text-gray-700 text-center py-2 px-6 text-sm font-bold">Join Farm</button>
        </div>

        <p class="text-durianprimary-900 font-bold text-xs px-6">YOUR FARMS</p>
        <ion-card class="bg-duriansecondary-300 mx-6 rounded-lg shadow-2xl my-2 ">
            <ion-card-content>
                
                <div class="flex justify-between mb-4">
                    <div>
                        <p class="text-xs text-duriansecondary-400">Joined</p>
                        <p class="text-md text-durianprimary-900 font-bold mt-1 tracking-wider">Diamond Hands Only</p>
                    </div>
                    <div>
                        <p class="text-xs text-duriansecondary-400 text-right">Tickets</p>
                        <p class="text-md text-durianprimary-900 font-bold mt-1 tracking-wider text-right">657</p>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div>
                      <p class="text-xs text-duriansecondary-900">10 active members</p>
                      <p class="text-xs text-duriansecondary-900">230 active tickets</p>
                    </div>
                    <button @click="() => router.push('/tabs/tab3/manage-farm')"
                        class="rounded-full bg-durianprimary-900 text-gray-200 text-center py-1 px-6">Details</button>
                </div>
            </ion-card-content>
        </ion-card>
    </div>
</template>
  
<script lang="ts">
import { chevronBackOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';


export default defineComponent({
    name: 'PoolParty',
    components: { },
    setup() {
        const router = useRouter();
        return { router, chevronBackOutline};
    },
});
</script>
  
<style>

</style>