<script lang="ts">
import { Product } from './model/product.model'
import ProductCard from './components/card/ProductCard.vue'
import { Cart } from './model/cart.model'
import CartItem from './components/card/CartItem.vue'
export default {
  data() {
    return {
      cart: new Cart(),
      products: [
        new Product(1, 'Camiseta', 'Camiseta de algodão com estampa personalizada.', 49.99, 0.2),
        new Product(2, 'Guitarra', 'Guitarra elétrica com acabamento em madeira.', 299.99, 0.1),
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
  },
  components: {
    ProductCard,
    CartItem,
  },
}
</script>

<template>
  <main>
    <div v-for="product in products">
      <ProductCard :product="product" @onclick="addToCart" />
    </div>
  </main>
  <div>
    <h1>Carrinho</h1>
    <div v-for="item in cart.list" :key="item.product.id">
      <CartItem
        :item="item"
        @removeItem="removeFromCart"
        @decrementItem="removeItemQuantity"
        @incrementItem="addItemQuantity"
      />
    </div>
    <p>Total: {{ cart.getTotalPrice() }}</p>
  </div>
</template>
