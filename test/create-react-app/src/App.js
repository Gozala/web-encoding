import { TextEncoder, TextDecoder } from "web-encoding";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {new TextDecoder().decode(new TextEncoder().encode('Learn React'))}
        </a>
      </header>
    </div>
  );
}

export default App;
