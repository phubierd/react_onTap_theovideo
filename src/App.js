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
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import DemoUseEffect from './DemoHookVideo/DemoUseEffect';
import DemoUseCallBack from './DemoHookVideo/DemoUseCallBack';
import DemoUseMemo from './DemoHookVideo/DemoUseMemo';
import DemoUseRef from './DemoHookVideo/DemoUseRef';
import DemoUseReducer from './DemoHookVideo/DemoUseReducer';
import DemoUseContext from './DemoHookVideo/DemoUseContext';
import ContextProvider from './DemoHookVideo/Context/ContextProvider';
import DemoUseRedux from './DemoHookVideo/DemoUseRedux';
import TodoList from './pages/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      {/* <DemoJSS/> */}
      <BrowserRouter>
        {/* <Header/> */}
        <Switch>
          <HomeTemplate path="/home" component={Home} />
          <HomeTemplate path="/contact" component={Contact} />
          <HomeTemplate path="/about" component={About} />
          <HomeTemplate path="/login" component={Login} />
          <HomeTemplate path="/detail/:id" component={Detail} />
          <HomeTemplate path="/profile" component={Profile} />
          {/* <ContextProvider> */}
          <HomeTemplate path="/demouseeffect" component={DemoUseEffect} />
          <HomeTemplate path="/demousecallback" component={DemoUseCallBack} />
          <HomeTemplate path="/demousememo" component={DemoUseMemo} />
          <HomeTemplate path="/demouseref" component={DemoUseRef} />
          <HomeTemplate path="/demousereducer" component={DemoUseReducer} />
          <HomeTemplate path="/demousecontext" component={DemoUseContext} />
          {/* </ContextProvider> */}
          <HomeTemplate path="/demoredux" component={DemoUseRedux} />
          <HomeTemplate path="/todolist" component={TodoList} />
          {/* <Route exact path='/detail/:id' component={Detail} />
          <Route exact path='/profile' component={Profile} /> */}
          
          <HomeTemplate path='/' component={Home} />
          <HomeTemplate path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
