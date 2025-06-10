<script setup lang="ts">
import { Facebook, Instagram, Twitter } from 'lucide-vue-next';
</script>

<template>
  <div class="bg-black">
    <div class="container py-26">
      <div class="flex justify-between mb-6">
        <div>
          <img
            src="/src/assets/icons/Logo Vector.svg"
            alt="Cyber Logo"
            class="mb-5"
          />
          <p class="text-[#CFCFCF]">
            We are a residential interior design firm located in <br />Portland.
            Our boutique-studio offers more than
          </p>
        </div>
        <div>
          <ul class="text-[#CFCFCF] space-y-5">
            <li class="text-white font-bold text-lg">Services</li>
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </div>
        <div>
          <ul class="text-[#CFCFCF] space-y-5">
            <li class="text-white font-bold text-lg">
              Assistance to the buyer
            </li>
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </div>
      <div class="flex gap-10">
        <Twitter class="fill-white cursor-pointer" />
        <Facebook class="fill-white cursor-pointer" />
        <Twitter class="fill-white cursor-pointer" />
        <Instagram class="fill-white cursor-pointer" />
      </div>
    </div>
  </div>
</template>
