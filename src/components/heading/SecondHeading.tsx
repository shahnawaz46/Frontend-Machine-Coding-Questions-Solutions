import React from 'react'

const SecondHeading = ({text}:{text:string}) => {
  return (
    <p className="mb-1 md:text-lg w-full md:w-9/12">{text}</p>
  )
}

export default SecondHeading