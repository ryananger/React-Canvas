import React from 'react';
import axios from 'axios';

var Garden = function(props) {
  const [state, setState] = React.useState({
    view: 'home'
  });

  return (
    <div className={'flex vertical view ' + props.vis}>
      Garden
    </div>
  )
};

export default Garden;