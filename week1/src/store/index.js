import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  listData: [],
  test:"123456",
  hidden:true,
  display:'all',
  editText:false
}
const getters = {
  ['GET_TODO'](state) {
    console.log(state.listData)
    console.log(state.display)
    switch(state.display){
      case 'all':
      return state.listData;
      case 'progress':
      return state.listData.filter(todo => todo.completed === false);
      case 'complete':
      return state.listData.filter(todo => todo.completed === true);
    }
  },
  ['GET_DIS'](state) {
    // console.log(state.listData)
    return state.display;
  },
  star(state){
    return state.star;
  },
  hidden(state){
    return state.hidden;
  },
  changelistHidden(state){
    return state.listHidden;
  },
  edit(state){
    return state.editText;
  }
}
const actions = {
 

}
const mutations = {
  ['INPUT_TODO'](state, message) {
    state.listData.unshift(message);
    state.hidden=!state.hidden;
  },
  ['INPUT'](state){
    state.hidden=!state.hidden;
  },
  ['LIST_HIDDEN'](state){
    state.hidden=!state.hidden;
  },
  ['DISPLAY'](state,message){
    state.display=message;
    console.log(message)
  },
  ['EDIT'](state,message){
    state.editText=!state.editText;
    console.log(state.editText)
  },
  ['STARCHANGE'](state,message){
    let starSort = state.listData.sort(function (a, b) {
      return  a.star ? -1 : 1;
     });
     console.log('星星變更'+starSort)
  },
  ['LISTORIGINAL'](state,message){
    let starSort = state.listData.sort(function (a, b) {
      return a.updateTime > b.updateTime  ? 1 : -1;
     });
    let starSort2 = state.listData.sort(function (a, b) {
      return a.star ? -1 : 1;
     });  
     console.log('星星'+starSort)
  },
  ['DELETE'](state,message){
    state.listData.splice(state.listData.indexOf(message),1);
    state.editText=false;
    console.log(state.editText)
  }

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
