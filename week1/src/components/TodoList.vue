<template>

  <div class="container" >
    <div class="task__input" :class="{'hidden':!hidden}" @click="inputHidden()" >
    <div class="input">
      <span> + ADD SOMTHING</span>
     </div>
    </div>
<!-- <pre>{{GET_TODO}}</pre> -->
    <div class="task__list topBlock" :class="{'hidden':hidden}"  >
      <div class="main__display" >
            <span>  <input type="text" placeholder="Title" v-model="input.title" @keyup.enter="addTodo()"></span>
      </div>
      <div class="sub__display">
        <div class="list--detail">
          <div class="list--deadline">
            <div class="deadline--title title">
              <i class="far fa-calendar-alt"></i>
              <span>Deadline</span>
            </div>
            <div class="deadline--time subtitle">
              <input type="date" v-model="input.date">
              <input type="time"v-model="input.time">
            </div>
          </div>
          <div class="list--file">
            <div class="file--title title">
              <i class="far fa-file"></i>
              <span>File</span>
            </div>
            <div class="file--message subtitle">
              <label for="file">+</label>
              <input type="file" name="" id="file" > 
            </div>
          </div>
          <div class="list--comment">
            <div class="comment--title title">
              <i class="far fa-comment"></i>
              <span>Comment</span>
            </div>
            <div class="comment--message subtitle">
              <textarea name="" id="" cols="30" rows="10" v-model="input.command"></textarea>
            </div>
          </div>
        </div>
        <div class="sub__display--button">
          <button class="cancel" @click="inputHidden()">
            <div class="line">  
              <span></span>
              <span></span>
            </div>
            <span>Cancel</span>
          </button>
          <button class="save" @click="addTodo()">
            <div class="line" >  
              <span></span>
              <span></span>
            </div>
            <span>Add Task</span>
          </button>
        </div>
      </div>
    </div>

    <div class="task__list" v-for="(todo, index) of GET_TODO":class="{'zindex':todo.edit}">
      <div class="main__display" :class="{'star':todo.star}" >
        <div class="list--title">
          <div class="main">  
            <input type="checkbox" v-model="todo.completed"  >
            <input type="text" name="" id="":class="{'hidden':todo.listHidden}" v-model="todo.title" >
            <span :class="{'list--complete':todo.completed,'hidden':!todo.listHidden}">{{todo.title}}</span>
          </div>
            <div class="icon">
              <i class="far fa-trash-alt" @click="deleteTodo(todo)"></i>
              <i class="fas fa-star" :class="{'star':todo.star}" @click="starClick(todo)"></i>
              <i class="fas fa-pencil-alt" :class="{'star':!todo.listHidden}"@click="listClickHidden(todo,index)" ></i>
            </div>
        </div>
        <!-- 縮放後會隱藏的區塊 -->
        <div class="list--subtitle":class="{'hidden':!todo.listHidden}">
          <i class="far fa-calendar-alt"></i>
          <span>{{todo.date}}</span>
          <i class="far fa-file"></i>
          <i class="far fa-comment"></i>
          <span>{{todo.command}}</span>
        </div>
      </div>
      <!-- 縮放後的區塊 -->
      <div class="sub__display":class="{'hidden':todo.listHidden}"  >
        <div class="list--detail">
          <div class="list--deadline">
            <div class="deadline--title title">
              <i class="far fa-calendar-alt"></i>
              <span>Deadline</span>
            </div>
            <div class="deadline--time subtitle">
              <input type="date" :placeholder="todo.date">
              <input type="time" :placeholder="todo.date">
            </div>
          </div>
          <div class="list--file">
            <div class="file--title title">
              <i class="far fa-file"></i>
              <span>File</span>
            </div>
            <div class="file--message subtitle">
              <div class="msg"> 
                <span>20180514.zip</span>
                <span>uploaded yesterday</span>
              </div>
              <label for="file">+</label>
              <input type="file" name="" id="file" >            
              </div>
          </div>
          <div class="list--comment">
            <div class="comment--title title">
              <i class="far fa-comment"></i>
              <span>Comment</span>
            </div>
            <div class="comment--message subtitle">
              <textarea name="" id="" cols="30" rows="10" v-model="todo.command"></textarea>
            </div>
          </div>
        </div>
        <div class="sub__display--button">
          <button class="cancel"@click="listClickHidden(todo)">
            <div class="line">  
              <span></span>
              <span></span>
            </div>
            <span>Cancel</span>
          </button>
          <button class="save"@click="save(todo)">
            <div class="line">  
              <span></span>
              <span></span>
            </div>
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
  data () {
    return {
    title2:'test123',
     
    input:{
      title:'',
      date:'',
      time:'',
      command:'',
      updateTime:'',
      star:false,
      listHidden:true,
      completed:false,
      edit:false
      }, 
      cacheData:{}
    }
  },
  props:['title'],
  methods:{
   addTodo(){
     var d = new Date().getTime();
    this.input.updateTime=d;
    this.$store.commit('INPUT_TODO',Object.assign({}, this.input));
    this.input={
      title:'',
      date:'',
      time:'',
      command:'',
      updateTime:'',
      star:false,
      listHidden:true,
      completed:false,
      edit:false
      };
   },
   starClick(value){
      value.star=!value.star;
      value.star ? this.$store.commit('STARCHANGE'):this.$store.commit('LISTORIGINAL');
   },
   inputHidden(){
    this.$store.commit('INPUT') 
   },
   listClickHidden(value,index){
      value.listHidden=!value.listHidden;
      value.edit=!value.edit;
      this.$store.commit('EDIT');
      if(value.edit){
      this.cacheData=Object.assign({},value);
      console.log("暫存"+this.cacheData.command);
      }else{
        value.title=this.cacheData.title;
        value.date=this.cacheData.date;
        value.time=this.cacheData.time;
        value.command=this.cacheData.command;
        this.cacheData='';
      }
   },
   save(value){
     value.listHidden=!value.listHidden;
     value.edit=!value.edit;
     this.$store.commit('EDIT');
     value.edit?'':this.cacheData='';
   },
   deleteTodo(todo){
     this.$store.commit('DELETE',todo);
   }
  
  },
  computed:{
  ...mapGetters([
      'GET_TODO','star','hidden'
    ])
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  flex-flow: column wrap;
}
</style>
