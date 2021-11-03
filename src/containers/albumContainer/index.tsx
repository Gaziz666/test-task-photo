import React, { useContext } from 'react'
import { ImageBox } from '../../components/imageBox'
import { Container } from './styles'
import { PhotoContext } from '../../contexts/photoContext'

export const AlbumContainer: React.FC = () => {
  const photoContext = useContext(PhotoContext)

  return (
    <Container>
      {photoContext.data!.map((item) => {
        return (
          <ImageBox
            url={item.thumbnailUrl}
            id={item.id}
            key={item.id}
            title={item.title}
          />
        )
      })}
    </Container>
  )
}
