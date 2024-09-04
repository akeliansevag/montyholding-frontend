<template>
    <section class="py-10 lg:py-20" :class="dark ? 'bg-black text-white' : 'bg-white'">
        <div class="container">
            <SectionIntro :title="props.title" :description="props.description" />

            <div class="text-center mt-10" v-if="props.button">
                <a class="mh-button" :href="props.button.link" target="_blank">{{ props.button.text }}</a>
            </div>
            
            <div v-if="props.directors" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-lg:gap-0 mt-20 max-w-[1200px] mx-auto">
                <div
                    v-for="(director, index) in props.directors"
                    :key="index"
                    :class="{'max-lg:hidden': !director.name }"
                    class="max-lg:mb-5"
                >
                        <img @click="director.bio && openBioModal(index)"
                        :class="{ 'cursor-pointer': director.bio, 'cursor-default': !director.bio }" v-if="director.image" class="max-lg:max-h-[160px] max-h-[200px] director-image mb-5 mx-auto rounded-full" :src="director.image" :alt="director.name">
                        <div class="flex flex-col max-lg:gap-0 gap-1 items-center">
                            <h4 :class="{ 'cursor-pointer': director.bio, 'cursor-default': !director.bio }" @click="director.bio && openBioModal(index)" class="hover:text-[#B27E41] max-lg:text-[18px] text-[22px] font-bold text-center">{{ director.name }}</h4>
                            <h5 :class="dark ? 'text-white' : 'text-[#B27E41]'" class="max-lg:text-[16px] text-xl text-center">
                                <i>{{ director.position }}</i>
                            </h5>
                            <a v-if="director.linkedIn" class="inline-block mt-2" target="_blank" :href="director.linkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="url(#paint0_linear_1660_2)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_1660_2" x1="-176.861" y1="12.0289" x2="44.6212" y2="12.0289" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#BC945D"/>
                                        <stop offset="0.28" stop-color="#966F41"/>
                                        <stop offset="0.43" stop-color="#C89B62"/>
                                        <stop offset="0.56" stop-color="#EFBD7C"/>
                                        <stop offset="0.63" stop-color="#FECB86"/>
                                        <stop offset="0.71" stop-color="#ECBB7A"/>
                                        <stop offset="0.87" stop-color="#BF935C"/>
                                        <stop offset="1" stop-color="#966F41"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    
                </div>
            </div>
        </div>

        <!-- Modal with Separate Transitions and Next/Back Buttons -->
        <transition name="overlay-fade">
            <div v-if="showModal" class="fixed p-4 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" @click.self="closeBioModal">
                <transition name="modal-scale">
                    <div v-if="showModal" class="bg-white text-black px-8 py-8 lg:py-16 rounded-3xl max-w-7xl max-h-full mx-auto overflow-hidden relative transform transition-transform duration-300">
                        <button @click="closeBioModal" class="absolute top-5 right-5 text-black">
                            <svg fill="#000000" height="18" width="18" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 460.775 460.775" xml:space="preserve">
                                    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                                c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                                c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                                c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                                l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                                c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                            </svg>
                        </button>
                        <div class="flex flex-col md:flex-row items-center gap-10 h-[80vh] md:h-auto overflow-scroll lg:overflow-visible">
                            <div class="md:w-1/3">
                                <img v-if="currentDirector.image" class="mb-5 mx-auto" :src="currentDirector.image" alt="">
                                <div class="flex justify-center gap-5 mt-6">
                                    <button
                                        @click="prevDirector"
                                        :disabled="currentIndex === 0"
                                        :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
                                        class="text-black mh-button"
                                    >
                                        Back
                                    </button>
                                    <button
                                        @click="nextDirector"
                                        :disabled="currentIndex === filteredDirectors.length - 1"
                                        :class="{ 'opacity-50 cursor-not-allowed': currentIndex === filteredDirectors.length - 1 }"
                                        class="text-black mh-button"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                            <div class="lg:w-2/3 text-center md:text-left">
                                <h3 class="text-2xl font-bold mb-4">{{ currentDirector.name }}</h3>
                                <p class="text-lg">{{ currentDirector.bio }}</p>
                            </div>
                            
                        </div>
                        
                       
                    </div>
                </transition>
            </div>
        </transition>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps(['dark', 'title', 'description', 'button', 'directors']);
const showModal = ref(false);
const currentDirector = ref({});
const currentIndex = ref(0);

// Compute filtered directors with bio only
const filteredDirectors = computed(() => props.directors.filter(d => d.bio));

// Open bio modal with proper mapping
function openBioModal(index) {
    const validDirectors = filteredDirectors.value;
    // Find the index in the filtered array
    const directorIndex = validDirectors.findIndex(d => d === props.directors[index]);
    if (directorIndex >= 0) {
        currentIndex.value = directorIndex;
        currentDirector.value = validDirectors[currentIndex.value];
        showModal.value = true;
    } else {
        console.error("No bio available for this director index:", index); // Debugging line
    }
}

function closeBioModal() {
    showModal.value = false;
}

function nextDirector() {
    let newIndex = currentIndex.value + 1;
    while (newIndex < filteredDirectors.value.length && !filteredDirectors.value[newIndex].bio) {
        newIndex++;
    }
    if (newIndex < filteredDirectors.value.length) {
        currentIndex.value = newIndex;
        currentDirector.value = filteredDirectors.value[currentIndex.value];
    }
}

function prevDirector() {
    let newIndex = currentIndex.value - 1;
    while (newIndex >= 0 && !filteredDirectors.value[newIndex].bio) {
        newIndex--;
    }
    if (newIndex >= 0) {
        currentIndex.value = newIndex;
        currentDirector.value = filteredDirectors.value[currentIndex.value];
    }
}

// Handle keyboard events for navigation
function handleKeydown(event) {
    if (event.key === 'ArrowRight') {
        nextDirector();
    } else if (event.key === 'ArrowLeft') {
        prevDirector();
    }

    if (event.key === 'Escape'){
        closeBioModal();
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* Overlay Fade Transition */
.overlay-fade-enter-active, .overlay-fade-leave-active {
    transition: opacity 0.3s ease;
}

.overlay-fade-enter-from, .overlay-fade-leave-to {
    opacity: 0;
}

.overlay-fade-enter-to, .overlay-fade-leave-from {
    opacity: 1;
}

/* Modal Scale Transition */
.modal-scale-enter-active, .modal-scale-leave-active {
    transition: transform 0.3s ease;
}

.modal-scale-enter-from, .modal-scale-leave-to {
    transform: scale(0.9);
}

.modal-scale-enter-to, .modal-scale-leave-from {
    transform: scale(1);
}

/* Disabled Button Styles */
.opacity-50 {
    opacity: 0.5;
}

.cursor-not-allowed {
    cursor: not-allowed;
}

/* Default cursor for directors without a bio */
.cursor-default {
    cursor: default;
}

/* Pointer cursor for directors with a bio */
.cursor-pointer {
    cursor: pointer;
}
</style>
