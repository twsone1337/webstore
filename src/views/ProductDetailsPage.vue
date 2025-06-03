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
        <div class="col-span-6">
          <img
            :src="colors[selectedColor].images[selectedImage]"
            alt="IphonePurpler"
            class="aspect-[9/12] object-cover"
          />
        </div>
        <div class="col-span-5">
          <p class="text-3xl font-bold">Apple iPhone 14 Pro Max</p>
          <div class="flex gap-5 mt-5 items-center">
            <p class="text-2xl">$1399</p>
            <p class="line-through text-[#A0A0A0] text-xl">$1499</p>
          </div>
          <div class="flex gap-5 items-center mt-5">
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
          <div class="flex justify-between gap-5 mt-5">
            <div
              v-for="(item, index) in memoryCapacity"
              class="border-2 px-6 py-4 rounded-xl cursor-pointer"
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
          <div class="grid grid-cols-3 grid-rows-2 gap-5 mt-5">
            <div
              class="bg-[#F4F4F4] py-2 px-4 flex items-center gap-2"
              v-for="(icon, index) in icons"
            >
              <div class="flex">
                <component :is="icon.icon" />
              </div>
              <div>
                <p class="text-[#A7A7A7]">{{ icon.name }}</p>
                <p class="text-[#4E4E4E]">{{ icon.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  BatteryMedium,
  Camera,
  Cpu,
  Smartphone,
  SwitchCamera,
} from 'lucide-vue-next';
import { ref } from 'vue';

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

const icons = [
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

const selectedColor = ref(0);
const selectedImage = ref(0);
const selectedCapacity = ref(0);
console.log(selectedColor.value);
</script>
