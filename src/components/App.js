import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemForm from '../containers/ItemForm';
import ItemList from '../containers/ItemList';
// import ItemDetails from '../containers/itemDetails';
import EditItem from '../containers/EditItem';
import Nav from './Nav'

const App = () => (
  <div>
    <Nav/>
    <Switch>
      <Route path="/" component={ItemList} exact />
      {/* <Route path="/items/:id" component={ItemDetails} exact /> */}
      <Route path="/newitem" component={ItemForm} />
      <Route path="/items/:id/edit" component={EditItem} />
    </Switch>
  </div>
);

export default App;