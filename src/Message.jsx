function Message(props) {
  return (
    <div>
      <p>{props.text}</p>
      <p>{props.name}</p>
    </div>
  );
}

export default Message