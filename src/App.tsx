import './App.css';
import { Header } from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div>
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
