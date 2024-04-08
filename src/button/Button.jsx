import React from 'react'

const Button = ({type, variant, className, id, onClick}) => {
  return (
    <div>
      <button
      type={"button"}
      variant={variant}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id} 
      onClick={onClick}
      >

      </button>
    </div>
  )
}

export default Button
