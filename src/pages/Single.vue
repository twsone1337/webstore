<template>
  <div>
    <ProductDetailsPage :product="singleProduct" v-if="singleProduct" />
  </div>
</template>

<script setup lang="ts">
import ProductDetailsPage from '@/components/ProductDetailsPage.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const singleProduct = ref(null);
const route = useRoute();

const fetchSingleProduct = async () => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${route.params.id}`
  );
  console.log(data);
  singleProduct.value = data;
};
onMounted(() => {
  fetchSingleProduct();
});
</script>
