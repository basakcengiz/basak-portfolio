import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebar, setSidebar] = useState<boolean>(false);
  console.log(sidebar);
  return <>{sidebar ? <Sidebar setSidebar={setSidebar} /> : <Header setSidebar={setSidebar} />}</>;
}

export default App;
