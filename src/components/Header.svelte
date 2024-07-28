<script>
    import { onMount } from 'svelte';
    
    let navbarOpen = false;
  
    const toggleNavbar = () => {
      navbarOpen = !navbarOpen;
    };
  
    onMount(() => {
      const handleOutsideClick = (event) => {
        if (!event.target.closest('#navbar-dropdown') && !event.target.closest('button')) {
          navbarOpen = false;
        }
      };
  
      document.addEventListener('click', handleOutsideClick);
      return () => document.removeEventListener('click', handleOutsideClick);
    });
  </script>
  
  <header class="sticky top-0 z-50">
    <nav class="bg-gray-500 border-gray-200">
      <div class="mx-auto p-4 flex items-center justify-between max-w-screen-xl">
        <div class="flex items-center">
          <a href="/">
            <button class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/online-shop.png" class="h-8" alt="SwiftCart Logo" />
              <span class="text-white text-2xl font-semibold whitespace-nowrap self-center">
                SwiftCart
              </span>
            </button>
          </a>
          <button
            on:click={toggleNavbar}
            type="button"
            class="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded={navbarOpen}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
  
        <div class="hidden md:flex items-center space-x-4 ml-auto">
          <a
            href="#"
            class="text-white block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
          >
            Wishlist
          </a>
          <a href="#" class="relative">
            <div class="absolute top-0 left-0 flex items-center justify-center h-4 w-4 bg-red-500 rounded-full text-xs text-white -translate-x-1/2 -translate-y-1/2">
              2
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="stroke-white h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </a>
          <a
            href="login"
            class="text-white block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
          >
            Login
          </a>
        </div>
  
        <div
          id="navbar-dropdown"
          class={`w-full md:hidden ${navbarOpen ? '' : 'hidden'}`}
        >
          <ul class="flex flex-col mt-4 p-4 border border-gray-100 rounded-lg bg-gray-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-medium">
            <!-- Remove duplicate Wishlist, Cart, and Login links -->
          </ul>
        </div>
      </div>
    </nav>
  </header>
  
  <style>
    .h-6 {
      height: 24px; /* Adjust this value as needed */
    }
  
    .w-6 {
      width: 24px; /* Adjust this value as needed */
    }
  
    .absolute {
      position: absolute;
    }
  
    .flex {
      display: flex;
    }
  
    .items-center {
      align-items: center;
    }
  
    .justify-center {
      justify-content: center;
    }
  
    .ml-auto {
      margin-left: auto;
    }
  </style>
  