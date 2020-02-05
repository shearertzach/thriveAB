import React, { Component } from 'react'
import style from './Footer.module.scss'
import { Link, Route, Switch } from 'react-router-dom'
import { routes } from '../../constants/routes'

class Footer extends Component {
  render() {
    return (
      <div className={style['c-footer']}>
        <div className={style['c-footer__linkContainer']}>
          {
            routes.map((route) => (
              <Link
                className={style['c-footer__linkContainer__link']}
                key={route.path}
                to={route.path}
              >
                {route.display}
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Footer