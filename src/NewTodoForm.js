import React, { useState } from 'react'

const NewTodoForm = ({onSubmit}) => {
    const [newItem, setNewItem] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
    
        if(newItem === "") return
        onSubmit(newItem)
    
        setNewItem("");
      }

  return (
    <form className='new-item-form' onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor="item">New Item</label>
        <input placeholder='Enter item' value={newItem} onChange={(event) => setNewItem(event.target.value)} type="text" id="item"/>
      </div>
      <button className='add-btn btn'>Add</button>
    </form>
  )
}

export default NewTodoForm