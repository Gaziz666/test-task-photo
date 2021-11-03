import React from 'react'
import { Title } from '../../components/title'
import { AlbumContainer } from '../../containers/albumContainer'
import { PageHeader } from '../../containers/pageHeader'

const Album = () => {
  return (
    <>
      <PageHeader>
        <Title as="h2">My album</Title>
      </PageHeader>
      <AlbumContainer />
    </>
  )
}

export default Album
