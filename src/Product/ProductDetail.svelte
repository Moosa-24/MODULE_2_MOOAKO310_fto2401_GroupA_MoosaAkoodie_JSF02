<script>
    import { productDetails } from '../Store/productStore';
  
    let product = {}; 
  
    // Example of fetching product details
    productDetails.subscribe(value => {
      product = value;
    });
  </script>
  
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
  