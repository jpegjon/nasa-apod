import './App.css';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/nasaphoto'>
        <NasaPhoto />
      </Route>
    </BrowserRouter>
  );
}

export default App;
