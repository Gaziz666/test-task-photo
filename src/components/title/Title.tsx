import React from 'react'
import { Container, Heading } from './styles'

type ITitle = {
  children: React.ReactNode
  as?: string
  center?: string
}

export const Title: React.FC<ITitle> = ({ children, as, center = true }) => {
  return (
    <Container center={center}>
      <Heading as={as}>{children}</Heading>
    </Container>
  )
}
