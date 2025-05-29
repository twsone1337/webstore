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
      <div class="grid grid-cols-6 gap-5">
        <div
          class="bg-[#EDEDED] rounded-md flex justify-center items-center px-14 py-6 h-[160px]"
        >
          <div class="">
            <Smartphone class="mx-auto size-12 mb-5" />
            <span class="text-xl">Phones</span>
          </div>
        </div>
        <div
          class="bg-[#EDEDED] rounded-md flex justify-center items-center px-14 py-6 h-[160px]"
        >
          <div>
            <Watch class="mx-auto size-12 mb-5" />
            <span class="text-xl">Watches</span>
          </div>
        </div>
        <div
          class="bg-[#EDEDED] rounded-md flex justify-center items-center px-14 py-6 h-[160px]"
        >
          <div>
            <Camera class="mx-auto size-12 mb-5" />
            <span class="text-xl">Cameras</span>
          </div>
        </div>
        <div
          class="bg-[#EDEDED] rounded-md flex justify-center items-center px-14 py-6 h-[160px]"
        >
          <div>
            <Headphones class="mx-auto size-12 mb-5" />
            <span class="text-xl">Headphones</span>
          </div>
        </div>
        <div
          class="bg-[#EDEDED] rounded-md flex justify-center items-center px-14 py-6 h-[160px]"
        >
          <div>
            <Monitor class="mx-auto size-12 mb-5" />
            <span class="text-xl">Computers</span>
          </div>
        </div>
        <div
          class="bg-[#EDEDED] rounded-md flex justify-center items-center px-6 py-14 h-[160px]"
        >
          <div>
            <Gamepad class="mx-auto size-12 mb-5" />
            <span class="text-xl">Gaming</span>
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
</script>
