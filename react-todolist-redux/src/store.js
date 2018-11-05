import {createStore} from 'redux';

const state = {
    content: '',
    items: [],
    tab: 'all'
};
const reducer = ((state, action) => {
    let item = state.items.slice(0);

    switch (action.type) {
    case 'UPDATE_VALUE':
        return Object.assign({}, state, {
            content: action.payload
        });
    case 'UPDATE_LIST':
        item.push(action.payload);
        return Object.assign({}, state, {
            items: item,
            content: ''
        });
    case 'UPDATE_CHECKED':
        item[action.payload].isCompleted = !item[action.payload].isCompleted;
        return Object.assign({}, state, {
            items: item
        });
    case 'UPDATE_TAB':
        return Object.assign({}, state, {
            tab: action.payload
        });
    case 'DELETE_LIST':
        item.splice(action.payload.target.dataset.id,1);
        return Object.assign({}, state, {
            items: item
        });
    default:
        return state;
    }
});

let store = createStore(reducer, state);

export default store;