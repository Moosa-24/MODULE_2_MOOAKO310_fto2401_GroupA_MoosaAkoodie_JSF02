<script>
    import { productDetails } from '../Store/productStore';
  
    let product = {}; 
  
    // Example of fetching product details
    productDetails.subscribe(value => {
      product = value;
    });

    /**
   * @typedef {Object} Product
   * @property {number} id - The ID of the product.
   * @property {string} title - The title of the product.
   * @property {string} description - The description of the product.
   * @property {string} image - The URL of the product image.
   * @property {number} price - The price of the product.
   * @property {number} rating - The rating of the product.
   * @property {string} category - The category of the product.
   */
  
  </script>
  
  /**
  * The product details to be displayed.
  * @type {Product}
  */
  <ProductDetail
    {product.id}
    {product.title}
    {product.description}
    {product.image}
    {product.price}
    {product.rating}
    {product.category}
  />
  
  <style>
    
  </style>
  