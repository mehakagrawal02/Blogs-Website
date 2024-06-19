import './App.css';
import React,{useState} from 'react';
import './index.css'
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import Navbar from './Navbar';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {

  return (
    <Router>
      <Navbar/>
      <div className="App">
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home/>

            </Route>
            <Route path='/create'>
              <Create/>
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        
        </div>
     
    </div>
    </Router>
    
  );
    }

export default App;
//so that we can use it in other files
