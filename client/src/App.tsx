import css from './App.module.css';
import Input from './components/Input/Input';
import Output from './components/Output/Output';

const App = () => {
  return (
    <div className={css.App}>
      <h1>Test</h1>
      <Input />
      <Output />
    </div>
  );
}

export default App;
