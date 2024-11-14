<template>
  <div>
    <section class="product-detail">
      <div class="container">
        <div class="product-content">
          <div class="product-image">
            <img :src="require('@/assets/libromat.jpg')" :alt="product.name" class="product-image-size" />
          </div>
          <div class="product-info">
            <h1>{{ product.name }}</h1>
            <p class="product-price">${{ product.price.toFixed(2) }}</p>
            <p class="product-creator">Publicado por: {{ product.creator }}</p>
            <p class="product-category">Categoría: {{ getCategoryName(product.category) }}</p>
            <p class="product-condition">Condición: {{ getConditionName(product.condition) }}</p>
            <p class="product-description">{{ product.description }}</p>
            <button @click="toggleContactModal" class="contact-button">Contactar</button>
            <button @click="toggleFavorite" class="favorite-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" :fill="isFavorite ? 'red' : 'none'" :stroke="isFavorite ? 'red' : 'black'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 21c-.6 0-1.2-.2-1.7-.5L3 16.2c-1.6-1.1-2.6-2.9-2.6-4.7 0-3.2 2.6-5.8 5.8-5.8 1.6 0 3.1.6 4.2 1.7 1.1-1.1 2.6-1.7 4.2-1.7 3.2 0 5.8 2.6 5.8 5.8 0 1.8-1 3.6-2.6 4.7l-7.3 4.3c-.5.3-1.1.5-1.7.5z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal de contacto como ventana emergente -->
    <div v-if="isContactModalOpen" class="modal-overlay" @click="closeContactModal">
      <ContactoUser @close="toggleContactModal" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ContactoUser from '@/components/ContactoUser.vue'

// Datos simulados del producto
const product = ref({
  name: 'Libro de Cálculo Avanzado',
  description: 'Libro de texto para el curso de Cálculo Avanzado. En excelente estado...',
  category: 'books',
  price: 45.00,
  condition: 'like-new',
  imageUrl: '/placeholder.svg?height=400&width=600',
  creator: 'Ana Marín'
})

const isContactModalOpen = ref(false)
const isFavorite = ref(false)

const toggleContactModal = () => {
  isContactModalOpen.value = !isContactModalOpen.value
}

const closeContactModal = () => {
  isContactModalOpen.value = false
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
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
</script>

<style scoped>
.product-detail {
  background-color: #E3F2FD;
  padding: 4rem 0;
}

.product-content {
  display: flex;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.product-image {
  flex: 1;
  max-width: 50%;
}

.product-image-size {
  width: 70%; /* Imagen más pequeña (ajustada a 70%) */
  height: auto;
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

.favorite-button {
  background: none;
  border: none;
  cursor: pointer;
}

.heart {
  font-size: 2.5rem; /* Tamaño del corazón */
  transition: color 0.3s, background-color 0.3s;
}

.heart-filled {
  background-color: red;
  color: red;
}

.heart-empty {
  background-color: transparent;
  color: transparent;
  border: 3px solid red;
}

/* Estilos para el modal de contacto como ventana emergente */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>
