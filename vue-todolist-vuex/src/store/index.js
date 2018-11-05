import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  listData: [],
  hidden:true,
  display:'all',
  editText:false
}
const getters = {
  ['GET_TODO'](state) {
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
  },
  ['EDIT'](state){
    state.editText=!state.editText;
  },
  ['STARCHANGE'](state){
    state.listData.sort(function (a) {
      return  a.star ? -1 : 1;
     });
  },
  ['LISTORIGINAL'](state){
    state.listData.sort(function (a, b) {
      return a.updateTime > b.updateTime  ? 1 : -1;
     });
    state.listData.sort(function (a) {
      return a.star ? -1 : 1;
     });  
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
