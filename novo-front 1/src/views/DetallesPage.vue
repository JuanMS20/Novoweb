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
            <button @click="toggleFavorite" class="favorite-button" :class="{ 'is-favorite': isFavorite }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                :fill="isFavorite ? '#ff4b4b' : 'none'"
                :stroke="isFavorite ? '#ff4b4b' : '#666'"
                stroke-width="2"
                class="heart-icon"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Toast Notification -->
    <Transition name="fade">
      <div v-if="showToast" class="toast-notification" :class="{ 'show': showToast }">
        <span class="toast-icon">❤️</span>
        <span class="toast-message">{{ isFavorite ? 'Añadido a favoritos' : 'Eliminado de favoritos' }}</span>
      </div>
    </Transition>

    <!-- Contact Modal -->
    <div v-if="isContactModalOpen" class="modal-overlay" @click="closeContactModal">
      <ContactoUser @close="toggleContactModal" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ContactoUser from '@/components/ContactoUser.vue'

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
const showToast = ref(false)

const toggleContactModal = () => {
  isContactModalOpen.value = !isContactModalOpen.value
}

const closeContactModal = () => {
  isContactModalOpen.value = false
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
  showToast.value = true
  
  // Hide toast after 2 seconds
  setTimeout(() => {
    showToast.value = false
  }, 2000)
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
  width: 70%;
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
  margin-right: 1rem;
}

.contact-button:hover {
  background-color: #1976D2;
}

.favorite-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

.favorite-button:hover {
  transform: scale(1.1);
}

.favorite-button:active {
  transform: scale(0.95);
}

.heart-icon {
  transition: all 0.3s ease;
}

.is-favorite .heart-icon {
  animation: heartBeat 0.3s ease-in-out;
}

/* Toast Notification Styles */
.toast-notification {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.toast-notification.show {
  opacity: 1;
}

.toast-icon {
  font-size: 1.2rem;
}

.toast-message {
  font-size: 0.95rem;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes heartBeat {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
</style>