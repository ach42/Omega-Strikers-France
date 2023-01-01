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
    color: #f5f5f5;
    letter-spacing: 3px;
  }
  & a {
    text-decoration: none;
    color: #f5f5f5;
  }
}

#layout {
  display: flex;
  width: 100%;
  height: 96.5%;
  & header {
    z-index: 2;
  }
  & main {
    display: flex;
    justify-content: center;
    width: 85%;
    height: 100%;
    padding-left: 58px;
  }
  & aside {
    width: 12%;
    height: 100vh;
    z-index: 2;
  }
}

.credit {
  display: flex;
  width: 100%;
  margin-top: 10px;
  font-style: italic;
  font-weight: 400;
  justify-content: flex-end;
  & span {
    font-size: 10px;
    color: #ffffff91;
  }
  &__link {
    color: #ffffff91!important;
    &:hover {
      color: #f5f5f5 !important;
    }
  }
}
@media screen and (min-width: 1920px) {
  #layout main {
    width: 95%;
    padding-left: 58px;
  }
}

@media screen and (max-width: 1240px) {
  aside {
    display: none;
  }
  #layout main {
    width: 96%;
  }
}
@media screen and (max-width: 800px) {
  #layout {
    height: 100%;
  }
  #layout main {
    width: 100%;
    padding-left: 0px;
  }
}

</style>
