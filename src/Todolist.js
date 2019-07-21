import React from 'react';
import "antd/dist/antd.css";
import {store} from './store/index';
import axios from 'axios';
import {getInputChangeAction,getDeleteAction,getAddAction,getAxiosAction, getInitList} from './store/actionCreators';
import TodolistUI from './TodoListUI';

class Todolist extends React.Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        console.log(store.getState());
        store.subscribe(this.handleStoreChange);
    }
    handleInputChange=(e)=>{
        const action=getInputChangeAction(e.target.value);
        store.dispatch(action);
        
    }
    handleStoreChange=()=>{
        this.setState(store.getState());
    }
    handleSubmit=()=>{
        const action=getAddAction();
        store.dispatch(action);
        
    }
    handleDelete=(index)=>{
        const action=getDeleteAction(index);
        store.dispatch(action);
    }
    // async componentDidMount(){//redux-thunk
    // const action=getTodoList();
    // store.dispatch(action);//ation会被自动执行，action就是那个函数
    // console.log(action);
    // }
    // async componentDidMount(){
    //     let res=await axios.get('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312');
    //    const data=res.data.data.author.loginname;
    //    const action=getAxiosAction(data);
    //     store.dispatch(action);
    //     }
    async componentDidMount(){
        const action=getInitList();
        console.log(11,action)
        store.dispatch(action);
        
        
        }
render(){
    return(
        <TodolistUI 
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        list={this.state.list}
        handleDelete={this.handleDelete}
        />

    )
}
    
}
export default Todolist;