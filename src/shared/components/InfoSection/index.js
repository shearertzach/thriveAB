import React from 'react'
import style from './InfoSection.module.scss'

const InfoSection = ({ children }) => (
  <div className={style['o-info']}>
    {children}
  </div>
)

export default InfoSection