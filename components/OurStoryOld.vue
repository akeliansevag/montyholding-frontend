<template>
    <section class="py-10 lg:py-20 bg-black bg-opacity-[0.04]">
        <div class="container">
            <SectionIntro title="Our story" description="Monty Holding began its journey in the media and telecom sectors, quickly establishing itself as a leader by pioneering cutting-edge technologies and setting new standards for excellence. <br /> As the company scaled, we diversified into various industries. A prime example is our operator-in-a-box solution, a comprehensive hardware and software offering with high customer retention potential and ample room for innovation." />
            
            <div class="text-center mt-10 mb-14">
                <a @click="openBioModal($event)" class="mh-button" href="#">Read more</a>
            </div>
            
            <div>
                <div class="rounded-3xl overflow-hidden max-w-[800px] mx-auto">
                    <video autoplay loop muted playsinline>
                        <source src="/earth.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
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
                        <div class="flex flex-col gap-4 h-[80vh] md:h-auto overflow-scroll lg:overflow-visible">
                            <p>
                                Monty Holding began its journey in the media and telecom sectors, quickly establishing itself as a leader by pioneering cutting-edge technologies and setting new standards for excellence. As the company scaled, we diversified into various industries. A prime example is our operator-in-a-box solution, a comprehensive hardware and software offering with high customer retention potential and ample room for innovation.
                            </p>
                            <p>
                                In the FinTech sector, Monty Holding is at the forefront transforming financial services, using its own cutting-edge technologies to deliver seamless, secure, and user-centric solutions that drive financial inclusion. Our holistic advisory services combine strategic insight with financial expertise, offering comprehensive support to clients across the globe.

                            </p>
                            <p>
                                Beyond these key industries, Monty Holding continues to explore new opportunities for innovation and disruption. Our portfolio of diverse ventures reflects our mission to create a sustainable and better future for all.
                            </p>
                            <p>
                                At Monty Holding, our definition of success extends beyond financial performance; it's about building a lasting legacy through community empowerment and positive change. As we navigate the global marketplace, our commitment to delivering exceptional value to our customers, empowering our employees, and ensuring long-term shareholder value remains strong.
                                Welcome to Monty Holding, where the future is limitless, and the possibilities are endless.
                            </p>
                        </div>
                        
                       
                    </div>
                </transition>
            </div>
        </transition>
    </section>
</template>

<script setup>

const showModal = ref(false);


// Open bio modal with proper mapping
function openBioModal(e) {
    e.preventDefault();
    showModal.value = true;
}

function closeBioModal() {
    showModal.value = false;
}

// Handle keyboard events for navigation
function handleKeydown(event) {
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