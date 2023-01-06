<template>
  <div v-if="display" class="preloader">
    <div id="animation">
      <div class="core">
        <div class="flamme"></div>
        <img src="../assets/core.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preloader',
  data() {
    return {
      display: true
    }
  },
  mounted() {
    this.displayContent()
  },
  methods: {
    displayContent() {
      setTimeout(() => {
        this.display = false
      }, 1500)
    }
  }
}
</script>

<style lang="scss">
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, rgba(15,28,62,1) 0%, rgba(23,42,95,1) 0%, rgba(23,42,95,1) 15%, rgba(15,28,62,1) 100%);
  z-index: 5;
  opacity: 1;
  width: fit-content;
  position: absolute;
  /* Add a transition to the element */
  transition: opacity 1s ease-in-out;
}

/* When the display property is set to false, fade out the element */
.preloader[data-display='false'] {
  opacity: 0;
}

#animation {
  display: flex;
  align-items: center;
  width: 100px;
  background-color: #0E1939;
  border-radius: 20px;
}
.core {
  display: flex;
  align-items: center;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  position: relative;
  box-shadow: 0px 0px 10px 0px #ffff1c;
  animation: move-core 0.8s infinite;
  & img {
    width: 30px;
    border-radius: 50px;
  }
}

@keyframes move-core {
  0% {
    left: 0;
  }

  50% {
    left: calc(100% - 30px);
  }

  100% {
    left: 0;
  }
}
</style>