import React from 'react'
import style from './LaunchHero.module.scss'

const LaunchHero = () => (
  <div className={style['o-hero__container']}>
    <img
      className={style['o-hero__container__image']}
      src={require('../../shared/assets/thrive1.jpg')}
    />
    <div className={style['o-hero__container__overlay']} />
  </div>
)

export default LaunchHero