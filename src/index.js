import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bio from './Bio/Bio';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
          <Route path="/Home" component={App} />
          <Route path="/Bio" component={Bio} />

        </div>
    </Router>,
    document.getElementById('root')
  )