import Hero from './components/Hero'; //#2
import Movies from './components/Movies';
import './App.css';

function App() {
  const myName = ''
  return (
    <div className="App">
      <header className="App-header">
        <Hero /> 
        <Movies />
        {myName // # 0 Use Ternary like the if statement If my name is defined if my name is falsely put Login
        ? <p>Welcome Back.</p> // # 0 If True
        : <p>Please Login above.</p> //If False
        
        }
        <p>Hello {myName || 'guest'}.</p>
      </header>
    </div>
  );
}

export default App;
