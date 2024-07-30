<script>
  import { onMount } from 'svelte';
  import ProductList from '../Product/ProductList.svelte';
  import { products } from '../Store/productStore';

  /** 
   * @type {boolean} loading - Indicates if the products are currently being loaded.
   */
  let loading = true;

  /** 
   * @type {Error|null} loadError - Stores any error encountered during product loading.
   */
  let loadError = null;

  /**
   * Hook that runs after the component is first rendered.
   * Loads the products from the API.
   */
  onMount(async () => {
    try {
      await loadProducts();
      loading = false;
    } catch (err) {
      loadError = err;
      loading = false;
    }
  });

  /**
   * Fetches products from the API and sets the product store.
   * @async
   * @function
   * @throws Will throw an error if the fetch operation fails.
   */
  async function loadProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const productData = await response.json();
    products.set(productData);
  }
</script>

<main>
  {#if loading}
    <p>Loading...</p>
  {:else if loadError}
    <p>Error loading products: {loadError.message}</p>
  {:else}
    <ProductList />
  {/if}
</main>

<style>
  main {
    padding: 1rem;
  }
</style>
