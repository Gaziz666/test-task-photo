import React, { useContext } from 'react'
import { Button } from '../../components/button'
import { Modal } from '../../components/modal/modal'
import { Title } from '../../components/title'
import { ButtonWrapper } from './styles'
import { PhotoContext } from '../../contexts/photoContext'

type IModalDelete = {
  isOpen: boolean
  entityId: number
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalDelete: React.FC<IModalDelete> = ({
  isOpen,
  entityId,
  onClose
}) => {
  const { setContextPhoto } = useContext(PhotoContext)

  const deleteImageBox = () => {
    onClose(false)
    setContextPhoto!((arr) => {
      return arr.filter((item) => item.id !== entityId)
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title as="h3">Do you really want to delete the Image {entityId}</Title>
      <ButtonWrapper>
        <Button onClick={deleteImageBox}>Yes</Button>
        <Button onClick={() => onClose(false)}>No</Button>
      </ButtonWrapper>
    </Modal>
  )
}
