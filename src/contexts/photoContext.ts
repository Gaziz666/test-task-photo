import { IPhoto } from './../@types/module.d'
import React from 'react'

type IPhotoContext = {
  data?: IPhoto[] | []
}

export const PhotoContext: React.Context<IPhotoContext> = React.createContext(
  {}
)
