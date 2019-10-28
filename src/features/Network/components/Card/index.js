import React from 'react'
import style from './Card.module.scss'

const Card = ({ img, title, subtitle, info1, info2, info3, website, webLink }) => (
  <div className={style['o-card']}>
    <img src={img} className={style['o-card__img']}></img>
    <p className={style['o-card__title']}>{title}</p>
    <p className={style['o-card__subtitle']}>{subtitle}</p>
    <p className={style['o-card__info']}>{info1}</p>
    <p className={style['o-card__info']}>{info2}</p>
    <p className={style['o-card__info']}>{info3}</p>
    <a href={webLink}>{website}</a>
  </div>
)


export default Card