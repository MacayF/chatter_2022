import React from 'react';
import './TextInput.css';
import {useState} from 'react';
import { FiSend, FiCamera } from 'react-icons/fi';
import { RiCameraFill } from 'react-icons/ri';


function TextInput(props) {
  const {sendMessage} = props;
  const [text, setText] = useState('');

  function send() {
    props.sendMessage(text);
    setText('');
  }

  function onKeyPress(e) {
    if (e.key === 'Enter') {
      send();
    }
  }

  return (
    <footer className="footer">
      <button className='cam-btn' onClick={props.showCamera}
          style={{left:10, right:'auto'}}>
          <RiCameraFill style={{height:35, width:35}} />
      </button>
      <input 
        className="text-input" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button className="send" onClick={send}>send ↑</button>
    </footer>
  );
}

export default TextInput;