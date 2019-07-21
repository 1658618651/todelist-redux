import {CHANGE_INPUT_VALUE,ADD,DELETE,GET,GET_INIT_LIST} from './actionTypes';
import axios from 'axios';
export const getInputChangeAction=(value)=>({
type:CHANGE_INPUT_VALUE,
value
})
export const getAddAction=()=>({
    type:ADD
})
export const getDeleteAction=(index)=>({
    type:DELETE,
    index
})
export const getAxiosAction=(data)=>({
    type:GET,
    data
})
export const getTodoList=()=>{//使用了thunk，Action不仅可以是一个对象，还可以是一个函数
    return async (dispatch)=>{
        let res=await axios.get('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312');
       const data=res.data.data.author.loginname;
       const action=getAxiosAction(data);
       console.log(data);
        dispatch(action);
    }
}
export const getInitList=()=>({
    type:GET_INIT_LIST
})