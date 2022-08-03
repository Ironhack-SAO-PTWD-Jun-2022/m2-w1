import './App.css';
import GuabaImg from './assets/goiaba.png';
import Button from './components/Button';

const heading = <h1>React é legal!</h1>;

const student = {
  firstName: 'hugo',
  lastName: 'lomba'
}

const {firstName, lastName} = student;

const myCustomId = 'goiaba'

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

const fruits = ['goiaba', 'maçã'];

function App() {
  return (
      <div className="App">
        {heading}
        {
          fruits.map(fruta => {
            // comentário dentro de JS
          return <p key={fruta}>{fruta}</p>
        })
        }

        <div>
          {/* uso htmlFor no lugar do for */}
          <label htmlFor='myinput'>My Input</label>
          <input id='myinput' />
        </div>

        <div id={myCustomId} >
          Olá, {firstName} {lastName}
        </div>
        <div>
          Em letras maiúsculas, {firstName.toUpperCase()} {lastName.toUpperCase()}
        </div>
        <div>
          Primeira maiúscula: {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}
        </div>
        <Button />
        <img src="https://belezaesaude.com/i/730/8786/goiaba.jpg" alt='goiaba net' />
        <img src={GuabaImg} alt='goiaba local' />
        <hr />
        <br />
      </div>
  );
}

export default App;
