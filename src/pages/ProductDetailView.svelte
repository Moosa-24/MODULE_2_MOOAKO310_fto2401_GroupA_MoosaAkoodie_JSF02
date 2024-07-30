<script>
  /**
   * A Svelte component for displaying a single product's details.
   * This component fetches product data based on the product ID from the URL parameters.
   * It handles loading states, errors, and displays the product details once fetched.
   *
   * @module ProductPage
   * @requires svelte
   * @requires ../api/api
   * @requires ../Product/ProductDetail.svelte
   * @requires ../Product/ProductSkeleton.svelte
   * @requires ../components/Error.svelte
   */
  import { onMount } from 'svelte';
  import { fetchSingleProduct } from '../api/api';//didnt even get to the point of applying this
  import ProductDetail from '../Product/ProductDetail.svelte';
  import ProductSkeleton from '../Product/ProductSkeleton.svelte';
  import Error from '../components/Error.svelte';

  /**
   * The product object containing details of the fetched product.
   * @type {Object}
   */
  let product = {};

  /**
   * The error object in case of a failed fetch operation.
   * @type {Object|null}
   */
  let error = null;

  /**
   * A boolean indicating the loading state.
   * @type {boolean}
   */
  let loading = false;

  /**
   * The ID of the product fetched from the URL parameters.
   * @type {string|undefined}
   */
  let id;

  // Use the `id` from the URL params
  $: {
    id = $page.params.id;
  }

  onMount(async () => {
    loading = true;
    const { response, error: fetchError } = await fetchSingleProduct(id);
    if (fetchError) {
      error = fetchError;
    } else {
      product = response;
    }
    loading = false;
  });
</script>

{#if error}
  <div class="flex justify-center">
    <Error {...error} />
  </div>
{:else if loading}
  <div class="flex justify-center">
    <ProductSkeleton />
  </div>
{:else}
  <div class="flex justify-center">
    <ProductDetail {...product} />
  </div>
{/if}
