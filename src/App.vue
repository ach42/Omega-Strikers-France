<template>
  <div id="app">
    <div id="layout">
      <Headervue />
      <main>
        <router-view :key="$route.fullPath"/>
      </main>
      <Asidevue/>
    </div>
    <Footervue/>
  </div>
</template>


<script>
import Headervue from '@/components/header.vue'
import Asidevue from '@/components/aside.vue'
import Footervue from '@/components/footer.vue'

export default {
  name: 'App',
  components: {
    Headervue,
    Asidevue,
    Footervue
  }
}



</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
body {
  overflow: hidden;
}
@font-face {
    font-family: 'made_outer';
    src:url('./assets/made_outer.woff') format('woff'),
        url('./assets/made_outer.svg') format('svg'),
        url('./assets/made_outer.eot'),
        url('./assets/made_outer.eot?#iefix') format('embedded-opentype'); 
    font-weight: normal;
    font-style: normal;
}
.emoji {
  font-family: 'Noto Color Emoji', sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: url('./assets/background.webp');
  background-size: cover;
  background-repeat: no-repeat;
  & ::-webkit-scrollbar {
    width: 0px;
  }

  & ::-webkit-scrollbar-track {
    background-color: #101d4200;
  }

  & ::-webkit-scrollbar-thumb {
    background-color: #172A5F;
  }
  & h1 { 
    font-family: 'made_outer';
    color: #fff;
    letter-spacing: 3px;
  }
  & a {
    text-decoration: none;
    color: #fff;
  }
}

#layout {
  display: flex;
  width: 100%;
  height: 97vh;
  & main {
    display: flex;
    justify-content: center;
    width: 85%;
    height: 100%;
  }
  & aside {
    width: 12%;
    height: 100vh;
  }
}
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3vh;
}

@media screen and (max-width: 1080px) {
  aside {
    display: none;
  }
  #layout main {
    width: 95%;
  }
}
@media screen and (max-width: 425px) {
  #layout {
    flex-direction: column;
  }
  #layout main {
    width: 100%;
  }
} 

</style>
