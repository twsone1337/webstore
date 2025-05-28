<template>
  <div class="bg-[#FAFAFA]">
    <div class="container mx-auto">
      <div class="flex justify-between mb-10">
        <p class="text-2xl font-bold">Browse By Category</p>
        <div class="flex">
          <ChevronLeft />
          <ChevronRight />
        </div>
      </div>
      <div class="grid grid-cols-6 gap-5">
        <div
          class="bg-[#EDEDED] rounded-md flex justify-center items-center px-6 py-14"
        >
          <div>
            <Smartphone class="mx-auto size-15 mb-5" />
            <span class="text-2xl">Phones</span>
          </div>
        </div>
        <div
          class="bg-[#EDEDED] rounded-md flex justify-center items-center px-6 py-14"
        >
          <div>
            <Watch class="mx-auto size-15 mb-5" />
            <span class="text-2xl">Watches</span>
          </div>
        </div>
        <div
          class="bg-[#EDEDED] rounded-md flex justify-center items-center px-6 py-14"
        >
          <div>
            <Camera class="mx-auto size-15 mb-5" />
            <span class="text-2xl">Cameras</span>
          </div>
        </div>
        <div
          class="bg-[#EDEDED] rounded-md flex justify-center items-center px-6 py-14"
        >
          <div>
            <Smartphone class="mx-auto size-15 mb-5" />
            <span class="text-2xl">Phones</span>
          </div>
        </div>
        <div
          class="bg-[#EDEDED] rounded-md flex justify-center items-center px-6 py-14"
        >
          <div>
            <Smartphone class="mx-auto size-15 mb-5" />
            <span class="text-2xl">Phones</span>
          </div>
        </div>
        <div
          class="bg-[#EDEDED] rounded-md flex justify-center items-center px-6 py-14"
        >
          <div>
            <Smartphone class="mx-auto size-15 mb-5" />
            <span class="text-2xl">Phones</span>
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
  Smartphone,
  Watch,
} from 'lucide-vue-next';
</script>
