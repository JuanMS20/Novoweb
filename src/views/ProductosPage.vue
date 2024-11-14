<template>
  <div class="app">


    <main class="product-listing">
      <aside class="sidebar">
        <h2>Filtros</h2>
        <div class="filter-section">
          <h3>Categorías</h3>
          <ul>
            <li v-for="category in categories" :key="category.value">
              <label>
                <input type="checkbox" v-model="selectedCategories" :value="category.value">
                {{ category.label }}
              </label>
            </li>
          </ul>
        </div>
        <div class="filter-section">
          <h3>Condición</h3>
          <ul>
            <li v-for="condition in conditions" :key="condition.value">
              <label>
                <input type="checkbox" v-model="selectedConditions" :value="condition.value">
                {{ condition.label }}
              </label>
            </li>
          </ul>
        </div>
        <div class="filter-section">
          <h3>Precio</h3>
          <div class="price-range">
            <input type="number" v-model="minPrice" placeholder="Min">
            <span>-</span>
            <input type="number" v-model="maxPrice" placeholder="Max">
          </div>
        </div>
        <button @click="applyFilters" class="apply-filters-btn">Aplicar Filtros</button>
      </aside>

      <section class="product-grid">
        <h1>Productos</h1>
        <div class="products">
          <div v-for="product in filteredProducts" :key="product.id" class="product-card">
            <img :src="product.imageUrl" :alt="product.name">
            <div class="product-info">
              <h3>{{ product.name }}</h3>
              <p class="product-price">${{ product.price.toFixed(2) }}</p>
              <p class="product-category">{{ getCategoryName(product.category) }}</p>
              <button @click="viewProduct(product.id)" class="view-button">Ver Detalles</button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2024 StudentMarket. All rights reserved.</p>
      <nav>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy</a>
      </nav>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'


const categories = [
  { value: 'books', label: 'Libros' },
  { value: 'notes', label: 'Apuntes' },
  { value: 'electronics', label: 'Electrónicos' },
  { value: 'supplies', label: 'Suministros' }
]

const conditions = [
  { value: 'new', label: 'Nuevo' },
  { value: 'like-new', label: 'Como nuevo' },
  { value: 'good', label: 'Buen estado' },
  { value: 'fair', label: 'Estado aceptable' },
  { value: 'poor', label: 'Mal estado' }
]

const selectedCategories = ref([])
const selectedConditions = ref([])
const minPrice = ref(null)
const maxPrice = ref(null)

const products = ref([
  { id: 1, name: 'Libro de Cálculo', category: 'books', price: 45.99, condition: 'like-new', imageUrl: '/placeholder.svg?height=200&width=300' },
  { id: 2, name: 'Apuntes de Física', category: 'notes', price: 15.00, condition: 'good', imageUrl: '/placeholder.svg?height=200&width=300' },
  { id: 3, name: 'Calculadora Científica', category: 'electronics', price: 89.99, condition: 'new', imageUrl: '/placeholder.svg?height=200&width=300' },
  { id: 4, name: 'Set de Lápices', category: 'supplies', price: 12.50, condition: 'new', imageUrl: '/placeholder.svg?height=200&width=300' },
  { id: 5, name: 'Libro de Química', category: 'books', price: 55.00, condition: 'fair', imageUrl: '/placeholder.svg?height=200&width=300' },
  { id: 6, name: 'Laptop Usada', category: 'electronics', price: 350.00, condition: 'good', imageUrl: '/placeholder.svg?height=200&width=300' },
])

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const categoryMatch = selectedCategories.value.length === 0 || selectedCategories.value.includes(product.category)
    const conditionMatch = selectedConditions.value.length === 0 || selectedConditions.value.includes(product.condition)
    const priceMatch = (!minPrice.value || product.price >= minPrice.value) && (!maxPrice.value || product.price <= maxPrice.value)
    return categoryMatch && conditionMatch && priceMatch
  })
})



const getCategoryName = (category) => {
  const categoryObj = categories.find(c => c.value === category)
  return categoryObj ? categoryObj.label : category
}

const applyFilters = () => {
  console.log('Applying filters:', { selectedCategories: selectedCategories.value, selectedConditions: selectedConditions.value, minPrice: minPrice.value, maxPrice: maxPrice.value })
}

const viewProduct = (productId) => {
  console.log('Viewing product:', productId)
}

</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
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

.product-listing {
  display: flex;
  background-color: #E3F2FD;
  padding: 2rem;
}

.sidebar {
  width: 250px;
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-right: 2rem;
}

.sidebar h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.filter-section {
  margin-bottom: 1.5rem;
}

.filter-section h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.filter-section ul {
  list-style-type: none;
  padding: 0;
}

.filter-section li {
  margin-bottom: 0.5rem;
}

.price-range {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.price-range input {
  width: 70px;
  padding: 0.25rem;
}

.apply-filters-btn {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.apply-filters-btn:hover {
  background-color: #45a049;
}

.product-grid {
  flex: 1;
}

.product-grid h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 1rem;
}

.product-info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.product-price {
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 0.5rem;
}

.product-category {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.view-button {
  width: 100%;
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.view-button:hover {
  background-color: #1976D2;
}

footer {
  background-color: #f5f5f5;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 2rem;
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

  .product-listing {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }

  .products {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>