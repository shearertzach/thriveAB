import React from 'react'
import style from './Button.module.scss'
import classnames from 'classnames'

const Button = ({ onClick, title, extraStyle, disabled }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={classnames(style['o-button'], extraStyle)}
  >
    {title}
  </button>
)

export default Button