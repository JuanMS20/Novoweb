<template>
  <header>
      <div class="logo">
        <router-link to="/app/principal">
          <img src="@/assets/Group 6.png" alt="">
        </router-link>
      </div>
      <nav>
        <a href="#">Libros</a>
        <a href="#">Notas</a>
        <a href="#">Electronicos</a>
        <a href="#">Suministros</a>
      </nav>
      <div class="user-menu" @click="toggleDropdown" ref="userMenu">
        <user-icon size="20" />
        <span>Hola, user</span>
        <chevron-down-icon size="16" />
        <div v-if="isDropdownOpen" class="dropdown">

          <router-link to="/app/perfil" class="dropdown-item">
            <user-circle-icon size="16" />
            <span>Mi cuenta</span>
          </router-link>
         
          <router-link to="/" class="dropdown-item">
            <log-out-icon size="16" />
            <span>Cerrar sesión</span>
          </router-link>
        </div>
      </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { UserIcon, ChevronDownIcon, UserCircleIcon, LogOutIcon } from 'lucide-vue-next'

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

.logo img {
  width: 100px; /* Cambia el tamaño según lo que necesites */
  height: auto; /* Mantén la proporción */
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
