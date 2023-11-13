<template>
  <h1></h1>
  <div class="container">
    <div class="titre"><h3>Gestion des etudiant</h3></div>
    <form>
      <label for="nom">Nom(s)</label>
      <input type="text" placeholder="Nom..." id="nom" />
      <label for="prenom">Prenom(s)</label>
      <input type="text" placeholder="Prenom..." id="prenom" />
      <label for="birthdays">Date de naissance</label>
      <input type="date" id="birthdays" />
      <label for="selectNiveauScolaire">Niveau scolaire</label>
      <select id="selectNiveauScolaire">
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
      <div>
        <h1>{{ id }}</h1>
      </div>
      <button id="buttonCreate" @click="handleSubmit">Creer</button>

      <button id="buttonList">Retourner à la liste</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TheEdit',
  props: ['id'],
  data() {
    return {
      test: '',
      studentDb: 'studentDb',
      student: ref([])
    }
  },
  mounted() {
    this.students = this.getLocalDb()
    console.log(this.students)
  },
  methods: {
    handleSubmit() {
      if (this.test) {
        alert('bb')
      } else {
        alert('sa na  pas marcher')
      }
    },
    getLocalDb() {
      if (!localStorage.getItem(this.studentDb)) {
        localStorage.setItem(this.studentDb, JSON.stringify([]))
      }
      return JSON.parse(localStorage.getItem(this.studentDb))
    }
  }
}

// import { ref, onMounted, toRefs } from 'vue'
// import { useRoute } from 'vue-router'
// const studentDb = 'studentDb'
// const DbStudents = ref(getLocalDb())
// const routeRef = toRefs(useRoute())
// console.log('routeRef:', routeRef)
// const route = routeRef.value

// const newValue = {
//   nom: DbStudents.value[0].nom,
//   prenom: '',
//   date: '',
//   niveauScolaire: ''
// }

// function getLocalDb() {
//   if (!localStorage.getItem(studentDb)) {
//     localStorage.setItem(studentDb, JSON.stringify([]))
//   }
//   return JSON.parse(localStorage.getItem(studentDb))
// }

// onMounted(() => {
//   const db = getLocalDb()
//   const userId = route.value.params.id
//   console.log('userId:', userId)

//   console.log(DbStudents.value[0].nom)
// })

// function getStudent(id) {
//   const db = getLocalDb()
//   let filterDbId = db.filter((data) => data.id == id)
//   if (filterDbId.length > 0) {
//     return filterDbId[0]
//   }
//   return null
// }
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
