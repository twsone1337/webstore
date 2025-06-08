<template>
  <div class="bg-white py-28">
    <div class="container flex justify-between">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-1 space-y-4">
          <img
            class="object-cover aspect-square"
            @click="selectedImage = index"
            v-for="(img, index) in colors[selectedColor].images"
            :src="img"
            :key="index"
            alt="IphonePurpler"
          />
        </div>
        <div class="col-span-5">
          <img
            :src="colors[selectedColor].images[selectedImage]"
            alt="IphonePurpler"
            class="aspect-[9/12] object-cover"
          />
        </div>
        <div class="col-span-6 space-y-5">
          <p class="text-3xl font-bold">Apple iPhone 14 Pro Max</p>
          <div class="flex gap-5 items-center">
            <p class="text-2xl">$1399</p>
            <p class="line-through text-[#A0A0A0] text-xl">$1499</p>
          </div>
          <div class="flex gap-5 items-center">
            <p>Select color :</p>
            <div
              v-for="(color, index) in colors"
              :key="index"
              :style="{ backgroundColor: color.color }"
              @click="selectedColor = index"
              class="rounded-full w-8 h-8 cursor-pointer outline-2 outline-offset-2"
              :class="
                selectedColor === index
                  ? 'outline-blue-500'
                  : 'outline-transparent'
              "
            ></div>
          </div>
          <div class="grid grid-cols-4 gap-5">
            <div
              v-for="(item, index) in memoryCapacity"
              class="border-2 px-6 py-4 rounded-xl cursor-pointer text-center"
              :class="
                selectedCapacity === index ? 'border-black' : 'border-[#D5D5D5]'
              "
              @click="selectedCapacity = index"
            >
              <p
                :class="
                  selectedCapacity === index ? 'text-black' : 'text-[#6F6F6F]'
                "
              >
                {{ item.value }}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-3 grid-rows-2 gap-5">
            <div
              class="bg-[#F4F4F4] py-2 px-4 flex items-center gap-2 rounded-md"
              v-for="(icon, index) in charIcons"
            >
              <div class="flex">
                <component :is="icon.icon" class="size-5 stroke-2" />
              </div>
              <div>
                <p class="text-[#A7A7A7] text-[14px]">
                  {{ icon.name }}
                </p>
                <p class="text-[#4E4E4E] text-[14px]">{{ icon.value }}</p>
              </div>
            </div>
          </div>
          <div>
            <p class="text-[#6C6C6C] text-[14px] leading-6">
              Enhanced capabilities thanks toan enlarged display of 6.7
              inchesand work without rechargingthroughout the day. Incredible
              photosas in weak, yesand in bright lightusing the new systemwith
              two cameras <b class="underline underline-offset-2">more...</b>
            </p>
          </div>
          <div class="grid grid-cols-2 gap-5">
            <button class="bg-[#FFFFFF] border py-4 px-18 rounded">
              <p>Add to Wishlist</p>
            </button>
            <button class="bg-black border py-4 px-18 rounded">
              <p class="text-white">Add to Cart</p>
            </button>
          </div>
          <div class="flex justify-between">
            <div v-for="icon in shopIcons" class="flex items-center gap-4">
              <div class="bg-[#F6F6F6] rounded-xl p-4">
                <component :is="icon.icon" class="stroke-1 stroke-[#797979]" />
              </div>
              <div class="text-[14px]">
                <p class="text-[#717171]">{{ icon.name }}</p>
                <p>{{ icon.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cart';
import {
  BatteryMedium,
  Camera,
  Cpu,
  ShieldCheck,
  Smartphone,
  Store,
  SwitchCamera,
  Truck,
} from 'lucide-vue-next';
import { ref } from 'vue';

const { cart, addToCart } = useCartStore();

const colors = [
  {
    images: [
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NzFzS1BRRzA4NTJUci9vckVTY21rM2lCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1RkcERRMUVIWTBwNlRNS3dVelNTTTVB&traceId=1',
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NzFzS1BRRzA4NTJUci9vckVTY21rM0NUcEx1KzZ4TU5aSmJ4VzBKZWFPSGppOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9xR29NcmlPMDBCZ0duWmFCZFM5b1hB&traceId=1',
    ],
    color: '#000000',
  },
  {
    images: [
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NVJrY0tZVVQzOFFrQ2FwbFZZamEzeEpOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2hWSm5HQVhUeDlTTVJFSzVnTlpqdUV3&traceId=1',
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-naturaltitanium_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NVJrY0tZVVQzOFFrQ2FwbFZZamEzeGRmOUZ0bkRhSmo2WHI5WEJWZ2lWZVpYSDhSZzY2ODduOURTVGFFY0ZXVW9ZZ2JOWjZNUlpwa083ZytaUU1IQ3QyRjJiT1I4YmlCT1JKcHVnZzV3S09mN3A1eWVMMnhURlJqcE1yQXVEWE1j&traceId=1',
    ],
    color: '#781DBC',
  },
];

const memoryCapacity = [
  {
    value: '128GB',
  },
  {
    value: '256GB',
  },
  {
    value: '512GB',
  },
  {
    value: '1TB',
  },
];

const charIcons = [
  {
    name: 'Screen size',
    value: '6.7"',
    icon: Smartphone,
  },
  {
    name: 'CPU',
    value: '4323 mAh',
    icon: Cpu,
  },
  {
    name: 'Number of Cores',
    value: '6',
    icon: Cpu,
  },
  {
    name: 'Main camera',
    value: '4323 mAh',
    icon: Camera,
  },
  {
    name: 'Front-camera',
    value: '12 MP',
    icon: SwitchCamera,
  },
  {
    name: 'Battery capacity',
    value: '4323 mAh',
    icon: BatteryMedium,
  },
];

const shopIcons = [
  {
    name: 'Free Delivery',
    value: '1-2 day',
    icon: Truck,
  },
  {
    name: 'In Stock',
    value: 'Today',
    icon: Store,
  },
  {
    name: 'Guaranteed',
    value: '1 year',
    icon: ShieldCheck,
  },
];

const selectedColor = ref(0);
const selectedImage = ref(0);
const selectedCapacity = ref(0);
console.log(selectedColor.value);
</script>
