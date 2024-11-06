<template>
    <div class="container">
      <header class="header">
    <div class="header-content">
      <div class="logo">
        <!-- SVG del logo -->
        <svg width="51" height="30,875" viewBox="0 0 408 247" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M196.302 115.792C190.78 125.357 194.057 137.589 203.623 143.112C211.288 147.537 220.664 146.313 226.929 140.73L204.417 101.738L196.302 115.792ZM209.47 92.9847L232.564 132.985L286.641 39.3205C292.164 29.7546 288.886 17.5228 279.321 12C269.755 6.47713 257.523 9.75461 252 19.3205L209.47 92.9847Z" fill="#CDDBE8"/>
          <rect y="226.167" width="260" height="40" rx="20" transform="rotate(-60 0 226.167)" fill="#012581"/>
          <rect x="145.641" width="260" height="40" rx="20" transform="rotate(60 145.641 0)" fill="#012581"/>
          <rect x="277.641" y="1" width="260" height="40" rx="20" transform="rotate(60 277.641 1)" fill="#CDDBE8"/>
        </svg>
      </div>
      <h2 class="novo-logo-text">NOVO</h2>
    </div>
  </header>
  
    <h2 class="register-title">Iniciar sesion en NOVO</h2>  
      <main class="form-container">
        <form @submit.prevent="handleSubmit" class="form">
          <div class="input-group">
            <div class="input-wrapper">
            <input
              type="email"
              placeholder="Email institucional"
              class="input"
            />
            <Mail class="input-icon" />
          </div>
  
            <div class="input-wrapper password">
              <input
                type="password"
                placeholder="Contraseña"
                class="input"
              />
              <Lock class="input-icon" />
            </div>
          </div>
  
          <div class="forgot-password">
            <a href="/principal" class="forgot-password-link">
              Olvidaste tu contraseña?
            </a>
          </div>
  
          <button type="submit" class="submit-button">
            Siguiente
          </button>
        </form>
        <div class="account-check">
          <p>¿No estas registrado? <a href="/registro" class="login-link">Registrate</a></p>
        </div>
      </main>
  
      <!-- Background Image -->
      <div 
    class="background-image"
    :style="{
      backgroundImage: 'url(\'src/assets/observation-urban-building-business-steel.jpg\')',
      backgroundPosition: 'center bottom',
      backgroundSize: 'cover'
    }"
  />
  
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Mail, Lock } from 'lucide-vue-next'
  
  const formData = ref({
    fullName: '',
    email: '',
    date: '',
    password: ''
  });
  
  const handleSubmit = () => {
    console.log(formData.value); // Asegúrate de que no sea null y contenga los valores esperados
    // Aquí va la lógica para manejar el submit
  };
  </script>
  
  <style>
  body {
    font-family: 'Open Sans', sans-serif; /* Aplicar Open Sans como fuente principal */
  }
  
  .input-wrapper.password .input-icon {
    left: 0.5rem; /* Ajusta según lo necesites */
  }
  
  .container {
    min-height: 100vh;
    background: #f0f9ff;
    position: relative;
    padding: 1rem;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }
  .header-content {
    display: flex;
    align-items: center;
    gap: 25px; /* Espacio entre el logo y el texto "NOVO" */
  }
  
  .logo {
    width: 2rem;
    height: 2rem;
    color: #1e3a8a;
  }
  .novo-logo-text {
    font-size: 1.5rem;
    color: #1e3a8a;
    font-family: 'Josefin Sans', sans-serif;
  }
  .register-title {
    text-align: center;
    font-size: 2rem;
    color: #1e3a8a;
    margin-bottom: 1px;
    font-family: 'Josefin Sans', sans-serif;
  }
  .form-container {
    max-width: 28rem;
    margin: auto;
    padding: 3rem 0;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .input-wrapper {
    position: relative;
  }
  
  .input {
    padding-left: 2.5rem;
    height: 3rem;
    border-radius: 9999px;
    background: white;
    width: 100%;
    border: 1px solid #d1d5db;
    outline: none;
    transition: border-color 0.2s;
    font-family: 'Open Sans', sans-serif; /* Aplicar Open Sans en los inputs */
  }
  
  .input:focus {
    border-color: #3b82f6;
    ring: 2px solid #3b82f6;
  }
  
  .input-icon {
    position: absolute;
    left: 0.75rem;
    top: 0.875rem;
    height: 1.25rem;
    width: 1.25rem;
    color: #9ca3af;
  }
  
  .forgot-password {
    text-align: right;
    margin-right: -40px; /* Ajustar margen si es necesario */
  }
  
  .forgot-password-link {
    font-size: 0.875rem;
    color: #4b5563;
    transition: color 0.2s;
  }
  
  .forgot-password-link:hover {
    color: #111827;
  }
  
  .submit-button {
    width: 490px;
    height: 45px;
    border-radius: 9999px;
    background: #1e3a8a;
    color: white;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
  }
  
  .submit-button:hover {
    background: #1e40af;
  }
  
  .background-image {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 16rem;
    background-size: cover;
    background-position: center bottom;
    z-index: -1;
  }
  
  .novo-title {
    text-align: center;
    font-size: 2rem;
    color: #1e3a8a;
    margin-bottom: 1px;
    font-family: 'Josefin Sans', sans-serif;
  }
  
  .account-check {
    text-align: center;
    margin-top: 1rem;
    font-size: 15px;
  }
  
  .login-link {
    color: #1e3a8a;
    text-decoration: underline;
  }
  </style>
  