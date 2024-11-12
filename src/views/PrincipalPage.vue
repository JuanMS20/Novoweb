<template>
    <div class="app">
    
  
      <main>
        <section class="hero">
          <div class="container">
            <h1>mercado estudiantil</h1>
            <p>compra y vende materiales estudiantiles de manera mas fácil, encuentra los mejores descuentos para libros, apuntes entre otros materiales.</p>
            <button class="publish-button">Publica tu producto</button>
          </div>
        </section>
  
        <section class="categories">
          <div class="container">
            <h2>Categories</h2>
            <div class="category-grid">
              <div class="category-card">
                <book-icon />
                <h3>Books</h3>
                <p>encuentra y vende libros para todos los cursos</p>
              </div>
              <div class="category-card">
                <pencil-icon />
                <h3>Notes</h3>
                <p>comparte y ten acceso a apuntes de alta calidad</p>
              </div>
              <div class="category-card">
                <laptop-icon />
                <h3>Electronics</h3>
                <p>compra y vende calculadoras, laptops etc</p>
              </div>
              <div class="category-card">
                <calculator-icon />
                <h3>Supplies</h3>
                <p>Abastécete de útiles escolares esenciales</p>
              </div>
            </div>
          </div>
        </section>
  
        <section class="featured-products">
          <div class="container">
            <h2>Featured Products</h2>
            <div class="product-grid">
              <div v-for="i in 4" :key="i" class="product-card">
                <img :src="`/placeholder.svg?height=200&width=300`" :alt="`Product ${i}`" />
                <div class="product-info">
                  <h3>Product Name</h3>
                  <p>Aquí va una breve descripción del producto.</p>
                  <div class="product-footer">
                    <span class="price">$XX.XX</span>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section class="latest-listings">
          <div class="container">
            <h2>Latest Listings</h2>
            <div class="product-grid">
              <div v-for="i in 4" :key="i" class="product-card">
                <img :src="`/placeholder.svg?height=200&width=300`" :alt="`New Listing ${i}`" />
                <div class="product-info">
                  <h3>New Listing</h3>
                  <p>mira este producto!</p>
                  <div class="product-footer">
                    <span class="price">$XX.XX</span>
                    <button class="outline">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  
      <footer>
        <p>© 2024 StudentMarket. Todos los derechos reservados</p>
        <nav>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy</a>
        </nav>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { BookIcon, PencilIcon, LaptopIcon, CalculatorIcon } from 'lucide-vue-next'
  
  
  </script>
  
  <style scoped>
  .app {
    font-family: Arial, sans-serif;
    color: #333;
    line-height: 1.6;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .logo svg {
    margin-right: 0.5rem;
  }
  
  nav a {
    margin-left: 1rem;
    text-decoration: none;
    color: #333;
  }
  
  .user-menu {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    color: black;

  }
  
  .user-menu svg {
    margin-right: 0.5rem;
  }
  
  .dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 10;
    min-width: 180px;
  }
  
  .dropdown-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    color: #333;
    text-decoration: none;
    transition: background-color 0.2s ease;
  }
  
  .dropdown-item:hover {
    background-color: #f5f5f5;
  }
  
  .dropdown-item svg {
    margin-right: 0.5rem;
  }
  
  .hero {
    background-color: #E3F2FD;
    padding: 4rem 0;
    text-align: center;
  }
  
  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .publish-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 2rem;
    transition: background-color 0.3s ease;
  }
  
  .publish-button:hover {
    background-color: #45a049;
  }
  
  .categories {
    background-color: #E8F5E9;
    padding: 4rem 0;
  }
  
  .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .category-card {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .category-card svg {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
  }
  
  .featured-products, .latest-listings {
    padding: 4rem 0;
  }
  
  .latest-listings {
    background-color: #E3F2FD;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .product-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .product-info {
    padding: 1rem;
  }
  
  .product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }
  
  .price {
    font-weight: bold;
  }
  
  button {
    background-color: #2196F3;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button.outline {
    background-color: transparent;
    color: #2196F3;
    border: 1px solid #2196F3;
  }
  
  footer {
    background-color: #f5f5f5;
    padding: 1rem;
    text-align: center;
    font-size: 0.9rem;
  }
  
  footer nav {
    margin-top: 0.5rem;
  }
  
  footer a {
    margin: 0 0.5rem;
    color: #666;
    text-decoration: none;
  }
  
  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    header {
      flex-direction: column;
      align-items: flex-start;
    }
  
    nav {
      margin-top: 1rem;
    }
  
    nav a {
      margin-left: 0;
      margin-right: 1rem;
    }
  
    .user-menu {
      margin-top: 1rem;
    }
  
    .hero h1 {
      font-size: 2rem;
    }
  
    .category-grid, .product-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>