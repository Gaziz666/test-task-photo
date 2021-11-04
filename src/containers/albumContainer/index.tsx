import React, { useContext, useState } from 'react'
import { Container } from './styles'
import { PhotoContext } from '../../contexts/photoContext'
import { ModalDelete } from '../modalDelete'
import { ImageBoxContainer } from '../imageBoxContainer'
import { ModalView } from '../modalView'

export const AlbumContainer: React.FC = () => {
  const { contextPhoto, boxCount, pageNumber } = useContext(PhotoContext)
  const [deleteModalIsOpen, setDeleteModaLIsOpen] = useState<boolean>(false)
  const [entityId, setEntityId] = useState<number>(0)

  return (
    <>
      <Container>
        {contextPhoto!.map((item, index) => {
          if (
            index >= pageNumber * boxCount &&
            index < (pageNumber + 1) * boxCount
          ) {
            return (
              <ImageBoxContainer
                url={item.thumbnailUrl}
                id={item.id}
                key={item.id}
                title={item.title}
                openDeleteModal={setDeleteModaLIsOpen}
                setEntityId={setEntityId}
              />
            )
          }
          return
        })}
      </Container>
      <ModalDelete
        isOpen={deleteModalIsOpen}
        onClose={setDeleteModaLIsOpen}
        entityId={entityId}
      />
      <ModalView />
    </>
  )
}
