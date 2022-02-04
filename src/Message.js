export default function Message(props) {
  // can add other data to messages with props.date etc
  return <div className='message'>{props.text}</div>;
}
