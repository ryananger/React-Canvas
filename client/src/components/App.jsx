import React from 'react';
import axios from 'axios';

import Home from './Home.jsx';
import Garden from './Garden.jsx';
import Community from './Community.jsx';
import Learn from './Learn.jsx';

var App = function(props) {
  const [state, setState] = React.useState({
    view: 'home'
  });

  var toggleView = function(e) {
    var view = e.target.id;

    if (!state.view.includes(view)) {
      setState({
        ...state,
        view: state.view += view
      });
    } else {
      setState({
        ...state,
        view: function() {
          var v = state.view.replace(view, '');

          if (v === '') {
            v = 'home';
          }

          return v;
        }()
      });
    }
  };

  var renderView = function(view) {
    return (
      <div>
        {view}
      </div>
    )
  };

  var isVisible = function(view) {
    if (!state.view.includes(view)) {
      return 'hidden';
    } else {
      return '';
    }
  }

  return (
    <div className='flex vertical main'>
      <div className='flex horizontal' id='nav'>
        <h1 id='home' onClick={toggleView}>neighbr.ly</h1>

        {state.view}
        <div className='flex horizontal' id='navButtons'>
          <button id='garden' onClick={toggleView}>       Garden</button>
          <button id='community' onClick={toggleView}>    Community</button>
          <button id='learn' onClick={toggleView}>        Learn</button>
        </div>
      </div>

      <div className='flex vertical' id='view'>
        <Home vis={isVisible('home')}/>
        <Garden vis={isVisible('garden')}/>
        <Community vis={isVisible('community')}/>
        <Learn vis={isVisible('learn')}/>
      </div>
    </div>
  )
};

export default App;