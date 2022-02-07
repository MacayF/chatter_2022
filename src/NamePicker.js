import React from 'react';
import './NamePicker.css';
import {useState} from 'react';

function NamePicker(props) {
  const [editName, setEditName] = useState(false);
  const [username, setName] = useState('');
  const {sendName} = props;

  // function called on send
  function send() {
    setName(username);
    props.sendName(username);
    setEditName(false);
  }

  //enter calls send
  function onKeyPress(e) {
    if (e.key === 'Enter') {
      send();
    }
  }

  function edit() {
    setEditName(true);
    setName('');
  }

  //html elements
  if(editName===true) {
    return (
      <div className="name-field">
        <input
          className="name-input" 
          value={username} 
          onChange={(e) => setName(e.target.value)}
          onKeyPress={onKeyPress}
        />
        <button className="enter" onClick={send}>enter</button>
      </div>
    );
  } else {
    return (
      <div className="name-field">
        <span className='username'>{username}</span>
        <button onClick={edit} className='enter'>edit name</button>
      </div>
    );
  }
  
}

export default NamePicker;