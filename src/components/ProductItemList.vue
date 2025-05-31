<template>
  <div class="py-14">
    <div class="container">
      <ul class="flex gap-5 text-[20px]">
        <li class="border-b-3">New Arrival</li>
        <li class="text-[#8B8B8B]">Bestseller</li>
        <li class="text-[#8B8B8B]">Featured Products</li>
      </ul>

      <div class="mt-5">
        <div class="grid grid-cols-4 gap-3">
          <ProductItem v-for="(product, i) in products" :key="i" :product />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ProductItem from './ProductItem.vue';
import axios from 'axios';

const products = ref([]);

const fetchProducts = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  products.value = data;
};
onMounted(() => {
  fetchProducts();
});
console.log(products.value);
</script>
