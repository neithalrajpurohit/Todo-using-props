import React from 'react'

export const TodoInput = ({todoItem,setTodoItem,setList,error,setError}) => {
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
                setError(false)
        }else{
                setError(true);
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
                {error && <div>please enter the text</div>}

        </div>

    )
}
export default TodoInput;