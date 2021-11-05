import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { ImageBox } from '../../components/imageBox'

type IImageBox = {
  url: string
  id: number
  title: string
  openDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
  setEntityId: React.Dispatch<React.SetStateAction<number>>
}

export const ImageBoxContainer: React.FC<IImageBox> = ({
  url,
  id,
  title,
  openDeleteModal,
  setEntityId
}) => {
  const { path } = useRouteMatch()
  const deleteEntity = () => {
    openDeleteModal(true)
    setEntityId(id)
  }
  return (
    <ImageBox
      url={url}
      id={id}
      title={title}
      onDeleteModal={deleteEntity}
      route={`${path}/${id}/view`}
    />
  )
}
