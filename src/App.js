import './App.css';
import Quote from './components/quote';

function App() {
  console.log('app rendering');
  return (
    <div className="App">
      <h1 className="text-success display-4">Random quote machine</h1>
      <Quote />
    </div>
  );
}

export default App;
