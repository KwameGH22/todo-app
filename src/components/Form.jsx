import React from 'react'

const Form = () => {




    
  return (
    <div className='bg-white py-2 px-3 rounded-md'>
        <form className='flex items-center'>
            <div className='w-full'>
                <input type='text'
                       placeholder='Create new Todo item'
                       className='text-grey-500'
                       onChange={}
                       value={}
                />
            <button type='submit'
                    className='text-white bg-gradient-to-br from-purple-600'>
            </button>
            </div>
        </form>

    </div>
  )
}

export default Form