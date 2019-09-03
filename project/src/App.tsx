import 'antd/dist/antd.css';
import * as React from 'react';
import Router from '../src/router/index';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router/>
      </div>
    );
  }
}

export default App;
