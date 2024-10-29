import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { CMSProvider, useCMS } from './CMSContext';
import HomePage from './Pages/HomePage';
import CollectionArchive from './Pages/CollectionArchive';
import CollectionItem from './Pages/CollectionItem';

const AppRouter = () => {
  const { redirectMap } = useCMS();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:collectionSlug" exact component={CollectionArchive} />
        <Route path="/:collectionSlug/:itemSlug" exact component={CollectionItem} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default function App() {
  return (
    <CMSProvider>
      <AppRouter />
    </CMSProvider>
  );
}
