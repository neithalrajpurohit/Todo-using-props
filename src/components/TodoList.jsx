import React from 'react'

export const TodoList = ({list,setList,error,setError,edit,setEdit}) => {


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

        const editHandler=(lists)=>{
            if(edit){
               setList((lists)=>[...lists ,
                {
                    text:edit,
                    completed:false,
                }])
                setList((prevItem)=>prevItem.filter((item)=>item.id !== lists.id))
                setEdit("");
                setError(false);
            }else{
                setError(true);
            }
    
                 }
        
    return (
        <div>
            {list.map((lists=>(
                <div key={lists.id}>
                    <li className={lists.completed ? "completed":""}>{lists.text}</li>
                     <div>
                    <br/>
                    <button onClick={()=>correctHandler(lists)}>✔️</button>
                    {lists.completed &&
                    <div>
                     <input value={edit}
                     type="text"
                     placeholder="Enter here"
                     onChange={(e)=>setEdit(e.target.value)}
                      />
                    <button onClick={()=>editHandler(lists)}>✍️</button>
                    {error && <div>{error}</div>}
                    </div>
                     }
                    
                    <button onClick={()=>deleteHandler(lists)}>🆇</button>
                    </div>
                    </div>
            )))}

        </div>
    )
}
export default TodoList;