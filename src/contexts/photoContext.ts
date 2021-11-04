import { IPhoto } from './../@types/module.d'
import React from 'react'

type IPhotoContext = {
  contextPhoto?: IPhoto[] | []
  allPhoto?: IPhoto[] | []
  setContextPhoto?: React.Dispatch<React.SetStateAction<[] | IPhoto[]>>
  boxCount: number
  pageNumber: number
  setPageNumber?: React.Dispatch<React.SetStateAction<number>>
  setBoxCount?: React.Dispatch<React.SetStateAction<number>>
}

export const PhotoContext: React.Context<IPhotoContext> = React.createContext({
  boxCount: 10,
  pageNumber: 0
})
