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
        linkedIn: 'https://linkedin.com',
        bio: 'Mr. Hachem known as Monty, a visionary entrepreneur admired by colleagues and industry peers, is the driving force behind Monty Holding. His vision and determination sparked the company’s journey over two decades ago, establishing it as a key player in the telecom industry. Under his leadership, Monty Holding has expanded into a global leader with a presence across multiple continents. Monty\'s exceptional business acumen is showcased in his transformation of Comium, a mobile operator on the brink of collapse. His exceptional ability to recognize potential and transform struggling businesses into thriving enterprises is unmatched. A natural innovator, Monty has shifted his focus to the growing FinTech sector. His forward-thinking approach keeps him at the forefront of this industry, propelling the company towards a future defined by disruption.'
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
        linkedIn: 'https://linkedin.com',
        bio: 'Hassan Kabbani is an executive with a robust background in telecommunications and technology. Previously, as CEO of Zain KSA, Hassan achieved significant financial and operational turnaround, growing revenue by 10% and EBITDA by 102%, while reducing debt/EBITDA ratio from 16 to 7. He also served as CEO of Orange Egypt and Djezzy, where he drove substantial growth and market leadership. His earlier roles include CEO of Telecel International in Switzerland, Sabafon in Yemen, and Syrialtel in Syria where he spearheaded operational restructuring and launched new mobile operations. As Chief Commercial Officer at AALTO HAPS in Dubai, a subsidiary of Airbus, Hassan leads commercial strategies for Zephyr, a solar-powered High Altitude Platform Station designed to extend network coverage. His extensive board experience includes roles at Togocom Officiel, and NuRAN Wireless in Canada, reflecting his expertise across various international markets.'
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
        linkedIn: 'https://linkedin.com',
        bio: 'Mr. Hachem known as Monty, a visionary entrepreneur admired by colleagues and industry peers, is the driving force behind Monty Holding. His vision and determination sparked the company’s journey over two decades ago, establishing it as a key player in the telecom industry. Under his leadership, Monty Holding has expanded into a global leader with a presence across multiple continents. Monty\'s exceptional business acumen is showcased in his transformation of Comium, a mobile operator on the brink of collapse. His exceptional ability to recognize potential and transform struggling businesses into thriving enterprises is unmatched. A natural innovator, Monty has shifted his focus to the growing FinTech sector. His forward-thinking approach keeps him at the forefront of this industry, propelling the company towards a future defined by disruption.'
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