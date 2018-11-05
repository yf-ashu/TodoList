import React, { Component } from 'react';
import Input from './Input';
import Display from './Display';
import store from '../../store';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInput=this.handleInput.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.changeChecked=this.changeChecked.bind(this); 
    }
    refresh(){
        this.setState(store.getState());
    }
    componentDidMount(){
        this.unsubscribe=store.subscribe(this.refresh.bind(this));
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    handleChange(e){
        store.dispatch({
            type:'UPDATE_VALUE',
            payload:e.target.value
        });
    }
 
    handleInput(e){
        if(e.key == 'Enter'&&e.target.value){
            let listRow = {
                text: e.target.value,
                isCompleted: false
            };
            store.dispatch({
                type:'UPDATE_LIST',
                payload:listRow
            });
        }
    }
    changeChecked(e){
        store.dispatch({
            type:'UPDATE_CHECKED',
            payload:e
        });
    }
    changeTab(e){
        store.dispatch({
            type:'UPDATE_TAB',
            payload:e.target.dataset.id
        });
    }
    deleteItem(e){
        store.dispatch({
            type:'DELETE_LIST',
            payload:e
        });
    }
    render() {
        let display;
        const changeTabInner=(data)=>{
            display= data.map((data,index)=>{
                return (<Display 
                    checkid={'checkid' + index }
                    key={index}
                    id={index}
                    text={data.text} 
                    changeChecked={()=>{this.changeChecked(index);}}
                    checked={data.isCompleted}
                    deleteItem={this.deleteItem} />);
            });
        };
        if(this.state.tab==='all'){
            changeTabInner(this.state.items);
        }else if(this.state.tab==='checked'){
            changeTabInner( this.state.items.filter((data)=>{
                return data.isCompleted===true;
            }));
        }else{
            changeTabInner( this.state.items.filter((data)=>{
                return data.isCompleted===false;
            }));
        }

        return (
            <div className="container">
                <div className="btnArea">
                    <button  data-id="all" onClick={this.changeTab}>全部</button>
                    <button data-id="checked"onClick={this.changeTab}>完成</button>
                    <button data-id="unchecked"onClick={this.changeTab}>未完成</button>
                </div>
                <Input 
                    id='inputText'
                    value={this.state.content}
                    handleInput={this.handleInput}
                    handleChange={this.handleChange}
                    placeholder='請輸入'
                />
                <div className="inputOuter">
                    {display}
                </div> 
            </div>
        );
    }
}
export default Layout;
