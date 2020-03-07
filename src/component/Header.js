import React, { Component } from "react";
import {BrowserRouter as Router,Route,NavLink, Switch} from 'react-router-dom'
import routes from '../page/Routes'

class Header extends Component {
  onShowContect=(routers)=>{
    var result=-1;
    if(routers.length>0){
      result=routes.map((item,index)=>{
        return(
          <Route key={index} path={item.path} exact={item.exact} component={item.main}/>
        )
      })
    }
    return result
  }
  render() {
    return (
      <Router>
        <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-primary">
          <a className="navbar-brand">Navbar</a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to='/home'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about'>About</NavLink>
              </li>
              <li className="nav-item dropdown dropdown-login">
                <a
                  className="nav-link dropdown-toggle"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user" />
                  Tài Khoản
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item">Đăng ký</a>
                  <a className="dropdown-item">Đăng Nhập</a>
                  <a className="dropdown-item">Đăng xuất</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          {this.onShowContect(routes)}
        </Switch>
      </header>
      </Router>
    );
  }
}

export default Header;
