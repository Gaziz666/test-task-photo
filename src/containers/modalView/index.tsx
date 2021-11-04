import React, { useContext } from 'react'
import { Button } from '../../components/button'
import { Modal } from '../../components/modal/modal'
import { Title } from '../../components/title'
import { PhotoContext } from '../../contexts/photoContext'
import CardMedia from '@mui/material/CardMedia'

type IModalDelete = {
  isOpen: boolean
  entityId: number
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalView: React.FC<IModalDelete> = ({
  isOpen,
  entityId,
  onClose
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <CardMedia
        component="img"
        height="600"
        image="https://via.placeholder.com/600/771796"
        alt={`image_`}
      />
      <Title as="h3">Do you really want to delete the Image {entityId}</Title>
    </Modal>
  )
}
