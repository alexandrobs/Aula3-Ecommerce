<template>
  <div>
    <h3>{{ item.product.title }}</h3>
    <p>{{ item.product.getPrice() }}</p>
    <span>
      {{ item.quantity }}&nbsp<button @click="onDecrementItem(item.product)">{{ ' - ' }}</button>
      &nbsp
      <button @click="onIncrementItem(item.product)">{{ ' + ' }}</button>
    </span>
    &nbsp
    <button @click="onRemoveItem(item.product)">Deletar</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { ICartItem } from '@/model/cart.model'
import type { Product } from '@/model/product.model'
export default defineComponent({
  props: {
    item: {
      type: Object as PropType<ICartItem>,
      required: true,
    },
  },
  emits: ['removeItem', 'decrementItem', 'incrementItem'],
  methods: {
    onDecrementItem(product: Product) {
      this.$emit('decrementItem', product)
    },
    onIncrementItem(product: Product) {
      this.$emit('incrementItem', product)
    },
    onRemoveItem(product: Product) {
      this.$emit('removeItem', product)
    },
  },
})
</script>
