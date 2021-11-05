import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Album from './album'
import { PageLayout } from '../../containers/pageLayout'

export const AlbumPage: React.FC = () => {
  const { path } = useRouteMatch()
  return (
    <PageLayout>
      <Switch>
        <Route exact path={`${path}`} component={Album} />
        <Route exact path={`${path}/:photoId/:type`} component={Album} />
      </Switch>
    </PageLayout>
  )
}
