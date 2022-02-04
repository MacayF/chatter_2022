import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput'
import {useState} from 'react'
import Message from './Message.js';
import Camera from 'react-snap-pic';



function App() {
  const [showCamera, setShowCamera] = useState(false);
  //creates variable 'messages' (the state)
  //'setMessages' is a function used to update 'messages'
  //useState defines 'setMessages' function
  const [messages, setMessages] = useState([]);
  // send Message runs when send button is clicked
  function sendMessage(text) {
    //create new mesage object
    const newMessage = {
      text,
      time: Date.now(),
      user: "Macay",
    };
    // se the 'messages' to be a new array that contains new
    // and old messages
    setMessages([newMessage, ...messages]);
  }

  function takePicture(img) {
    console.log(img)
    setShowCamera(false)
  }

  // every time state changes react re-renders

  //we return the html
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
        {/* loop over every message in messages array */}
        {messages.map((msg, i)=>{
          // return a message component
          // key needs to be a unique value for each item
          return <Message {...msg} key={i} />
        })}
      </div>
      {/* the sendMessage prop on TextInput = the sendMessage function (different things named the same) */}
      <TextInput sendMessage={sendMessage} showCamera={()=>setShowCamera(true)}/>
      {showCamera && <Camera takePicture={takePicture} />}
    </div>
    
  );
}

export default App;
