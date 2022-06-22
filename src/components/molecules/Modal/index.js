import React from 'react'
import Button from '../../atoms/Button'

const Modal = ({children,title, onClose, onConfirm}) => {

  return (
    <div className='max-w-[40rem] bg-white px-5 py-5 border-4 border-blue-800 shadow-xl rounded-lg'>
        <div className='flex flex-col justify-center items-center mb-6'>
            <h1 className='text-2xl font-bold mb-10'>{title}</h1>
            {children}
        </div>
        <div className='flex flex-row'>
            <div className='mr-4'>
                <Button title={"Confirm"} onClick={()=>onConfirm()} isPrimary/>
            </div>
            <Button title={"Close"} onClick={(e)=>onClose(!e)}/>
        </div>
    </div>
  )
}

export default Modal