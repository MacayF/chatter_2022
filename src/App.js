import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput'
import {useState} from 'react'
import Message from './Message.js';



// html written in JS
function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "Macay",
    };
      setMessages([newMessage, ...messages]);
  }

  
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
      <div className='messages'>
        {messages.map((msg)=>{
          return <Message {...msg}/>
        })}
      </div>
      <TextInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;
