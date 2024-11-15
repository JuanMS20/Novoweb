<template>
  <div class="app">
    <main>
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="animated-text">Mercado Estudiantil</h1>
            <p class="fade-in">Compra y vende materiales estudiantiles de manera más fácil, encuentra los mejores descuentos para libros, apuntes, entre otros materiales.</p>
            <router-link to="/crearproducto">
              <button class="publish-button">Publica tu producto</button>
            </router-link>
          </div>
        </div>
      </section>

      <!-- Categories Section -->
      <section class="categories">
        <div class="container">
          <h2 class="section-title">Categorías</h2>
          <div class="category-grid">
            <div v-for="(category, index) in categories" :key="index" class="category-card">
              <component :is="category.icon" />
              <h3>{{ category.title }}</h3>
              <p>{{ category.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Products Section -->
      <section class="featured-products">
        <div class="container">
          <h2 class="section-title">Productos Destacados</h2>
          <div class="product-grid">
            <div v-for="i in 8" :key="i" class="product-card" :class="{ 'hover-effect': true }">
              <div class="product-image">
                <img :src="`https://picsum.photos/300/200?random=${i}`" :alt="'Producto ' + i" />
              </div>
              <div class="product-info">
                <h3>Producto {{ i }}</h3>
                <p>Aquí va una breve descripción del producto.</p>
                <div class="product-footer">
                  <span class="price">$100.00</span>
                  <router-link to="/detallesproducto">
                    <button class="view-details">Ver Detalles</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Latest Listings Section -->
      <section class="latest-listings">
        <div class="container">
          <h2 class="section-title">Últimas Publicaciones</h2>
          <div class="product-grid">
            <div v-for="i in 8" :key="i" class="product-card" :class="{ 'hover-effect': true }">
              <div class="product-image">
                <img :src="`https://picsum.photos/300/200?random=${i + 8}`" :alt="'Nueva Publicación ' + i" />
              </div>
              <div class="product-info">
                <h3>Nueva Publicación {{ i }}</h3>
                <p>Mira este producto!</p>
                <div class="product-footer">
                  <span class="price">$50.00</span>
                  <router-link to="/detallesproducto">
                    <button class="view-details outline">Ver Detalles</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer>
      <p>© 2024 Mercado Estudiantil. Todos los derechos reservados</p>
      <nav>
        <a href="#">Términos de Servicio</a>
        <a href="#">Privacidad</a>
      </nav>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { BookIcon, PencilIcon, LaptopIcon, CalculatorIcon } from 'lucide-vue-next';

const categories = ref([
  { icon: BookIcon, title: 'Libros', description: 'Encuentra y vende libros para todos los cursos' },
  { icon: PencilIcon, title: 'Apuntes', description: 'Comparte y ten acceso a apuntes de alta calidad' },
  { icon: LaptopIcon, title: 'Electrónica', description: 'Compra y vende calculadoras, laptops, etc.' },
  { icon: CalculatorIcon, title: 'Útiles', description: 'Abastécete de útiles escolares esenciales' }
]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .category-card').forEach(card => {
    observer.observe(card);
  });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --background-color: #f0f4f8;
  --text-color: #333;
  --card-background: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1, h2, h3 {
  font-weight: 600;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 36px;
  color: var(--primary-color);
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background-color: var(--secondary-color);
  margin: 10px auto;
}

/* Hero Section */
.hero {
  background-color: var(--primary-color);
  padding: 80px 0;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(52, 152, 219, 0.8), rgba(46, 204, 113, 0.8));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  padding: 80px 20px;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 20px;
  margin: 20px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.publish-button {
  padding: 12px 25px;
  font-size: 16px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.publish-button:hover {
  background-color: #27ae60;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

/* Categories Section */
.categories {
  padding: 60px 0;
  margin-bottom: 50px;
}

.category-grid {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
}

.category-card {
  background-color: var(--card-background);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  flex-basis: calc(25% - 30px);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.category-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.category-card h3 {
  margin: 20px 0;
  font-size: 24px;
  color: var(--primary-color);
}

.category-card svg {
  width: 50px;
  height: 50px;
  color: var(--secondary-color);
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.product-card {
  background-color: var(--card-background);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.product-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.product-image {
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.1);
}

.product-info {
  padding: 20px;
}

.product-info h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--primary-color);
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: var(--secondary-color);
}

.view-details {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-details:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.view-details.outline {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.view-details.outline:hover {
  background-color: var(--primary-color);
  color: white;
}

/* Footer */
footer {
  background-color: #2C3E50;
  color: white;
  padding: 40px 0;
  text-align: center;
}

footer nav {
  margin-top: 20px;
}

footer nav a {
  color: #ecf0f1;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s ease;
}

footer nav a:hover {
  color: var(--secondary-color);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes slideIn {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animated-text {
  animation: slideIn 0.8s ease-out;
}

/* Responsive Design */
@media (max-width: 768px) {
  .category-grid, .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .category-grid, .product-grid {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 28px;
  }

  .hero p {
    font-size: 16px;
  }
}
</style>