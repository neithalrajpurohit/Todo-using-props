import React from 'react'

export const TodoList = ({list,setList,error,setError}) => {

        const correctHandler = (lists) =>{
            setList(list.map((item)=>{
            if(item.id===lists.id){
                return {
                ...item, 
                completed : !item.completed
                }
            }
            return item;
        }))
        }
        const deleteHandler=(lists)=>{
            setList((prevItem)=>prevItem.filter((item)=>item.id !== lists.id))
        }
        
    return (
        <div>
            {list.map((lists=>(
                <div key={lists.id}>
                    <li className={lists.completed ? "completed":""}>{lists.text}</li>
                    <div>
                    <br/>
                    <button onClick={()=>correctHandler(lists)}>✔️</button>
                    <button onClick={()=>deleteHandler(lists)}>🆇</button>
                    </div>

                    </div>
            )))}

        </div>
    )
}
export default TodoList;