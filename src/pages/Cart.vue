<template>
  <div class="space-y-6 p-4">
    <div
      v-for="(product, index) in cart"
      :key="index"
      class="flex items-center bg-gray-200 gap-5"
    >
      <b>{{ product.title }}</b>
      <button
        class="bg-slate-300 p-4 cursor-pointer"
        @click="decrementQuantity(index)"
      >
        -
      </button>
      <div>
        {{ product.quantity }}
      </div>
      <button
        class="bg-slate-300 p-4 cursor-pointer"
        @click="incrementQuantity(index)"
      >
        +
      </button>
      <b>{{ product.price * product.quantity }}$</b>
      <button
        class="bg-slate-300 p-4 cursor-pointer"
        @click="deleteFromCart(index)"
      >
        УДАЛИТЬ
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

const { cart, deleteFromCart, incrementQuantity, decrementQuantity } =
  useCartStore();
</script>
