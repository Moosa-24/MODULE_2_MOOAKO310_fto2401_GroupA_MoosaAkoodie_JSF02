import { writable, get } from 'svelte/store';

/**
 * A writable store for the list of products.
 * @type {import('svelte/store').Writable<Array<Product>>}
 */
const products = writable([]);

/**
 * A writable store for the original list of products.
 * @type {import('svelte/store').Writable<Array<Product>>}
 */
const originalProducts = writable([]);

/**
 * A writable store to manage the loading state.
 * @type {import('svelte/store').Writable<boolean>}
 */
const loading = writable(false);

/**
 * A writable store to manage error messages.
 * @type {import('svelte/store').Writable<string|null>}
 */
const error = writable(null);

/**
 * A writable store for sorting order of products.
 * @type {import('svelte/store').Writable<string>}
 */
const sorting = writable('default');

/**
 * A writable store for the search term used to filter products.
 * @type {import('svelte/store').Writable<string>}
 */
const searchTerm = writable('');

/**
 * A writable store for the selected filter category.
 * @type {import('svelte/store').Writable<string>}
 */
const filterItem = writable('All categories');

/**
 * Sets the sorting order and triggers sorting.
 * @param {string} newSorting - The new sorting order ('low', 'high', 'default').
 */
const setSorting = (newSorting) => {
  sorting.set(newSorting);
  sortProducts();
};

/**
 * Sets the search term and triggers product search.
 * @param {string} newSearchTerm - The new search term.
 */
const setSearchTerm = (newSearchTerm) => {
  searchTerm.set(newSearchTerm);
  searchProducts();
};

/**
 * Sets the filter category and triggers product fetching.
 * @param {string} newCategory - The new filter category.
 */
const setFilterItem = (newCategory) => {
  filterItem.set(newCategory);
  fetchProducts();
};

/**
 * Fetches products based on the current filter category and updates stores.
 * @returns {Promise<void>}
 */
const fetchProducts = async () => {
  loading.set(true);
  error.set(null);
  const category = get(filterItem);

  try {
    const response = await fetch(
      category !== 'All categories'
        ? `https://fakestoreapi.com/products/category/${category}`
        : 'https://fakestoreapi.com/products'
    );

    if (!response.ok) {
      throw new Error('Data fetching failed, please check your network connection');
    }

    const data = await response.json();
    products.set(data);
    originalProducts.set(data);

    sortProducts();
    searchProducts();
  } catch (err) {
    error.set(err.message);
  } finally {
    loading.set(false);
  }
};

/**
 * Sorts products based on the current sorting order.
 */
const sortProducts = () => {
  const currentProducts = get(products);
  const sortOrder = get(sorting);
  const sortedProducts = [...currentProducts];

  if (sortOrder === 'low') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else {
    products.set(get(originalProducts));
    return;
  }

  products.set(sortedProducts);
};

/**
 * Filters products based on the current search term.
 */
const searchProducts = () => {
  const currentSearchTerm = get(searchTerm).trim().toLowerCase();
  if (currentSearchTerm === '') {
    products.set(get(originalProducts));
    return;
  }

  const filteredProducts = get(originalProducts).filter((product) =>
    product.title.toLowerCase().includes(currentSearchTerm)
  );

  products.set(filteredProducts);
};

/**
 * Exports the stores and functions for use in Svelte components.
 */
export {
  products,
  originalProducts,
  loading,
  error,
  sorting,
  searchTerm,
  filterItem,
  setSorting,
  setSearchTerm,
  setFilterItem,
  fetchProducts,
  sortProducts,
  searchProducts
};
