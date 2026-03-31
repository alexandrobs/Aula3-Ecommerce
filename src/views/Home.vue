<script lang="ts">
import { Product } from '@/model/product.model'
import ProductCard from '@/components/card/ProductCard.vue'
import { Cart } from '@/model/cart.model'
import CartItem from '@/components/card/CartItem.vue'
export default {
  data() {
    return {
      cart: new Cart(),
      products: [
        new Product('1', 'Camiseta', 'Camiseta de algodão com estampa personalizada.', 49.99, 0.2),
        new Product('2', 'Guitarra', 'Guitarra elétrica com acabamento em madeira.', 299.99, 0.1),
      ],
    }
  },
  methods: {
    addToCart(product: Product) {
      this.cart.addItemToCart(product)
    },
    removeFromCart(product: Product) {
      this.cart.removeItemFromCart(product)
    },
    removeItemQuantity(product: Product) {
      this.cart.decrementItem(product)
    },
    addItemQuantity(product: Product) {
      this.cart.incrementItem(product)
    },
    goToDetail(product: Product) {
      const id = product.id
      this.$router.push({ path: `/product/${id}` })
    },
  },
  components: {
    ProductCard,
    CartItem,
  },
}
</script>

<template>
  <main>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" @view-detail="goToDetail" @onclick="addToCart" />
      </div>
    </section>
  </main>
  <div>
    <h1>Carrinho</h1>
    <div v-if="cart.list.length > 0" class="flex flex-col gap-4">
      <div v-for="item in cart.list" :key="item.product.id">
        <CartItem
          :item="item"
          @removeItem="removeFromCart"
          @decrementItem="removeItemQuantity"
          @incrementItem="addItemQuantity"
        />
      </div>
    </div>
    <div
      v-else
      class="border border-slate-500 bg-slate-400 rouded-sm h-64 w-1/2 flex items-center justify-center"
    >
      <h1>{{ 'Não existe itens no carrinho. Vamos comprar?' }}</h1>
    </div>
    <p>Total: {{ cart.getTotalPrice() }}</p>
  </div>
  <Button label="Primevue" />
</template>
