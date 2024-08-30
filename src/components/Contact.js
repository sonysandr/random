import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='p-4 m-4 text-xl font-bold'>Contact us</h1>
      <form>
      <input type='text' className= 'p-3 m-3 border border-black rounded-lg' placeholder='name'/>
      <input type='text' className='p-3 m-3 border border-black rounded-lg' placeholder='product name'/>
      <input type='text' className='p-3 m-3 border border-gray-600 rounded-lg' placeholder='message'/>
      <button className='p-3 bg-gray-400 rounded-lg'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
