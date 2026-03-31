<template>
  <div v-if="product?.id">
    <ProductCard :product="product" />
  </div>
  <div v-else>Não existe esse produto</div>
</template>
<script lang="ts">
import { Product } from '@/model/product.model'
import { defineComponent } from 'vue'
import ProductCard from '@/components/card/ProductCard.vue'
export default defineComponent({
  data() {
    return {
      productId: this.$route.params.id,
      product: {} as Product | undefined,
    }
  },
  components: {
    ProductCard,
  },
  methods: {
    getProduct() {
      const product = [
        new Product('1', 'Camiseta', 'Camiseta de algodão com estampa personalizada.', 49.99, 0.2),
        new Product('2', 'Guitarra', 'Guitarra elétrica com acabamento em madeira.', 299.99, 0.1),
      ].find((p) => p.id === this.productId)
      this.product = product
      console.log(this.product)
    },
  },
  mounted() {
    this.getProduct()
  },
})
</script>
