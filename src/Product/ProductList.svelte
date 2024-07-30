<script>
  import ProductCard from './ProductCard.svelte';
  import { products } from '../Store/productStore';
  import { get } from 'svelte/store';
  
  /**
   * @description Get the initial value of the products store and subscribe to changes.
   */
  let productList = get(products);

  /**
   * @description Subscribe to the products store to update productList whenever it changes.
   */
  products.subscribe(value => {
    productList = value;
  });

  /**
   * @function handleNavigate
   * @param {CustomEvent} event - The event triggered when a product card is clicked.
   * @description Handle navigation to the product detail page.
   */
  const handleNavigate = (event) => {
    console.log('Navigate to product:', event.detail.id);
  };
</script>

<div class="product-list-container">
  <!-- Display the list of products -->
  <div class="product-list">
    {#each productList as product}
      <ProductCard {product} on:navigate={handleNavigate} />
    {/each}
  </div>
</div>

<style>
  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
</style>
