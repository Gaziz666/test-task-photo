import React from 'react'
import { StyledButton } from './styles'

type IButton = {
  children: React.ReactNode
  onClick: () => void
}

export const Button: React.FC<IButton> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
