import React, { PureComponent } from 'react'
import style from './Navigator.module.scss'
import { Link } from 'react-router-dom'
import { routes } from '../../constants/routes'


class Navigator extends PureComponent {
  render() {
    return (
      <div className={style['c-navigator']}>
        {
          routes.map((route) => (
            <Link
              className={style['c-navigator__link']}
              key={route.path}
              to={route.path}
            >
              {route.display}
            </Link>
          ))
        }
      </div>
    )
  }
}

export default Navigator