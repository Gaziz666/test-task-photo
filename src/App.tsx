import { AlbumPage } from './pages/album'
import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { IPhoto } from './@types/module'
import { PhotoContext } from './contexts/photoContext'

const url = 'https://jsonplaceholder.typicode.com/photos'

const App: React.FC = () => {
  const [contextPhoto, setContextPhoto] = useState<IPhoto[] | []>([])
  const [allPhoto, setAllPhoto] = useState<IPhoto[] | []>([])
  const [boxCount, setBoxCount] = useState<number>(10)
  const [pageNumber, setPageNumber] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET'
        })

        if (response.ok) {
          const result = await response.json()
          setContextPhoto(result)
          setAllPhoto(result)
        } else {
          setContextPhoto([])
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <PhotoContext.Provider
      value={{
        contextPhoto,
        setContextPhoto,
        boxCount,
        pageNumber,
        setPageNumber,
        setBoxCount,
        allPhoto
      }}
    >
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/album" />} />
        <Route exact path="/album" component={AlbumPage} />
      </Switch>
    </PhotoContext.Provider>
  )
}

export default App
