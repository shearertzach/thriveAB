import React from 'react'
import style from './Input.module.scss'
import classnames from 'classnames'

const Input = ({ placeholder, onChange, extraStyle, type }) => (
  <input
    type={type}
    className={classnames(style['o-input'], extraStyle)}
    onChange={onChange}
    placeholder={placeholder}
  />
)

export default Input