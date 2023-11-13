<template>
  <div id="Header">
    <div class="logo">
      <img src="../assets/logo.svg" alt="Logo" />
    </div>
    <ul class="Links">
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const links = ref([
  { name: 'Home', path: '/' },
  { name: 'Gestion des étudiants', path: '/Gestion' },
  { name: 'About', path: '/About' }
])
</script>

<style scoped>
#Header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
#Header .Links {
  display: flex;
  align-items: center;
  list-style: none;
}

#Header .Links li {
  margin-right: 50px; /* Ajoutez un espacement entre les éléments li */
}

#Header .Links li:not(:last-child) {
  margin-right: 90px; /* Appliquez l'espacement à tous les éléments sauf le dernier */
}
</style>
