import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Album from './album'
import { PageLayout } from '../../containers/pageLayout'

const AlbumPage: React.FC = () => {
  const { path } = useRouteMatch()

  return (
    <PageLayout>
      <Switch>
        <Route exact path={`${path}`} component={Album} />
      </Switch>
    </PageLayout>
  )
}

export default AlbumPage
