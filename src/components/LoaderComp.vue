<template>
    <div class="loader" v-if="loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  
  <style scoped>
  .loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.503);
    z-index: 1000;
  }
  </style>
  