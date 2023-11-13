<template>
  <div id="containerTable">
    <div class="search-container">
      <form @submit.prevent="searchStudentByName(searchName)">
        <input type="text" placeholder="..." v-model="searchName" />
        <TheButton>SEARCH</TheButton>
        <!-- <button class="TheButton" type="submit">Search</button> -->
      </form>
    </div>
    <table border="1" v-for="student in DbStudents" :key="student.id">
      <thead>
        <tr>
          <th>Noms</th>
          <th>Prenoms</th>
          <th>Date de naissance</th>
          <th>Niveau Scolaire</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ student.nom }}</td>
          <td>{{ student.prenom }}</td>
          <td>{{ student.date }}</td>
          <td>{{ student.niveauScolaire }}</td>
        </tr>
      </tbody>
      <router-link :to="{ path: '/Edit/' + student.id }">
        <button @click="req">Mettre a jour</button>
      </router-link>
    </table>
  </div>
</template>

<script setup>
import TheButton from './TheButton.vue'
import { ref } from 'vue'
const searchName = ref('')
const studentDb = 'studentDb'
const DbStudents = ref(getLocalDb())

function getLocalDb() {
  if (!localStorage.getItem(studentDb)) {
    localStorage.setItem(studentDb, JSON.stringify([]))
  }
  return JSON.parse(localStorage.getItem(studentDb))
}

//Fonctions pour rechercher des etudiants

function searchStudentByName(name) {
  const db = getLocalDb()
  const filterDbName = db.filter((data) => {
    return (
      data.nom.toLowerCase().includes(name.toLowerCase()) ||
      data.prenom.toLowerCase().includes(name.toLowerCase())
    )
  })
  DbStudents.value = filterDbName
}

//
const req = () => {
  const db = getLocalDb()
  console.log(DbStudents.value)
  if (idUrl == data.id) {
    const newValue = {
      nom: '',
      prenom: '',
      date: '',
      niveauScolaire: ''
    }
  }
}
</script>

<style scoped>
#containerTable table {
  margin: 40px auto;
}
#containerTable button .btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
