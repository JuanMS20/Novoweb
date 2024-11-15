<template>
    <div class="app">

  
      <main>
        <section class="create-product">
          <div class="container">
            <h1>Crear Nuevo Producto</h1>
            <form @submit.prevent="submitProduct" class="product-form">
              <div class="form-group">
                <label for="productName">Nombre del Producto</label>
                <input type="text" id="productName" v-model="product.name" required>
              </div>
              <div class="form-group">
                <label for="productDescription">Descripción</label>
                <textarea id="productDescription" v-model="product.description" required></textarea>
              </div>
              <div class="form-group">
                <label for="productCategory">Categoría</label>
                <select id="productCategory" v-model="product.category" required>
                  <option value="">Selecciona una categoría</option>
                  <option value="books">Libros</option>
                  <option value="notes">Apuntes</option>
                  <option value="electronics">Electrónicos</option>
                  <option value="supplies">Suministros</option>
                </select>
              </div>
              <div class="form-group">
                <label for="productPrice">Precio</label>
                <input type="number" id="productPrice" v-model="product.price" min="0" step="0.01" required>
              </div>
              <div class="form-group">
                <label for="productCondition">Condición</label>
                <select id="productCondition" v-model="product.condition" required>
                  <option value="">Selecciona la condición</option>
                  <option value="new">Nuevo</option>
                  <option value="like-new">Como nuevo</option>
                  <option value="good">Buen estado</option>
                  <option value="fair">Estado aceptable</option>
                  <option value="poor">Mal estado</option>
                </select>
              </div>
              <div class="form-group">
                <label for="productImage">Imagen del Producto</label>
                <input type="file" id="productImage" @change="handleImageUpload" accept="image/*">
              </div>
              <button type="submit" class="submit-button">Publicar Producto</button>
            </form>
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
  import { ref, reactive, onMounted, onUnmounted } from 'vue'

  const isDropdownOpen = ref(false)
  const userMenu = ref(null)
  
  const product = reactive({
    name: '',
    description: '',
    category: '',
    price: null,
    condition: '',
    image: null
  })
  

  
  const closeDropdown = (event) => {
    if (userMenu.value && !userMenu.value.contains(event.target)) {
      isDropdownOpen.value = false
    }
  }
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      product.image = file
    }
  }
  
  const submitProduct = () => {
    //aqui enviamos el producto a back, hay q implementar
    console.log('Submitting product:', product)
    // resetea el formulario despues de enviar
    Object.keys(product).forEach(key => product[key] = '')
    alert('Producto publicado exitosamente!')
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
  
  .create-product {
    background-color: #E3F2FD;
    padding: 4rem 0;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .product-form {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="number"],
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  textarea {
    height: 100px;
    resize: vertical;
  }
  
  .submit-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: block;
    width: 100%;
    margin-top: 1rem;
  }
  
  .submit-button:hover {
    background-color: #45a049;
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
  
    .create-product {
      padding: 2rem 0;
    }
  
    h1 {
      font-size: 2rem;
    }
  
    .product-form {
      padding: 1.5rem;
    }
  }
  </style>