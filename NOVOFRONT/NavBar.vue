<template>
    <header>
        <div class="logo">
          <shopping-bag-icon />
          <span>Novo</span>
        </div>
        <nav>
          <a href="#">Books</a>
          <a href="#">Notes</a>
          <a href="#">Electronics</a>
          <a href="#">Supplies</a>
        </nav>
        <div class="user-menu" @click="toggleDropdown" ref="userMenu">
          <user-icon size="20" />
          <span>Hola, user</span>
          <chevron-down-icon size="16" />
          <div v-if="isDropdownOpen" class="dropdown">
            <a href="#" class="dropdown-item">
              <user-circle-icon size="16" />
              <span>Mi cuenta</span>
            </a>
            <a href="#" class="dropdown-item">
              <log-out-icon size="16" />
              <span>Cerrar sesión</span>
            </a>
          </div>
        </div>
      </header>
</template>
<script setup>

import { ref, onMounted, onUnmounted } from 'vue'
import { ShoppingBagIcon, UserIcon, ChevronDownIcon, UserCircleIcon, LogOutIcon } from 'lucide-vue-next'

const isDropdownOpen = ref(false)
  const userMenu = ref(null)
  
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
  }
  
  const closeDropdown = (event) => {
    if (userMenu.value && !userMenu.value.contains(event.target)) {
      isDropdownOpen.value = false
    }
  }
  
  onMounted(() => {
    document.addEventListener('click', closeDropdown)
  })
  
  onUnmounted(() => {
    document.removeEventListener('click', closeDropdown)
  })
</script>
<style scoped>
  header {
    font-family: Arial, sans-serif;
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
  
</style>