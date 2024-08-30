<template>
    <Banner />
    <AboutUs />
    <BoardOfDirectors title="Monty Mobile board of directors"
        description="A global leader in telecommunications, Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide."
        :directors="BODMontyMobile" :button="{ link: 'https://montymobile.com', text: 'Visit Monty Mobile Website' }" />

    <BoardOfDirectors :dark="true" title="Monty Finance board of directors"
        description="A global leader in telecommunications, Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide."
        :directors="BODMontyFinance"
        :button="{ link: 'https://montyfinance.com', text: 'Visit Monty Finance Website' }" />
    <BusinessEndeavors />
</template>

<script setup>
const BODMontyMobile = [
    {
        image: '/img/mountasser-hachem-s.webp',
        name: 'Mountasser Hachem',
        position: 'Founder and Chairman',
        linkedIn: 'https://linkedin.com'
    },
    {
        image: '/img/biola-s.webp',
        name: 'Biola Alabi',
        position: 'Founder and Chairman',
        linkedIn: 'https://linkedin.com'
    },
    {
        image: '/img/hassan-s.webp',
        name: 'Hassan Kabbani',
        position: 'Founder and Chairman',
        linkedIn: 'https://linkedin.com'
    },
    {
        image: '/img/susanne-s.webp',
        name: 'Susanne Hannestad',
        position: 'Founder and Chairman',
        linkedIn: 'https://linkedin.com'
    },
    {
        image: '',
        name: '',
        position: '',
        linkedIn: ''
    },
    {
        image: '/img/jean-s.webp',
        name: 'Jean Jacques Pany',
        position: 'Founder and Chairman',
        linkedIn: 'https://linkedin.com'
    },
    {
        image: '/img/joshua-s.webp',
        name: 'Joshua Smythwood',
        position: 'Founder and Chairman',
        linkedIn: 'https://linkedin.com'
    },
    {
        image: '',
        name: '',
        position: '',
        linkedIn: '',
    },
];

const BODMontyFinance = [
    {
        image: '/img/mountasser-hachem-b.webp',
        name: 'Mountasser Hachem',
        position: 'CEO',
        linkedIn: 'https://linkedin.com'
    },
    {
        image: '/img/mike-b.webp',
        name: 'Mike Quintanilla',
        position: 'Board Member',
        linkedIn: 'https://linkedin.com'
    },
    {
        image: '/img/randa-b.webp',
        name: 'Randa Naboulsi',
        position: 'Group CFO',
        linkedIn: 'https://linkedin.com'
    },
    {
        image: '/img/susanne-b.webp',
        name: 'Susanne Hannestad',
        position: 'Board Member',
        linkedIn: 'https://linkedin.com'
    },
    {
        image: '',
        name: '',
        position: '',
        linkedIn: ''
    },
    {
        image: '/img/arvinder-b.webp',
        name: 'Arvinder Gujral',
        position: 'Board Member',
        linkedIn: 'https://linkedin.com'
    },
    {
        image: '/img/sara-b.webp',
        name: 'Sarah Alateeqi',
        position: 'Board Member',
        linkedIn: 'https://linkedin.com'
    },
    {
        image: '',
        name: '',
        position: '',
        linkedIn: '',
    },
];
</script>