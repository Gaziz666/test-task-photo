import React from 'react'
import { StyledInput } from './styles'

type IInput = {
  placeholder: string
  type?: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const Input: React.FC<IInput> = ({
  placeholder,
  type = 'text',
  onChange
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    ></StyledInput>
  )
}
