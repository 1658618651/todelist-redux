import React from 'react';
import {Input,Button,List} from 'antd';
const TodoListUI=(props)=>{
    return (
        <div>
        <div>
            <Input 
            placeholder="todo info" 
            value={props.inputValue} 
            style={{width:'640px'}}
            onChange={props.handleInputChange}
            />
            <Button type="primary" onClick={props.handleSubmit}>submit</Button>
        </div>
        <List
    bordered
    dataSource={props.list}
    renderItem={(item,index)=>(<List.Item onClick={()=>props.handleDelete(index)}>{item}</List.Item>)}
    />
    </div>
    )
}
// class TodoListUI extends React.Component{
//     render(){
//         return (
//             <div>
//             <div>
//                 <Input 
//                 placeholder="todo info" 
//                 value={this.props.inputValue} 
//                 style={{width:'640px'}}
//                 onChange={this.props.handleInputChange}
//                 />
//                 <Button type="primary" onClick={this.props.handleSubmit}>submit</Button>
//             </div>
//             <List
//         bordered
//         dataSource={this.props.list}
//         renderItem={(item,index)=>(<List.Item onClick={(index)=>this.props.handleDelete(index)}>{item}</List.Item>)}
//         />
//         </div>
//         )
//     }
// }
export default TodoListUI;