import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Fib from './Fib';
import OtherPage from './OtherPage';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} width="150px" className="App-logo" alt="logo" />

          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

          <Link to="/" className="App-link">Home</Link>
          <Link to="/otherpage" className="App-link">Other Page</Link>
        </header>
        <div className="App-body">

          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />

        </div>
      </div>
    </Router>
  );
}

export default App;
