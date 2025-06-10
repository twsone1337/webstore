import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);

  const totalPrice = computed(() => {
    return cart.value
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  });

  function addToCart(product) {
    const itemInCart = cart.value.find((i) => i.id === product.id);

    if (!itemInCart) {
      // const newProduct = item;
      // newProduct.quantity = 1;
      const newProduct = { ...product, quantity: 1 };
      cart.value.push(newProduct);
    } else {
      itemInCart.quantity += 1;
    }
  }

  function deleteFromCart(index) {
    cart.value.splice(index, 1);
  }

  function incrementQuantity(index) {
    cart.value[index].quantity += 1;
  }
  function decrementQuantity(index) {
    cart.value[index].quantity -= 1;
    if (cart.value[index].quantity === 0) {
      deleteFromCart(index);
    }
  }

  return {
    cart,
    addToCart,
    deleteFromCart,
    incrementQuantity,
    decrementQuantity,
    totalPrice,
  };
});
// деструктуризация, спред (...) и find
