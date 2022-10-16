<template>
    <div id="container" class="bg-durianprimary-700 h-screen">
        <!-- Header -->
        <div class="bg-durianprimary-900 ">
            <div class="flex justify-between px-6 pb-2 pt-10">
                <ion-icon @click="() => router.back()" :icon="chevronBackOutline" class="text-gray-200"></ion-icon>
                <p class="text-gray-200 tracking-wide leading-none font-semibold">Manage Farm</p>
                <p class="text-durianprimary-900">d</p>
            </div>
            <div class="relative h-12 bg-durianprimary-900 ">
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="0" fill="#FECA16" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="#CFFF8D" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="#A8E890" />
                    <use xlink:href="#gentle-wave" x="48" y="7" fill="#749F82" />
                </g>
            </svg>
        </div>
        </div>

        <!-- Content -->
        <div class="-translate-y-4 bg-durianprimary-700 py-4">
            <div class="my-4 flex px-4 justify-center space-x-4">
            <button @click="() => router.push('/manage-farm')"
                class="rounded-md bg-durianprimary-500 text-gray-700 text-center py-2 px-6 text-sm font-bold">Create
                Farm</button>
            <button @click="() => router.push('/manage-farm')"
                class="rounded-md bg-durianprimary-500 text-gray-700 text-center py-2 px-6 text-sm font-bold">Join
                Farm</button>
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
                        <p class="text-xs text-duriansecondary-900">70 active members</p>
                        <p class="text-xs text-duriansecondary-900">230 active tickets</p>
                        <p class="text-xs text-duriansecondary-900">402 tickets next week</p>
                    </div>
                    <div>
                        <button @click="() => router.push('/farm-details')"
                            class="rounded-full bg-durianprimary-900 text-gray-200 text-center py-1 px-6">Details</button>
                    </div>
                </div>
            </ion-card-content>
        </ion-card>
        </div>
        
    </div>
</template>
  
<script lang="ts">
import { chevronBackOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';


export default defineComponent({
    name: 'PoolParty',
    components: {},
    setup() {
        const router = useRouter();
        return { router, chevronBackOutline };
    },
});
</script>
  
<style>
.waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
}

.parallax>use {
    animation: move-forever 25s cubic-bezier(.95, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}

.parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}

.parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}

.parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }

    100% {
        transform: translate3d(85px, 0, 0);
    }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
    .waves {
        height: 40px;
        min-height: 40px;
    }
}
</style>