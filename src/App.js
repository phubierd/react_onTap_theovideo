import logo from './logo.svg';
import './App.css';
import DemoJSS from './JSS_StylesComponent/DemoJSS/DemoJSS';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Header from './components/Home/Header/Header';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Profile from './pages/Profile/Profile';

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
          <Route exact path='/detail/:id' component={Detail} />
          <Route exact path='/profile' component={Profile} />

          <Route exact path='/' component={Home} />
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
