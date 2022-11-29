import React from 'react';
import axios from 'axios';

var Community = function(props) {
  const [state, setState] = React.useState({
    view: 'home'
  });

  return (
    <div className={'flex vertical view ' + props.vis}>
      Community
    </div>
  )
};

export default Community;