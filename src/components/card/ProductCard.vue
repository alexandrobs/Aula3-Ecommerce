<template>
  <article>
    <h1>{{ product?.title }}</h1>
    <p>{{ product?.description }}</p>
    <p>Preço: R$ {{ product?.price.toFixed(2).replace('.', ',') }}</p>
    <button @click="addToCart(product!)">Adicionar ao carrinho</button>
  </article>
</template>
<script lang="ts">
import type { Product } from '@/model/product.model'
import { defineComponent, type PropType } from 'vue'
export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
    },
  },
  emits: { onclick },
  methods: {
    addToCart(product: Product) {
      this.$emit('onclick', product)
    },
  },
})
</script>
