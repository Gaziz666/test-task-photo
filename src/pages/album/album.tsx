import React from 'react'
import { AlbumContainer } from '../../containers/albumContainer'
import { MUIPagination } from '../../containers/muiPagination'
import { PageHeader } from '../../containers/pageHeader'
import { PhotoSearch } from '../../containers/photoSearch'

const Album: React.FC = () => {
  return (
    <>
      <PageHeader>
        <PhotoSearch />
      </PageHeader>
      <AlbumContainer />
      <MUIPagination />
    </>
  )
}

export default Album
