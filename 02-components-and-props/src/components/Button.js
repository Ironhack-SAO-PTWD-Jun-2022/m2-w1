function Button ({text = 'Click me!', color}) {
  return (
    <a href='https://reactjs.org'>
      <button style={{ backgroundColor: color }}>{text}</button>
    </a>
  )
}

export default Button;