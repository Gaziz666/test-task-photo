import React, { useEffect, useState } from 'react'
import { Modal } from '../../components/modal/modal'
import { Title } from '../../components/title'
import CardMedia from '@mui/material/CardMedia'
import { useParams, useHistory } from 'react-router-dom'
import { baseUrl } from '../../config/config'
import { IPhoto } from '../../@types/module'

type IModalDelete = {
  isOpen: boolean
  entityId: number
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

type IParams = {
  photoId: string
  type: string
}

export const ModalView: React.FC = () => {
  const { photoId, type } = useParams<IParams>()
  const history = useHistory()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [photo, setPhoto] = useState<IPhoto>()

  useEffect(() => {
    if (type !== 'view') {
      return
    }
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}?id=${photoId}`, {
        method: 'GET'
      })
      const result = await response.json()
      if (result) {
        setPhoto(result[0])
        setIsOpen(true)
      }
    }
    fetchData()
  }, [photoId, type])

  const closeModal = () => {
    setIsOpen(false)
    history.push('/album')
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <CardMedia
        component="img"
        height="600"
        image={photo?.url}
        alt={`image_${photo?.id}`}
      />
      <Title as="h3">{photo?.title}</Title>
    </Modal>
  )
}
