import './Message.css';

export default function Message(props) {
  // can add other data to messages with props.date etc
  if (props.user==localStorage.getItem('username')) {
    return (
      <div className='my-message'>
        <span className='name-tag'>{props.user}</span>
        <div className='my-message-text'>{props.text}</div>
      </div>
    );
  } else {
    return (
      <div className='message'>
        <span className='name-tag'>{props.user}</span>
        <div className='message-text'>{props.text}</div>
      </div>
    );
  }
}
