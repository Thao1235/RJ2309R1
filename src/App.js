import './App.css';
import { useState } from 'react';
import Panel from './components/Panel';

function App() {
  const [theme, setTheme] = useState('light')
  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light') 
  }
  return (
    <div className="container">
      {/* <button className="btn btn-sm btn-danger"
        onClick={handleChangeTheme}
      >Dark Mode</button> */}
      <Panel theme={theme} handleChangeTheme={handleChangeTheme}/>
    </div>
  );
}

export default App;
