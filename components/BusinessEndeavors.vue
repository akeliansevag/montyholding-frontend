<template>
    <section class="bg-white py-10 lg:py-20">
        <div class="container">
            <SectionIntro title="Our business endeavors" />

            <div>
                <div class="border-b py-4" v-for="(item, i) in items" :key="item.id">
                    <div>
                        <div class="cursor-pointer flex items-center gap-4 justify-between" @click="toggle(item.id)">
                            <div class="flex w-full" >
                                <div class="lg:w-4/5">
                                    <h5 class="text-[24px] font-bold mb-1">{{ item.title }}</h5>
                                    <p>{{ item.excerpt }}</p>
                                </div>
                                <div>

                                </div>
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
                                <div class="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-10">
                                    <div class="lg:col-span-4 order-2 lg:order-1">
                                        <!-- <div v-html="item.description" class="html-content"></div> -->
                                        <p>{{ item.description }}</p>
                                        <a class="mh-button mt-4" target="_blank" :href="item.link">Visit Website</a>
                                    </div>
                                    <div class="mt-4 lg:mt-0 order-1 lg:order-2 flex items-center justify-center bg-[#D9D9D9] bg-opacity-[0.2] aspect-[16/8] lg:aspect-[16/12]">
                                        <img class="w-1/3" :src="item.logo" alt="">
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
// const items = [
//     {
//         id: 1,
//         title: 'Monty Mobile',
//         excerpt: 'A global leader in telecommunications, Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide.',
//         description: '<h4>Mobile Operator Management Unit</h4><ul><li>End-to-end ICT Solutions & more<li>Centralized Virtual Management - CVM</ul><h4>Fintech – Mobile Digital<br>Banking Services (MDBS)</h4><p>Transforming mobile operators into digital banks<h4>CPaaS - Monty Communication Platform</h4><p>Seamless omnichannel communication and intelligent automation<h4>eSIM</h4><ul><li>RSP<li>Travel eSIM<li>Data Wholesale</ul><h4>A2P SMS Monetization & Wholesale</h4><h4>Anti-fraud Solutions</h4><ul><li>SMS Firewall<li>Flash Call Prevention Solution</ul><h4>Digital & Core Services</h4>',
//         logo: '/img/montymobile-logo.svg',
//         link: 'https://montymobile.com'
//     },
//     {
//         id: 2,
//         title: 'Comium The Gambia',
//         excerpt: 'With the acquisition of Comium, Monty Mobile embarked on a mission to redefine the mobile experience.',
//         description: 'Through our global reach and innovative solutions, we\'ve transformed Comium into a market leader, offering superior services like expanded 4G+ coverage, a user-friendly mobile wallet, and a comprehensive suite of digital tools.',
//         logo: '/img/comium-logo.svg',
//         link: 'https://montymobile.com'
//     },
//     {
//         id: 3,
//         title: 'Monty Finance UK',
//         excerpt: 'Launched in 2021, Monty Finance UK is a global fintech leader dedicated to empowering the underbanked and unbanked. We offer a diverse range of financial services across multiple markets. At the heart of our focus is MyMonty EU, a cutting-edge neo-banking platform delivering an exceptional and seamless digital banking experience.',
//         description: '<h4>Products and services</h4><ul><li>Compliance & Governance<li>Infrastructure & Security<li>Junior Account<li>Digital Lending<li>Full control (Cards and Bills)<li>SMB<li>Loyalty<li>Blockchain/Crypto<li>Real Estate<li>Money Transfer/ Remittance<li>Payments/Billing<li>Wealth Management<li>Trade Finance<li>Insurance<li>Regtech<li>Capital Markets<li>Digital Bank account</ul>',
//         logo: '/img/montyfinance-uk-logo.svg',
//         link: 'https://montymobile.com'
//     },
//     {
//         id: 4,
//         title: 'MontyPay',
//         excerpt: 'MontyPay is the most secure and advanced payment service provider offering unparalleled range of innovative solutions for merchants across the globe.',
//         description: '<ol><li><strong>Unified Solution:</strong> A comprehensive All-in-one service with a dashboard that seamlessly integrates online and in-store sales data, accessible in real-time via web and mobile app.<li><strong>Diverse Payment Solutions:</strong> A broad portfolio that includes Payment Gateway, Smart POS, and QCheck for seamless transactions.<li><strong>eCommerce Services:</strong> MontyPay provides a full end-to-end solution for merchants, from website development to marketing support.<li><strong>Exclusive Benefits:</strong> Growth opportunities with loyalty program and lending services.<li><strong>White-Label Solutions for PSPs:</strong> Deliver Exceptional payment experiences for clients.</ol>',
//         logo: '/img/montypay-logo.svg',
//         link: 'https://montypay.com'
//     },
//     {
//         id: 5,
//         title: 'Monty Capital',
//         excerpt: 'Monty Capital is a visionary boutique advisory firm with a mission to impact the industry. Our comprehensive service offerings are the foundation of our financial expertise. With a deep understanding of the Telecom, Media, and Technology (TMT) landscape, Monty Capital offers tailored financial and strategic solutions to fuel clients’ growth and success.',
//         description: '<h4>Arranging Deals in Investments</h4><ul><li>Mergers and Acquisitions<li>Facilitating equity advisory</ul><h4>Arranging Deals in Credit</h4><ul><li>Debt Advisory and Restructuring</ul><h4>Corporate Advisory</h4><ul><li>Strategic Plans<li>Business Plans<li>Working Capital Management<li>Fairness Opinions</ul>',
//         logo: '/img/montycapital-logo.svg',
//         link: 'https://montymobile.com'
//     }
// ];

const items = [
    {
        id: 1,
        title: 'Monty Mobile',
        excerpt: 'A global leader in telecommunications.',
        description: 'Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide.',
        logo: '/img/montymobile-full-logo.svg',
        link: 'https://montymobile.com'
    },
    {
        id: 2,
        title: 'Comium The Gambia',
        excerpt: 'With the acquisition of Comium, Monty Mobile embarked on a mission to redefine the mobile experience.',
        description: 'Through our global reach and innovative solutions, we\'ve transformed Comium into a market leader, offering superior services like expanded 4G+ coverage, a user-friendly mobile wallet, and a comprehensive suite of digital tools.',
        logo: '/img/comium-logo.svg',
        link: 'https://comium.gm'
    },
    {
        id: 3,
        title: 'Monty Finance UK',
        excerpt: 'Launched in 2021, Monty Finance UK is a global fintech leader dedicated to empowering the underbanked and unbanked. ',
        description: 'We offer a diverse range of financial services across multiple markets. At the heart of our focus is MyMonty EU, a cutting-edge neo-banking platform delivering an exceptional and seamless digital banking experience.',
        logo: '/img/montyfinance-uk-logo.svg',
        link: 'https://montyfinance.co.uk/'
    },
    {
        id: 4,
        title: 'MontyPay',
        excerpt: 'MontyPay is the most secure and advanced payment service provider offering unparalleled range of innovative solutions for merchants across the globe.',
        description: '',
        logo: '/img/montypay-logo.svg',
        link: 'https://montypay.com'
    },
    {
        id: 5,
        title: 'Monty Capital',
        excerpt: 'Monty Capital is a visionary boutique advisory firm with a mission to impact the industry. Our comprehensive service offerings are the foundation of our financial expertise.',
        description: 'With a deep understanding of the Telecom, Media, and Technology (TMT) landscape, Monty Capital offers tailored financial and strategic solutions to fuel clients’ growth and success.',
        logo: '/img/montycapital-logo.svg',
        link: 'https://montycapital.com'
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
    setTimeout(() => {
        el.style.transition = 'height 0.3s ease';
        el.style.height = `${el.scrollHeight}px`;
        el.addEventListener('transitionend', done, { once: true });
    }, 100);
    
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

<style scoped>
.content {
    overflow: hidden;
}
</style>