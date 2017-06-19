import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App/App.jsx';
import Admin from './components/Admin/Admin.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/admin" component={Admin}/>
          <Route component={NotFound}/>
        </Switch>
        {/*<Redirect to="/notfound"/>*/}
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

