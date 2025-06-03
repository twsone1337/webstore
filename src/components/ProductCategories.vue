<template>
  <div class="bg-[#FAFAFA]">
    <div class="container py-20">
      <div class="flex justify-between mb-10">
        <p class="text-2xl font-bold">Browse By Category</p>
        <div class="flex gap-3">
          <ChevronLeft class="size-10 cursor-pointer" />
          <ChevronRight class="size-10 cursor-pointer" />
        </div>
      </div>
      <div class="grid grid-cols-6 gap-8">
        <div
          v-for="(icon, index) in icons"
          class="bg-[#EDEDED] rounded-md flex justify-center items-center px-14 py-6"
        >
          <div>
            <component :is="icon.icon" class="mx-auto size-12 mb-2" />
            <span class="text-base">{{ icon.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Gamepad,
  Headphones,
  Monitor,
  Smartphone,
  Watch,
} from 'lucide-vue-next';

const icons = [
  {
    name: 'Phones',
    icon: Smartphone,
  },
  {
    name: 'Watches',
    icon: Watch,
  },
  {
    name: 'Cameras',
    icon: Camera,
  },
  {
    name: 'Headphones',
    icon: Headphones,
  },
  {
    name: 'Computers',
    icon: Monitor,
  },
  {
    name: 'Gaming',
    icon: Gamepad,
  },
];
</script>
