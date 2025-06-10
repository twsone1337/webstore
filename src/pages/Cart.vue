<template>
  <div class="container grid grid-cols-2">
    <div class="space-y-6 p-4">
      <p class="text-2xl font-bold">Shopping Cart</p>
      <div
        v-for="(product, index) in cart"
        :key="index"
        class="flex items-center gap-5 border-[#A3A3A3] border-b-[0.5px] py-4 last:border-none"
      >
        <div class="grid grid-cols-12 gap-4">
          <div class="flex items-center col-span-7 gap-5">
            <img :src="product.image" alt="Pro" class="size-22" />
            <p class="line-clamp-3 font-medium text-sm">{{ product.title }}</p>
          </div>
          <div class="flex items-center col-span-5 gap-4 justify-between">
            <div class="flex items-center gap-1">
              <button
                class="p-2 cursor-pointer"
                @click="decrementQuantity(index)"
              >
                -
              </button>
              <div class="border border-[#D9D9D9] px-4 py-1 rounded-md">
                {{ product.quantity }}
              </div>
              <button
                class="p-2 cursor-pointer"
                @click="incrementQuantity(index)"
              >
                +
              </button>
            </div>
            <b class="text-lg">${{ product.price * product.quantity }}</b>
            <button class="p-2 cursor-pointer" @click="deleteFromCart(index)">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="border border-[#EBEBEB] rounded-xl p-15 mt-4">
      <div class="space-y-5">
        <p class="text-xl font-bold">Order Summary</p>
        <div>
          <p class="text-[#545454]">Discount code / Promo code</p>
          <input
            type="text"
            class="p-4 border-[0.5px] border-[#9F9F9F] rounded w-full"
            placeholder="Code"
          />
        </div>
        <div>
          <p class="text-[#545454]">Your bonus card number</p>
          <input
            type="text"
            class="p-4 border border-[#9F9F9F] rounded w-full"
            placeholder="Enter Card Number"
          />
        </div>
        <div>
          <p>Subtotal</p>
          <p>Total ${{ totalPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

const {
  cart,
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
  totalPrice,
} = useCartStore();
</script>
