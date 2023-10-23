import './App.css';
import AppCount from './components/AppCount';
import AppCountJS from './components/AppCountJS';
import CheckboxGroup from './components/CheckboxGroup';
import Content from './components/Content';
import RadioGroup from './components/RadioGroup';

function App() {
  return (
    <div className="container">
      <AppCountJS/>
      <AppCount/>
      <Content/>
      <RadioGroup/>
      <CheckboxGroup/>
    </div>
  );
}

export default App;
