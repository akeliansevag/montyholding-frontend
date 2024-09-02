<template>
    <section class="bg-white py-20">
        <div class="container">
            <SectionIntro title="Our Business Endeavors" />

            <div>
                <div class="border-b py-4" v-for="(item, i) in items" :key="item.id">
                    <div>
                        <div class="cursor-pointer flex items-center gap-4 justify-between" @click="toggle(item.id)">
                            <div>
                                <h5 class="text-[24px] font-bold mb-1">{{ item.title }}</h5>
                                <p class="text-[20px]">{{ item.excerpt }}</p>
                            </div>

                            <span class="transition" :class="activeItemId === item.id ? 'rotate-180' : 'rotate-0'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M18.5906 7.5L19.5 8.47031L12 16.5L4.5 8.47031L5.40469 7.5L12 14.5547L18.5906 7.5Z"
                                        fill="black" />
                                </svg>
                            </span>
                        </div>

                        <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave"
                            @leave="leave">
                            <div v-if="activeItemId === item.id" class="content">
                                <div class="grid grid-cols-1 lg:grid-cols-4 items-center gap-5 lg:gap-10">
                                    <div class="lg:col-span-3 order-2 lg:order-1">
                                        <p class="text-[20px]">{{ item.description }}</p>
                                        <a class="mh-button mt-4" target="_blank" :href="item.link">Visit Website</a>
                                    </div>
                                    <div class="p-10 mt-4 lg:mt-0 order-1 lg:order-2 flex items-center justify-center bg-[#D9D9D9] bg-opacity-[0.2]">
                                        <img :src="item.logo" alt="">
                                    </div>
                                </div>

                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
const items = [
    {
        id: 1,
        title: 'Monty Mobile',
        excerpt: 'A global leader in telecommunications.',
        description: 'A global leader in telecommunications, Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide. A global leader in telecommunications, Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide.',
        logo: '/img/montymobile-logo.svg',
        link: 'https://montymobile.com'
    },
    {
        id: 2,
        title: 'Comium The Gambia',
        excerpt: 'With the acquisition of Comium, Monty Mobile embarked on a mission to redefine the mobile experience.',
        description: 'A global leader in telecommunications, Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide. A global leader in telecommunications, Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide.',
        logo: '/img/montymobile-logo.svg',
        link: 'https://montymobile.com'
    },
    {
        id: 3,
        title: 'Monty Finance',
        excerpt: 'Monty Finance is a Lebanese financial institution authorized by the central bank to operate an e-wallet',
        description: 'A global leader in telecommunications, Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide. A global leader in telecommunications, Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide.',
        logo: '/img/montymobile-logo.svg',
        link: 'https://montymobile.com'
    },
    {
        id: 4,
        title: 'MontyPay',
        excerpt: 'MontyPay is the most secure and advanced payment service provider.',
        description: 'A global leader in telecommunications, Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide. A global leader in telecommunications, Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide.',
        logo: '/img/montymobile-logo.svg',
        link: 'https://montymobile.com'
    },
    {
        id: 5,
        title: 'Monty Capital',
        excerpt: 'Monty Capital is a visionary boutique advisory firm with a mission to impact the industry.',
        description: 'A global leader in telecommunications, Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide. A global leader in telecommunications, Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide.',
        logo: '/img/montymobile-logo.svg',
        link: 'https://montymobile.com'
    }
];

const activeItemId = ref(1);

function toggle(itemId) {
    // If the clicked item is already active, close it, otherwise open the clicked one.
    activeItemId.value = activeItemId.value === itemId ? null : itemId;
}

function beforeEnter(el) {
    el.style.height = '0';
}

function enter(el, done) {
    el.style.transition = 'height 0.3s ease';
    el.style.height = `${el.scrollHeight}px`;
    el.addEventListener('transitionend', done, { once: true });
}

function beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
}

function leave(el, done) {
    el.style.transition = 'height 0.3s ease';
    setTimeout(() => {
        el.style.height = '0';
    });
    el.addEventListener('transitionend', done, { once: true });
}
</script>

<style lang="css">
.content {
    overflow: hidden;
}
</style>