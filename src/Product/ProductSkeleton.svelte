<script>
  /**
   * Imports the ProductCard component and product-related stores.
   * @module ProductList
   */
  
  import ProductCard from './ProductCard.svelte';
  import { products, loading } from '../Store/productStore'; 
  
  /**
   * Array of products to be displayed.
   * @type {Array}
   */
  let items = [];
  
  /**
   * Reactive statement to update `items` when `loading` or `products` changes.
   * @type {void}
   */
  $: if (!loading) {
    items = $products;
  }
</script>
  
{#if loading}
  <ProductSkeleton />
{:else}
  {#each items as product (product.id)}
    <ProductCard
      {product.id}
      {product.title}
      {product.image}
      {product.price}
      {product.rating}
      {product.category}
    />
  {/each}
{/if}
  
<style>
  /* Add your CSS styles here */
</style>
