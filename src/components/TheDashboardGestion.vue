<template>
  <div class="container">
    <div class="titre"><h3>Gestion des etudiant</h3></div>
    <form @submit.prevent="addStudent">
      <label for="nom">Nom(s)</label>
      <input v-model="newStudent.nom" type="text" placeholder="Nom..." id="nom" />
      <label for="prenom">Prenom(s)</label>
      <input v-model="newStudent.prenom" type="text" placeholder="Prenom..." id="prenom" />
      <label for="birthdays">Date de naissance</label>
      <input v-model="newStudent.date" type="date" id="birthdays" />
      <label for="selectNiveauScolaire">Niveau scolaire</label>
      <select v-model="newStudent.niveauScolaire" id="selectNiveauScolaire">
        <option value=""></option>
        <option value="Terminal A">Terminal A</option>
        <option value="Terminal B">Terminal B</option>
        <option value="Terminal C">Terminal C</option>
        <option value="Première A">Première A</option>
        <option value="Première B">Première B</option>
        <option value="Première C">Première C</option>
        <option value="Seconde A">Seconde A</option>
        <option value="Seconde B">Seconde B</option>
      </select>
      <button id="buttonCreate" type="submit">Creer</button>
      <button id="buttonList">Retourner à la liste</button>
    </form>
  </div>
</template>

<script setup>
const newStudent = {
  nom: '',
  prenom: '',
  date: '',
  niveauScolaire: ''
}

// const addStudent = () => {
//   console.log(newStudent)
// }

const studentDb = 'studentDb'

//Functions pour retourner la base de donnée du navigateur (storage)
function getLocalDb() {
  if (!localStorage.getItem(studentDb)) {
    localStorage.setItem(studentDb, JSON.stringify([]))
  }
  return JSON.parse(localStorage.getItem(studentDb))
}

//Fonctions pour mettre la bdd à jour

function updateDb(db) {
  localStorage.setItem(studentDb, JSON.stringify(db))
}

//Fonctions pour ajouter un etudiants
function addStudent(student) {
  //On recupere la base de donnée en appelant la fonction
  const db = getLocalDb()
  //On recupere l'etudiant et on le mais un id
  newStudent.id = Date.now() + ''
  db.push(newStudent)
  updateDb(db)
  alert('etudiant ajouter avec succes')
}

//Fonctions pour mettre a jour l'etudiant

function updateStudent(student) {
  const db = getLocalDb()
  const StudentDbUpdate = db.map(function (curStudent) {
    if (curStudent.id == student.id) {
      return {
        nom: student.nom,
        prenom: student.prenom,
        date: student.date,
        niveauScolaire: student.niveauScolaire,
        id: student.id
      }
    }
    return curStudent
  })
  updateDb(StudentDbUpdate)
}

//Fonctions pour supprimer un etudiatnt

function deleteStudent(student) {
  const db = getLocalDb()
  const deleteStudentDb = db.filter(function (curStudent) {
    return curStudent.id != student.id
  })
  updateDb(deleteStudentDb)
}
//Fonctions pour recuperer l'etudiant par rapport a son id

function getStudent(id) {
  const db = getLocalDb()
  let filterDbId = db.filter((data) => data.id == id)
  if (filterDbId.lenght > 0) {
    return filterDbId[0]
  }
  return null
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
  return filterDbName
}
</script>

<style scoped>
.container {
  width: 50%;
  margin: auto;
}
.titre {
  background: rgb(254, 253, 253);
}
form {
  display: grid;
  grid-template-areas:
    'name name number'
    'prenom prenom selectNiveau '
    'date date btnC'
    'btnL';
  margin: 30px auto 0px;
  gap: 8px;
}

/*
#selectNiveauScolaire {
  grid-area: selectNiveau;
}
#prenom {
  grid-area: prenom;
}
#birthdays {
  grid-area: date;
}
#buttonCreate {
  grid-area: btnC;
}
#buttonList {
  grid-area: btnL;
} */
input,
select,
button {
  border-radius: 10px;
  padding: 15px;
  border: none;
}
#buttonCreate {
  background-color: aqua;
}
#buttonList {
  background-color: orangered;
}
/* table {
}  */
</style>
