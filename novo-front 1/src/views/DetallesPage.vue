<template>
    <div class="app">
  
      <main>
        <section class="product-detail">
          <div class="container">
            <div class="product-content">
              <div class="product-image">
                <img :src="product.imageUrl" :alt="product.name">
              </div>
              <div class="product-info">
                <h1>{{ product.name }}</h1>
                <p class="product-price">${{ product.price.toFixed(2) }}</p>
                <p class="product-creator">Publicado por: {{ product.creator }}</p>
                <p class="product-category">Categoría: {{ getCategoryName(product.category) }}</p>
                <p class="product-condition">Condición: {{ getConditionName(product.condition) }}</p>
                <p class="product-description">{{ product.description }}</p>
                <button @click="contactSeller" class="contact-button">Contactar</button>
              </div>
            </div>
          </div>
        </section>
      </main>
  
      <footer>
        <p>&copy; 2024 mercado estudiantil. todos los derechos reservados.</p>
        <nav>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy</a>
        </nav>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  
  const isDropdownOpen = ref(false)
  const userMenu = ref(null)
  
  // Mock product data (in a real app, this would be fetched from an API)
  const product = ref({
    name: 'Libro de Cálculo Avanzado',
    description: 'Libro de texto para el curso de Cálculo Avanzado. En excelente estado, apenas usado durante un semestre. Incluye todos los capítulos necesarios para el curso y ejercicios resueltos.',
    category: 'books',
    price: 45.000,
    condition: 'like-new',
    imageUrl: '/placeholder.svg?height=400&width=600',
    creator: 'ana marín'
  })
  

  
  const closeDropdown = (event) => {
    if (userMenu.value && !userMenu.value.contains(event.target)) {
      isDropdownOpen.value = false
    }
  }
  
  const getCategoryName = (category) => {
    const categories = {
      'books': 'Libros',
      'notes': 'Apuntes',
      'electronics': 'Electrónicos',
      'supplies': 'Suministros'
    }
    return categories[category] || category
  }
  
  const getConditionName = (condition) => {
    const conditions = {
      'new': 'Nuevo',
      'like-new': 'Como nuevo',
      'good': 'Buen estado',
      'fair': 'Estado aceptable',
      'poor': 'Mal estado'
    }
    return conditions[condition] || condition
  }
  
  const contactSeller = () => {
    // aqui abriria el chat con el vendedor
    alert(`Contactando al vendedor: ${product.value.creator}`)
  }
  
  onMounted(() => {
    document.addEventListener('click', closeDropdown)
  })
  
  onUnmounted(() => {
    document.removeEventListener('click', closeDropdown)
  })
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
    font-weight: bold;
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
    min-width: 150px;
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
  
  .product-detail {
    background-color: #E3F2FD;
    padding: 4rem 0;
  }
  
  .product-content {
    display: flex;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    overflow: hidden;
  }
  
  .product-image {
    flex: 1;
    max-width: 50%;
  }
  
  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .product-info {
    flex: 1;
    padding: 2rem;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .product-price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #4CAF50;
    margin-bottom: 1rem;
  }
  
  .product-creator,
  .product-category,
  .product-condition {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  .product-description {
    margin-bottom: 2rem;
  }
  
  .contact-button {
    background-color: #2196F3;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .contact-button:hover {
    background-color: #1976D2;
  }
  
  footer {
    background-color: #f5f5f5;
    padding: 1rem;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 4rem;
  }
  
  footer nav {
    margin-top: 0.5rem;
  }
  
  footer a {
    margin: 0 0.5rem;
    color: #666;
    text-decoration: none;
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
  
    .product-content {
      flex-direction: column;
    }
  
    .product-image {
      max-width: 100%;
    }
  
    .product-info {
      padding: 1.5rem;
    }
  
    h1 {
      font-size: 2rem;
    }
  }
  </style>