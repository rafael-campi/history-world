<template>
    <div>
      <h1>Phrases</h1>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <ul v-if="phrases && phrases.length">
        <li v-for="phrase in phrases" :key="phrase.id">{{ phrase.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Phrases',
    data() {
      return {
        phrases: [],
        loading: true,
        error: null
      };
    },
    created() {
      axios.get('http://localhost:3000/phrase')
        .then(response => {
          this.phrases = response.data;

        })
        .catch(error => {
          this.error = 'Error fetching users';
          console.error('Error fetching users:', error);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  };
  </script>
  
  <style scoped>
  /* Adicione estilos se necessário */
  </style>
  