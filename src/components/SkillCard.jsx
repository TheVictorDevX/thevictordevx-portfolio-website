import React from 'react'

const SkillCard = ({icon, title}) => {
  return (
    <div className="hover:scale-110 hover:m-2 transition-all w-fit flex justify-center items-center border-2 border-yellow-300 pr-5">
          <img src={icon} alt="Icon" className="w-15"/>
          <p className="font-medium text-yellow-300">{title}</p>
    </div>
  )
}

export default SkillCard
