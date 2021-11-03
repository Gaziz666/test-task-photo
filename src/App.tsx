import AlbumPage from './pages/album'
import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { IPhoto } from './@types/module'
import { PhotoContext } from './contexts/photoContext'

const url = 'https://jsonplaceholder.typicode.com/photos'

const App: React.FC = () => {
  const [contextPhoto, setContextPhoto] = useState<IPhoto[] | []>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET'
        })

        if (response.ok) {
          setContextPhoto(await response.json())
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
    <PhotoContext.Provider value={{ data: contextPhoto }}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/album" />} />
        <Route exact path="/album" component={AlbumPage} />
      </Switch>
    </PhotoContext.Provider>
  )
}

export default App
