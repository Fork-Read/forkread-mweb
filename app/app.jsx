'use strict';

import React from 'react';

class App2 extends React.Component {
  render() {
    return (
       <div>
          {this.props.children}
       </div>
    );
  }
}

export default App2;