<template>
    <section class="bg-black max-lg:overflow-hidden pt-[90px] min-h-[58vh] lg:min-h-screen w-full relative text-white flex flex-col justify-end">
        <img class="object-cover object-center absolute w-full h-full z-10" src="/public/img/banner-bg.webp"
            alt="Banner Background">
        <div class="mobile-overlay absolute lg:hidden w-full h-full left-0 top-0 z-20"></div>
        <div class="container">
            <div class="relative gap-10 flex items-center justify-between pb-5 lg:pb-0">
                <div class="flex flex-col items-center w-full gap-4 max-lg:text-center lg:gap-8 relative z-30 lg:w-2/5 pr-0 lg:pr-10">
                    <img class="max-lg:max-w-[250px] block" src="/public/img/mountasser-hachem-new.svg" alt="Mountasser Hachem">
                </div>
                <div class="absolute bottom-0 lg:relative z-10 lg:w-3/5">
                    <img class="max-lg:hidden w-full" src="/public/img/monty-img-lg.webp" alt="Mountasser-Hachem">
                    <img class="lg:hidden w-full translate-y-[190px]" src="/public/img/monty-img.webp" alt="Mountasser-Hachem">
                </div>
            </div>
        </div>
        <div class="max-lg:hidden absolute -bottom-[35px] bg-white w-[1px] h-[100px] z-10 left-1/2"></div>
    </section>
</template>

<script setup>

</script>

<style scoped>
    .mobile-overlay{
        background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0));

    }
</style>