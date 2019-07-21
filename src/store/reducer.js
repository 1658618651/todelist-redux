import {CHANGE_INPUT_VALUE,ADD,DELETE,GET,GET_INIT_LIST} from './actionTypes';

let defaultState={
    inputValue:'',
    list:[]//仓库里面有两个默认的数据
}
export default (state=defaultState,action)=>{//state里面存放了图书馆里所有书籍的信息，state是这个store里面存储的数据
    if(action.type===CHANGE_INPUT_VALUE){
        const newState=JSON.parse(JSON.stringify(state));//复制
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type===ADD){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue=''
        return newState;
    }
    if(action.type===DELETE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    if(action.type===GET){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(action.data);
        return newState;
    }
return state;
}
//reducer可以接收state，但是不能修改state，所以要拷贝一份state出来，经过处理，返回给store处理，替换store老的数据

//store是唯一的
//只有store才能改变store里面的数据，是拿到reducer return的数据更新的
//reducer是一个纯函数