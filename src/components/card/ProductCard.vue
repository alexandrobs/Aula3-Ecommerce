<template>
  <Card :style="{ width: '100%', minWidth: '200px', maxWidth: '220px' }">
    <template #header>
      <img
        :src="'https://picsum.photos/200'"
        class="w-full object-cover cursor-pointer"
        @click="viewDetail(product)"
      />
    </template>
    <template #title>
      <h1>{{ product?.title }}</h1>
    </template>
    <template #content>
      <p>{{ product?.description }}</p>
      <p>Preço: R$ {{ product?.price.toFixed(2).replace('.', ',') }}</p>
    </template>
    <template #footer>
      <div class="flex flex-row-reverse">
        <Button label="Adicionar ao carrinho" @click.stop="addToCart(product)" />
      </div>
    </template>
  </Card>
</template>

<script lang="ts">
import type { Product } from '@/model/product.model'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  emits: ['onclick', 'view-detail'],
  methods: {
    addToCart(product: Product) {
      this.$emit('onclick', product)
    },
    viewDetail(product: Product) {
      this.$emit('view-detail', product)
    },
  },
})
</script>
