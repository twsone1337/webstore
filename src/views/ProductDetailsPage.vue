<template>
  <Header />
  <div class="bg-white py-28">
    <div class="container flex justify-between">
      <div>
        <img
          src="/src/assets/images/IphonePurpleMain.png"
          alt="IphonePurpler"
        />
        <img
          src="/src/assets/images/IphonePurpleFront.png"
          alt="IphonePurpler"
        />
        <img
          src="/src/assets/images/IphonePurpleBack.png"
          alt="IphonePurpler"
        />
        <img
          src="/src/assets/images/IphonePurpleRotating.png"
          alt="IphonePurpler"
        />
      </div>
      <div>
        <img src="/src/assets/images/IphonePurpler.png" alt="IphonePurpler" />
      </div>
      <div>
        <p class="text-3xl font-bold">Apple iPhone 14 Pro Max</p>
        <div class="flex gap-5">
          <p class="text-2xl">$1399</p>
          <p class="line-through text-[#A0A0A0]">$1499</p>
        </div>
        <div class="flex gap-5 items-center">
          <p>Select color :</p>
          <div
            v-for="color in colors"
            :key="color.id"
            :style="{ backgroundColor: color.color }"
            @click="selectedColor = color.id"
            class="rounded-full w-8 h-8 cursor-pointer border-2"
            :class="
              selectedColor === color.id ? 'border-black' : 'border-transparent'
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { ref } from 'vue';

const colors = [
  {
    id: 1,
    color: '#000000',
  },
  {
    id: 2,
    color: '#781DBC',
  },
  {
    id: 3,
    color: '#E10000',
  },
  {
    id: 4,
    color: '#E1B000',
  },
  {
    id: 5,
    color: '#E8E8E8',
  },
];

const selectedColor = ref(colors[0].id);
</script>
