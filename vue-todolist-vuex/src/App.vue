<template>
  <div id="app">
    <div class="block" :class="{'hidden':!edit}"></div>
    <header class="header">
      <div class="container">
        <button to="/" class="nav--link" @click="all('all')" :class="{'selected':GET_DIS=='all'}">
            <span>My Tasks</span>   </button>
        <button to="/" class="nav--link" @click="all('progress')" :class="{'selected':GET_DIS=='progress'}">In Progress</button>
        <button to="/" class="nav--link" @click="all('complete')" :class="{'selected':GET_DIS=='complete'}">Completed</button>
      </div>
    </header>
    <!-- {{edit}} -->
    <!-- <router-view/> -->
    <TodoList />
    <!-- <component :is="currentView"></component> -->
  </div>
</template>

<script>
  import TodoList from './components/TodoList.vue';
  import { mapState,mapGetters } from 'vuex';
 
  export default {
    components: {
      TodoList
    },
    data() {
      return {}
    },
    methods: {
      all(value) {
        this.$store.commit('DISPLAY', value);
      }
    },
    computed: {
      ...mapGetters([
        'GET_DIS', 'edit'
      ])
    }
  
  }
</script>

<style lang="scss">
  @import "./assets/normalize.css";
  @import "./assets/main.scss";
</style>
