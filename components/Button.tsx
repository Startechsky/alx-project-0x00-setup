import React from 'react'
import { ButtonProps } from '@/interfaces'

const Button : React.FC<ButtonProps> = ({title, style}) => {
  return (
    <button style={style}>
        {title}
    </button>
  )
}

export default Button