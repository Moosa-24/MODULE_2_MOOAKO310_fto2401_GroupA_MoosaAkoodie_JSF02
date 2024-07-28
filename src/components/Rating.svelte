<script>
    export let rate = 0;
    export let count = 5;
  
    const isFilled = (starIndex) => rate >= starIndex;
  </script>
  
  <div class="stars">
    {#each Array(count).fill(0).map((_, index) => index + 1) as starIndex}
      <span class="star {isFilled(starIndex) ? 'filled' : ''}">&#9733;</span>
    {/each}
  </div>
  
  <style>
    .stars {
      display: inline-flex;
      font-size: 1.25rem;
      margin-bottom: 8px; /* Space below the stars */
    }
  
    .star {
      color: #ddd; /* Light grey for unfilled stars */
      margin: 0 2px; /* Space between stars */
      font-size: 1.5rem; /* Size of the stars */
      transition: color 0.3s; /* Smooth transition for color change */
    }
  
    .star.filled {
      color: #f5b301; /* Gold color for filled stars */
    }
  </style>
  