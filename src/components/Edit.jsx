import React from 'react'

export const Edit = ({edit,setEdit,visible,setVisible}) => {
    return (
        <div>


            {visible && 
            <div>
            <input value={edit}
            type="text"
            placeholder="Edit here"
            onChange={(e)=>setEdit(e.target.value)}
            />

            <button>✍️</button>
            </div>
            
        }


        </div>
    )
}
