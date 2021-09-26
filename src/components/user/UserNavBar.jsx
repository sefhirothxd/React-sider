import React from 'react'
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import { UserBooking } from './UserBooking';
import { UserHistoryBooking } from './UserHistoryBooking';

export const UserNavBar = () => {

  let { path, url } = useRouteMatch();


  return (
    <header>
      <h1>soy user</h1>
      <nav>
        <ul>
          <li>            
            <NavLink to={`${url}/hacer-reserva`} className="nav-link" aria-current="page">
              Hacer Reserva
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/mis-reservas`} className="nav-link" aria-current="page">
              Mis reservas
            </NavLink>
          </li>
          <li className="nav-item p-lg-1">
            <NavLink exact to="/" className="nav-link">
              Salir
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path={path}>
          <UserBooking />
        </Route>
        <Route exact path={`${path}/hacer-reserva`}>
          <UserBooking />
        </Route>
        <Route exact path={`${path}/mis-reservas`}>
          <UserHistoryBooking />
        </Route>
      </Switch>
    </header>

    
  )
}
