import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );


interface IData {
  id: string;
  name: string;
  email: string;
}

interface IAppState {
  showTable: boolean;
}

interface IAppProps {
  data: IData;
}

class App extends React.Component<IAppProps, IAppState> {
  public toggleShowTable = () => {
    const { showTable } = this.state;
    this.setState({showTable: !showTable});
    <button onClick={this.toggleShowTable}>test</button>
  }

}
}
export default App;

