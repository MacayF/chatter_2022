import logo from './logo.svg';
import './App.css';



// html written in JS
function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="upper-header">
          <span className="subtitle">Macay Fischer Chat App</span>
          <img className="logo"/>
        </div>
        <div className="lower-header">
          <span className="title">Talking Space.™</span>
        </div>
      </header>
      <footer className="footer">
        <input className="text-input"/>
        <button className="send">send ↑</button>
      </footer>
    </div>
  );
}

export default App;
