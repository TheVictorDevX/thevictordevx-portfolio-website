import React from 'react'

const SkillSection = ({title, children}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h2 className="text-black text-xl text-center font-bold bg-yellow-300 w-fit py-1.5 px-3.5 rounded-full">{title}</h2>
      <div className="flex flex-wrap justify-center items-center gap-2 p-3">
        {children}
      </div>
    </div>
  )
}

export default SkillSection
