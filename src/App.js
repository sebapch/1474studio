import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav'
import Main from './components/main/Main';
import Contact from './components/contact/Contact'
import Playlist from './components/playlist/Playlist';

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Playlist/>
      <Contact />
    </>
  );
}

export default App;
