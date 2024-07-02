import React from 'react'
import tick from '../assets/tick.jpg'
import plus_icon from '../assets/plus-icon.jpg'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : tick} alt="" className='w-7' />
            <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
        </div>

        <img onClick={()=>{deleteTodo(id)}} src={plus_icon} alt="" className='w-3.5 cursor-pointer' />
    </div>
  )
}

export default TodoItems