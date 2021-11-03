import AlbumPage from 'pages/album'
import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const url = 'https://jsonplaceholder.typicode.com/photos'

const App = () => {
  const [contextPhoto, setContextPhoto] = useState(null)

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
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/album" />} />
      <Route exact path="/album" component={AlbumPage} />
    </Switch>
  )
}

export default App
