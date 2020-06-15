import React from 'react'

const Button = ({label}) => {
  return (
    <button onClick={() => alert('take me to the photo gallery')}>
      {label}
    </button>
  )
}

export default Button;
