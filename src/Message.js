import './Message.css';

export default function Message(props) {
  // can add other data to messages with props.date etc
  return (
    <div className='message'>
      <span className='name-tag'>{props.user}</span>
      <div className='message-text'>{props.text}</div>
    </div>
  );
}
