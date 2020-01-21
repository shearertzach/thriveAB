import React from 'react'
import style from './InfoSection.module.scss'
import classnames from 'classnames'

const InfoSection = ({ children, extraStyle }) => (
  <div className={classnames(style['o-info'], extraStyle)}>
    {children}
  </div>
)

export default InfoSection