import { AppProvider } from './AppContext';
import './App.css';
import Parent from './Parent';

function App() {

  return (

    <AppProvider>
    
      <div className="App">
        <Parent />
      </div>

    </AppProvider>

  );
}

export default App;
