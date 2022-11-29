import React from 'react';
import axios from 'axios';

var Learn = function(props) {
  const [state, setState] = React.useState({
    view: 'home'
  });

  return (
    <div className={'flex vertical view ' + props.vis}>
      Learn
    </div>
  )
};

export default Learn;