import React from 'react'
import { Container, Header, Body } from './styles'
import MainHeader from 'containers/mainHeader'

const PageLayout = ({ children }) => {
  return (
    <Container>
      <Header>
        <MainHeader />
      </Header>
      <Body>{children}</Body>
    </Container>
  )
}

export default PageLayout
