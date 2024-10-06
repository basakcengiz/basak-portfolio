import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [sidebar, setSidebar] = useState<boolean>(false);

  return (
    <>
      {sidebar ? <Sidebar setSidebar={setSidebar} /> : <Header setSidebar={setSidebar} />}
      <Home />
      <About />
      <Projects />
    </>
  );
}

export default App;
