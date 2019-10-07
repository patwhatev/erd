import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Paintings from "./Paintings";
import Paper from "./Paper";
import Photographs from "./Photographs";
import Video from "./Video";
import Sculpture from "./Sculpture";
import Books from "./Books";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>HENRIALEXANDERLEVY</h1>
          <ul className="header">
            <li><NavLink to="/paintings">Paintings</NavLink></li>
            <li><NavLink to="/worksonpaper">Works on paper</NavLink></li>
            <li><NavLink to="/photographs">Photographs</NavLink></li>
            <li><NavLink to="/video">Video</NavLink></li>
            <li><NavLink to="/sculpture">Sculpture/Furniture</NavLink></li>
            <li><NavLink to="/books">Books/Zines</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/paintings" component={Paintings}/>
             <Route path="/worksonpaper" component={Paper}/>
             <Route path="/photographs" component={Photographs}/>
             <Route path="/video" component={Video}/>
             <Route path="/sculpture" component={Sculpture}/>
             <Route path="/books" component={Books}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;