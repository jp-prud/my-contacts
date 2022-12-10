import { Switch, Route } from 'react-router-dom';
import { Home, EditContact, NewContact, Category, NewCategory, EditCategory } from './pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />

      <Route path="/categories" exact component={Category} />
      <Route path="/new-category" component={NewCategory} />
      <Route path="/edit-category/:id" component={EditCategory} />
    </Switch>
  );
}
