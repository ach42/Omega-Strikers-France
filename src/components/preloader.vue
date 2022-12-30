<template>
    <div v-if="display" class="preloader">
      <div class="spinner"></div>
    </div>
  </template>

<script>
    export default {
        name: 'preloader',
        data(){
            return {
                display: true
            }
        },
        mounted() {
            this.displayContent()
        },
        methods : {
            displayContent() {
                setTimeout(() => {
                    this.display = false
                }, 1000)
            }
        }
    }
</script>
  
  <style>
    .preloader {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 5;
      position: absolute;
      background-color: #101D42;
    }
  
    .spinner {
      width: 50px;
      height: 50px;
      border: 8px solid #f3f3f3;
      border-radius: 50%;
      border-top: 8px solid #3498db;
      animation: spin 1s linear infinite;
    }
  
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>