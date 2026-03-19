<template>
  <div>
    <!-- <div>
    <h3>{{ item.product.title }}</h3>
    <p>{{ item.product.getPrice() }}</p>
    <span>
      {{ item.quantity }}&nbsp<button @click="onDecrementItem(item.product)">{{ ' - ' }}</button>
      &nbsp
      <button @click="onIncrementItem(item.product)">{{ ' + ' }}</button>
    </span>
    &nbsp
    <button @click="onRemoveItem(item.product)">Deletar</button>
  </div> -->
    <Card :style="{ width: '100%', minWidth: '200px', maxWidth: '420px' }">
      <template #content>
        <div class="flex flex-row gap-2">
          <img :src="'https://picsum.photos/200'" class="w-20" />
          <h3 class="flex-1 px-4">{{ item.product.title }}</h3>
          <p>{{ item.product.getPrice() }}</p>
          <span>
            {{ item.quantity }}&nbsp<button @click="onDecrementItem(item.product)">
              {{ ' - ' }}
            </button>
            &nbsp
            <button @click="onIncrementItem(item.product)">{{ ' + ' }}</button>
          </span>
        </div>
      </template>
      <template #footer>
        <div class="flex flex-row-reverse">
          <Button label="Deletar" @click="onRemoveItem(item.product)" />
        </div>
      </template>
    </Card>
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
