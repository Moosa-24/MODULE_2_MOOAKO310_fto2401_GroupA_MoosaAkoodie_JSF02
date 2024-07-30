<script>
    import { filterItem, setFilterItem } from '../Store/productStore';
    
    let selectedCategory = '';
    let categories = [];
    
     /**
     * Fetches product categories from the API and adds them to the categories array.
     * Adds "All Categories" as an additional option.
     * @async
     * @function fetchCategories
     * @returns {Promise<void>}
     */
    async function fetchCategories() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        categories = await response.json();
        // Add "All Categories" as an option
        categories.unshift('All Categories');
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    
     /**
     * Handles the change event for the category selection.
     * Updates the selected category and sets the filter item in the store.
     * @function handleChange
     * @param {Event} event - The change event object. (giving an error??)
     */
    function handleChange(event) {
      selectedCategory = event.target.value;
      setFilterItem(selectedCategory === 'All Categories' ? '' : selectedCategory);
    }
    
    // Fetch categories when component mounts
    fetchCategories();
</script>

<div class="container filter">
    <select bind:value={selectedCategory} on:change={handleChange} class="select-element">
      {#each categories as category}
        <option value={category}>{category}</option>
      {/each}
    </select>
</div>

<style>
 * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #ccf8fc;
      color: #333;
    }

    .container {
  position: absolute; /* Use absolute positioning */
  top: 27%; /* Adjust top position as needed */
  right: 20%; /* Adjust left position as needed */
  width: 20%;
  margin: 0; /* Remove margin when using absolute positioning */
}

    .flex {
      display: flex;
      align-items: center;
    }

    .sm\:w-\[95\%\] {
      width: 95%;
    }

    .max-w-\[21rem\] {
      max-width: 21rem;
    }

    .md\:w-full {
      width: 100%;
    }

    .w-20 {
      width: 5rem;
    }

    .my-auto {
      margin: auto;
    }

    .font-semibold {
      font-weight: 600;
    }

    .select-element {
  padding: 0.625rem; /* 10px */
  border-radius: 0.75rem;
  border: 2px solid #d1d5db;
  font-size: 0.875rem; /* text-sm */
  background-color: #f9f9f9;
  color: #1a1a1a;
  width: 100%;
}

.select-element:focus {
  outline-color: #3b82f6;
  border-color: #3b82f6;
}
  </style>
