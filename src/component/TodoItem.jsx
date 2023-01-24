import { getValue } from "@testing-library/user-event/dist/utils"
import React,{useState} from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
const [value,setValue] = useState([
    {
        name:"sunita",
     address:"chautara",
        rollno:12,
        glasses:false
    
      },{
        name:"jayanti",
        address:"chautara",
        rollno:14,
        glasses:true
      },{
        name:"susmita",
        address:"dhobikhola",
        rollno:11,
        glasses:false
      },{
        name:"susma",
        address:"chautara",
        rollno:10,
        glasses:false
      }   
])
return (
    <div>
        <button>Clickme</button>
        { 
        value.map((item)=>{
            return <TodoItem setValue={setValue} value={value} item={item}/>
        })
    }
         </div>
)
}    
    
export default TodoList
