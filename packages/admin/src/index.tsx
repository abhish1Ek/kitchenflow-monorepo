import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test from 'native/components/Test';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <h1>App</h1>
        <Test />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-root'));
