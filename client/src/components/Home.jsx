import React from 'react';
import axios from 'axios';

var Home = function(props) {
  const [state, setState] = React.useState({
    view: 'home'
  });

  return (
    <div className={'flex vertical view ' + props.vis}>
      Home
    </div>
  )
};

export default Home;