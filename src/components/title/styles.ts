import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
`

export const Heading = styled.h1``
