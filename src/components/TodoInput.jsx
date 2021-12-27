import React from 'react'

export const TodoInput = ({todoItem,setTodoItem,list,setList,error,setError}) => {
    let idGenerator = Math.random()*1000;

    const addHandler=()=>{
        if(todoItem){
            setList((lists)=>[...lists ,
                {
                    text:todoItem,
                    completed:false,
                    id:idGenerator,
                }])
                setTodoItem("");
                setError(false);
            }else{
                return "please enter a text";
            }
    }
    return (
        <div>
            <br/>
            <input value={todoItem}
            type="text"
            placeholder= "Enter here"
            onChange={(e)=>setTodoItem(e.target.value)}/>
            <button onClick={addHandler}>
               ADD 
            </button>
            {error && <div>{list}</div>}

        </div>

    )
}
export default TodoInput;