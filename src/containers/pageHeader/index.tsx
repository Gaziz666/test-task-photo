import React from 'react'
import { Container } from './styles'

type IPageHeader = {
  children: React.ReactNode
}

export const PageHeader: React.FC<IPageHeader> = ({ children }) => {
  return <Container>{children}</Container>
}
