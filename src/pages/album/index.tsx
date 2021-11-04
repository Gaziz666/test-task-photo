import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Album from './album'
import { PageLayout } from '../../containers/pageLayout'
import { ModalView } from '../../containers/modalView'

export const AlbumPage: React.FC = () => {
  const { path } = useRouteMatch()
  return (
    <PageLayout>
      <Switch>
        <Route exact path={`${path}`} component={Album} />
        <Route exact path={`${path}/:id`} component={Album} />
      </Switch>
    </PageLayout>
  )
}
