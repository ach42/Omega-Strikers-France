<template>
  <div id="app">
    <div id="layout">
      <Headervue />
      <main>
        <router-view/>
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
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
#app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: url('./assets/background.webp');
  background-size: cover;
  background-repeat: no-repeat;
}

#layout {
  display: flex;
  width: 100%;
  height: 95%;
  & header {

  }
}
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5%;
}
</style>
