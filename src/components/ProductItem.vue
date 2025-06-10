<template>
  <router-link :to="`/store/${product.id}`"
    ><div class="bg-[#F6F6F6] relative px-10 pb-6 pt-18">
      <Heart class="text-[#909090C4] opacity-[77%] absolute top-5 right-5" />
      <div class="text-center">
        <img
          class="mx-auto h-[160px] aspect-square object-cover"
          :src="product.image"
          alt="Iphone 14 pro Image"
        />
        <p class="min-h-14 mt-3 font-medium text-lg line-clamp-2">
          {{ product.title }}
        </p>

        <p class="text-2xl font-bold mt-3">${{ product.price }}</p>

        <button
          class="hover:opacity-50 transition cursor-pointer border bg-black rounded-md p-3 w-full mt-6"
          @click.stop.prevent="addToCart(product)"
        >
          <p class="text-white">Buy Now</p>
        </button>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import { Product } from '@/types/products';
import { ArrowDownToDot, Heart } from 'lucide-vue-next';

const { addToCart } = useCartStore();

// const props = defineProps({
//   product: {
//     type: Object,
//     required: true,
//   },
// });

type Props = {
  product: Product;
};
const { product } = defineProps<Props>();
</script>
