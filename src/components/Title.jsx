import React from 'react'

const Title = ({title}) => {
  return (
    <div className='text-black text-center text-2xl py-3 font-bold w-full animate-gradient bg-gradient-to-r from-gradient-1 to-gradient-2'>
      <h1>{title}</h1>
    </div>
  )
}

export default Title
