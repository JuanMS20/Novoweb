<template>
  <div class="landing-page">
    <nav class="navigation">
      <div class="nav-buttons">
        <!-- Uso de <router-link> para las rutas -->
        <router-link to="/registro">
          <button class="nav-button">REGISTRO</button>
        </router-link>
        <router-link to="/productos">
          <button class="nav-button">CATEGORIAS</button>
        </router-link>
        <router-link to="/CrearProducto">
          <button class="nav-button">PUBLICAR</button>
        </router-link>
        <router-link to="/Perfil">
          <button class="nav-button">MI CUENTA</button>
        </router-link>
      </div>
      <div class="nav-arrows">
        <span class="arrow up">▲</span>
        <span class="arrow down">▼</span>
      </div>
    </nav>

    <main class="main-content">
      <div class="content-wrapper">
        <h1>TU MERCADO<br>ESTUDIANTIL DIGITAL</h1>
        <p class="subtitle">
          CONECTAMOS PERSONAS PARA<br>
          HACER EL INTERCAMBIO DE<br>
          MATERIALES ACADÉMICOS MÁS<br>
          FÁCIL Y ACCESIBLE
        </p>

        <!-- Añadido el router-link al botón -->
        <router-link to="/principal">
          <button class="click-button">
            <span class="arrow-icon">▶</span>
            CLICK
          </button>
        </router-link>
      </div>
    </main>
  </div>
</template>

<style scoped>
.landing-page {
  min-height: 100vh;
  background-image: url('@/assets/man-having-video-call-laptop.jpg');
  background-size: cover;
  background-position: center;
  font-family: Arial, sans-serif;
  position: relative;
  overflow: hidden;
}

.navigation {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.nav-buttons {
  display: flex;
  gap: 10px;
}

.nav-button {
  background-color: #3A0B75;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
}

.nav-arrows {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #0066FF;
  font-size: 12px;
}

.arrow {
  cursor: pointer;
}

.main-content {
  padding: 40px;
  max-width: 600px;
}

.content-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 600px;
  height: 50vh; /* Altura del cuadro al 50% de la pantalla */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.content-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7); /* Ajuste de transparencia */
  border-radius: 15px; /* Bordes redondeados */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */
  z-index: -1; /* Asegura que el cuadro esté detrás del contenido */
}

h1 {
  color: #3A0B75;
  font-size: 48px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.subtitle {
  color: #3A0B75;
  font-size: 24px;
  line-height: 1.4;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.click-button {
  background: none;
  border: none;
  color: #3A0B75;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
}

.arrow-icon {
  font-size: 12px;
}

@media (max-width: 768px) {
  .nav-buttons {
    flex-wrap: wrap;
  }

  h1 {
    font-size: 36px;
  }

  .subtitle {
    font-size: 20px;
  }
}
</style>
