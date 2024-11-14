<template>
  <div class="app">
    <main>
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>Mercado Estudiantil</h1>
            <p>Compra y vende materiales estudiantiles de manera más fácil, encuentra los mejores descuentos para libros, apuntes, entre otros materiales.</p>
            <router-link to="/crearproducto">
              <button class="publish-button">Publica tu producto</button>
            </router-link>
          </div>
        </div>
      </section>

      <!-- Categories Section -->
      <section class="categories">
        <div class="container">
          <h2>Categorías</h2>
          <div class="category-grid">
            <div class="category-card">
              <book-icon />
              <h3>Libros</h3>
              <p>Encuentra y vende libros para todos los cursos</p>
            </div>
            <div class="category-card">
              <pencil-icon />
              <h3>Apuntes</h3>
              <p>Comparte y ten acceso a apuntes de alta calidad</p>
            </div>
            <div class="category-card">
              <laptop-icon />
              <h3>Electrónica</h3>
              <p>Compra y vende calculadoras, laptops, etc.</p>
            </div>
            <div class="category-card">
              <calculator-icon />
              <h3>Útiles</h3>
              <p>Abastécete de útiles escolares esenciales</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Products Section -->
      <section class="featured-products">
        <div class="container">
          <h2>Productos Destacados</h2>
          <div class="product-grid">
            <!-- Aquí comienza el bucle para los productos -->
            <div v-for="i in 8" :key="i" class="product-card">
              <!-- Asignando una foto diferente para cada producto -->
              <img :src="require(`@/assets/foto${i}.jpg`)" :alt="'Producto ' + i" />
              <div class="product-info">
                <h3>Producto {{ i }}</h3>
                <p>Aquí va una breve descripción del producto.</p>
                <div class="product-footer">
                  <span class="price">$100.00</span>
                  <router-link to="/detallesproducto">
                    <button>Ver Detalles</button>
                  </router-link>
                </div>
              </div>
            </div>
            <!-- Fin del bucle -->
          </div>
        </div>
      </section>

      <!-- Latest Listings Section -->
      <section class="latest-listings">
        <div class="container">
          <h2>Últimas Publicaciones</h2>
          <div class="product-grid">
            <!-- Aquí también se asignan fotos diferentes -->
            <div v-for="i in 8" :key="i" class="product-card">
              <img :src="require(`@/assets/foto${i}.jpg`)" :alt="'Nueva Publicación ' + i" />
              <div class="product-info">
                <h3>Nueva Publicación {{ i }}</h3>
                <p>Mira este producto!</p>
                <div class="product-footer">
                  <span class="price">$50.00</span>
                  <router-link to="/detallesproducto">
                    <button class="outline">Ver Detalles</button>
                  </router-link>
                </div>
              </div>
            </div>
            <!-- Fin del bucle -->
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
import { BookIcon, PencilIcon, LaptopIcon, CalculatorIcon } from 'lucide-vue-next'
</script>

<style scoped>
/* Estilos generales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  color: #333;
  line-height: 1.6;
}

/* Contenedor principal */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1, h2, h3 {
  font-weight: bold;
}

/* Hero Section */
.hero {
  background-color: #ecf0f1;
  padding: 80px 0;
  text-align: center;
  margin-bottom: 50px;
}

.hero-content {
  background-image: url('@/assets/biblio.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 80px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 20px;
  margin: 20px 0;
}

.publish-button {
  padding: 12px 25px;
  font-size: 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.publish-button:hover {
  background-color: #2980b9;
}

/* Categories Section */
.categories {
  background-color: #ecf0f1;
  padding: 60px 0;
  margin-bottom: 50px;
}

.categories h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 36px;
}

.category-grid {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
}

.category-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-basis: 22%;
  box-sizing: border-box;
}

.category-card h3 {
  margin: 20px 0;
  font-size: 24px;
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

.product-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.product-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
}

.product-info h3 {
  font-size: 18px;
  margin: 10px 0;
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
}

.product-footer button {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.product-footer button:hover {
  background-color: #27ae60;
}

.outline {
  background-color: transparent;
  border: 2px solid #2ecc71;
  color: #2ecc71;
}

.outline:hover {
  background-color: #2ecc71;
  color: white;
}

/* Footer */
footer {
  background-color: #2C3E50;
  color: white;
  padding: 20px 0;
  text-align: center;
  margin-top: 50px;
}

footer nav a {
  color: #ecf0f1;
  margin: 0 15px;
  text-decoration: none;
}

footer nav a:hover {
  text-decoration: underline;
}
</style>
