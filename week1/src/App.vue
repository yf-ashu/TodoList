<template>
  <div id="app">
    <header class="header">
      <div class="container">
          <router-link to="/" class="nav-link">
          <span>My Tasks</span>   </router-link>
          <router-link to="/" class="nav-link">In Progress</router-link>
          <router-link to="/" class="nav-link">Completed</router-link>
      </div>
    </header>
    <!-- <router-view/> -->
  <TodoList :title="test"/>
      <!-- <component :is="currentView"></component> -->
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'App'
  ,
  components:{
        TodoList
    },
  data(){
       return {
      currentView:TodoList

    }
  },
  computed:{
     ...mapState([
      'test',
      // ...
    ])
  }
 
}
</script>

<style lang="scss">
@import "./assets/normalize.css";
@import "./assets/main.scss";

</style>
