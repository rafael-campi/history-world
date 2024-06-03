<template>
    <div>
      <h1>Home</h1>
      <div v-if="data">
        <pre>{{ data }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Home',
    data() {
      return {
        data: null,
      };
    },
    created() {
      axios.get('https://api.exemplo.com/home-endpoint')
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.error('Erro ao acessar API:', error);
        });
    },
  };
  </script>
  