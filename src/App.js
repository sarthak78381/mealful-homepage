
{/* importing all main components*/}

import Header from './components/header/header';
import Note from './components/Note/Note';
import TimeTable from './components/timeTable/TimeTable';
import Menu from './components/Menu/Menu';
import Contact from './components/contact/Contact';
import SocialHandle from './components/socialHandle/SocialHandle';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Note/>
      <TimeTable />
      <Menu />
      <Contact />
      <SocialHandle />
    </div>
  );
}

export default App;
