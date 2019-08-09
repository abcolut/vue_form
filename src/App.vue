<template>
  <div id="app">
    <userForm />
    <about />
  </div>
</template>

<script>
import userForm from './components/UserForm.vue'
import about from './components/About.vue'

export default {
  name: 'app',
  components: { userForm, about  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  #text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
