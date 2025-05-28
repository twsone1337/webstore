<template>
  <div class="bg-[#FAFAFA]">
    <div class="w-[1120px]">
      <div class="flex justify-between">
        <p>Browse By Category</p>
        <div class="flex">
          <ChevronLeft />
          <ChevronRight />
        </div>
      </div>
      <div class="grid grid-cols-6 gap-5">
        <div class="bg-[#EDEDED] rounded-md">
          <div class="px-6 py-14">
            <Smartphone />
            <span>Phones</span>
          </div>
        </div>
        <div class="bg-[#EDEDED] rounded-md">
          <Smartphone />
          <span>Phones</span>
        </div>
        <div class="bg-[#EDEDED] rounded-md">
          <Smartphone />
          <span>Phones</span>
        </div>
        <div class="bg-[#EDEDED] rounded-md">
          <Smartphone />
          <span>Phones</span>
        </div>
        <div class="bg-[#EDEDED] rounded-md">
          <Smartphone />
          <span>Phones</span>
        </div>
        <div class="bg-[#EDEDED] rounded-md">
          <Smartphone />
          <span>Phones</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-vue-next';
</script>
