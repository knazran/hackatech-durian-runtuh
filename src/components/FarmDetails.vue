<template>
    <div id="container">
        <div class="bg-durianprimary-900 px-6 pb-2 pt-10">
            <div class="flex justify-between">
                <ion-icon @click="() => router.back()" :icon="chevronBackOutline" class="text-gray-200"></ion-icon>
                <p class="text-gray-200 tracking-wide leading-none font-semibold">Farm Details</p>
                <p class="text-durianprimary-900">d</p>
            </div>
        </div>

        <ion-card class="bg-duriansecondary-300 mx-6 rounded-lg shadow-2xl my-6 ">
            <ion-card-content>

                <div class="flex justify-between mb-4">
                    <div>
                        <p class="text-xs text-duriansecondary-400">Farm Name</p>
                        <p class="text-md text-durianprimary-900 font-bold mt-1 tracking-wider">Diamond Hands Only</p>
                    </div>
                </div>
                <div class="flex justify-between mb-4">
                    <div>
                        <p class="text-xs text-duriansecondary-400">Active Tickets</p>
                        <p class="text-md text-durianprimary-900 font-bold mt-1 tracking-wider">230</p>
                    </div>
                </div>
                <div class="flex justify-between mb-4">
                    <div>
                        <p class="text-xs text-duriansecondary-400">Tickets Next Week</p>
                        <p class="text-md text-durianprimary-900 font-bold mt-1 tracking-wider">402</p>
                    </div>
                    <div>
                        <p class="text-xs text-duriansecondary-400 text-right">Members</p>
                        <p class="text-md text-durianprimary-900 font-bold mt-1 tracking-wider text-right">70</p>
                    </div>
                </div>
                <div class="flex justify-between mb-4">
                    <div>
                        <p class="text-xs text-duriansecondary-400">Private</p>
                        <p class="text-md text-durianprimary-900 font-bold mt-1 tracking-wider">No</p>
                    </div>
                    <div>
                        <p class="text-xs text-duriansecondary-400 text-right">Public Invite Code</p>
                        <div class="flex">
                            <ion-icon :icon="copyOutline" class="text-durianprimary-900 text-lg"></ion-icon>
                            <p class="pl-2  text-md text-durianprimary-900 font-bold mt-1 tracking-wider text-right">
                                LetMeWinHackatech</p>

                        </div>
                    </div>
                </div>
            </ion-card-content>
        </ion-card>

        <!-- Input -->
        <div class="px-6">
            <p class="text-durianprimary-900 font-bold text-xs mb-2">Tickets Allocated (Max 134)</p>
            <div class="flex">
                <input class="mr-2 bg-duriansecondary-500 rounded-md text-gray-800 px-2 w-2/3" value="10" />
                <button class="rounded-md w-1/3 bg-durianprimary-900 text-gray-200 text-center py-1 px-4">Update</button>
            </div>
        </div>

        <ion-card class="bg-duriansecondary-300 mx-6 rounded-lg shadow-2xl">
            <ion-card-content>
                <span><ion-icon :icon="informationCircleOutline" class="text-durianprimary-900 text-lg"></ion-icon></span>
                <span class="text-durianprimary-900 text-xs">
                    Your ticket allocation must be set before 3PM on Monday before a new contest begins. Changing your allocated tickets will only affect future contests.
                    You can not add or remove tickets from a contest that is already running
                </span>

            </ion-card-content>
        </ion-card>



    </div>
</template>
  
<script lang="ts">
import { chevronBackOutline, copyOutline, informationCircleOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'FarmDetails',
    components: {},
    setup() {
        const router = useRouter();
        return { router, chevronBackOutline, copyOutline,informationCircleOutline };
    },
});
</script>
  
<style>

</style>