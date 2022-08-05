function Greeting (props) {
  // const message = 'Hello Caio';
  // const message = `Hello ${props.firstName}`;

  return (
    <div>
      <u>Hello, {props.firstName}</u>
      <hr />
    </div>
  )
}

export default Greeting;