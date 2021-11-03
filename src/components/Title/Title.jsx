import React from 'react'
import { Container, Heading } from './styles'

export const Title = ({ children, as, center = true }) => {
  return (
    <Container center={center}>
      <Heading as={as}>{children}</Heading>
    </Container>
  )
}
