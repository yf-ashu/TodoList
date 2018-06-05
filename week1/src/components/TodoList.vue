<template>
  <div class="container">
    <div class="task__input">
      <input type="text">
    </div>

    <div class="task__list">
      <div class="main__display">
        <div class="list--title">
          <div class="main">  
            <input type="checkbox" name="" id="">
            <span>{{title2}}</span>
          </div>
       <div class="icon">
            <i class="fas fa-star"></i>
            <i class="fas fa-pencil-alt"></i>
       </div>
    
        </div>
        <div class="list--subtitle">
          <i class="far fa-calendar-alt"></i>
          <i>5/14</i>
          <i class="far fa-file"></i>
          <i class="far fa-comment"></i>
        </div>
      </div>
      <div class="sub__display">

      </div>
    </div>




 <!-- <h1>test,{{title}}</h1> -->
  </div>
</template>








<script>
export default {
  data () {
    return {
title2:'test123'
    }
  },
  props:['title']

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  flex-flow: column wrap;
}
</style>
