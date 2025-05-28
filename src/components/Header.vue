<script setup lang="ts">
import { Heart, Search, ShoppingCart, User } from 'lucide-vue-next';
</script>

<template>
  <header class="py-4">
    <div class="flex items-center justify-between container mx-40">
      <div class="flex items-center gap-15">
        <img src="./icons/Logo.png" alt="Cyber Logo" class="" />
        <div class="relative">
          <Search
            class="absolute left-4 top-1/2 -translate-y-1/2 text-[#989898]"
          />
          <input
            placeholder="Search"
            class="bg-[#F5F5F5] rounded-xl w-[500px] pl-12 py-4"
            type="text"
          />
        </div>
      </div>

      <div>
        <ul class="flex gap-20 text-gray-400 font-medium">
          <li class="text-black">Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
      </div>
      <div class="flex gap-10">
        <Heart class="" />
        <ShoppingCart class="" />
        <User class="" />
      </div>
    </div>
  </header>
</template>
