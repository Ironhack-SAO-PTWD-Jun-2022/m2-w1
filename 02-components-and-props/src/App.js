import './App.css';
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import StudentCard from './components/StudentCard';
import Badge from './components/Badge';
import StudentList from './components/StudentList';

import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <Greeting firstName='Hélio' />
      <Greeting firstName='Gabriel' />
      <Greeting firstName='José' />


      <Badge badgeText='Importante!' />
      <StudentList>
        <StudentCard name='Hugo' week={8} info={{ city: 'SAO', course: 'WEB'}}/>
        <StudentCard name='Jandson' week={8} info={{ city: 'SAO', course: 'WEB'}}/>
        <StudentCard name='Walison' week={8} info={{ city: 'SAO', course: 'WEB'}}/>
      </StudentList>

      <ReactPlayer url='https://vimeo.com/channels/top/22439234' playing/>
      <ReactPlayer url="https://www.youtube.com/watch?v=kJQP7kiw5Fk" controls={false} volume="0.5" />
    </div>
  );
}

export default App;
