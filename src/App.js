import logo from './logo.svg';
import './App.css';
import DemoJSS from './JSS_StylesComponent/DemoJSS/DemoJSS';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Header from './components/Home/Header/Header';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      {/* <DemoJSS/> */}
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />

          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
