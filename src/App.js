import {DataProvider} from './GlobalState';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header';
import pages from './components/mainpages/pages';
function App() {
  return (
      <DataProvider>
          <Router>
    <div className="App">
      <Header/>
    </div>
          </Router>
          </DataProvider>
  );
}

export default App;
