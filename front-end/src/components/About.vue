<template>
    <div>
      <h1>About</h1>
      <div v-if="data">
        <pre>{{ data }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'About',
    data() {
      return {
        data: null,
      };
    },
    created() {
      axios.get('https://api.exemplo.com/about-endpoint')
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.error('Erro ao acessar API:', error);
        });
    },
  };
  </script>
  