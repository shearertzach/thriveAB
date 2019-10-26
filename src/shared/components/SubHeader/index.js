import React from 'react'
import style from './SubHeader.module.scss'

const SubHeader = ({ title, subtitle }) => (
  <div className={style['o-subheader']}>
    <h2 className={style['o-subheader__title']}>{title}</h2>
    <p className={style['o-subheader__subtitle']}>{subtitle}</p>
    <hr className={style['o-subheader__break']} />
  </div>
)

export default SubHeader