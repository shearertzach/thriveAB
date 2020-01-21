import React from 'react'
import style from './LaunchHero.module.scss'

const LaunchHero = () => (
  <div className={style['o-hero__container']}>
    <img
      className={style['o-hero__container__image']}
      src={require('../../shared/assets/thrive1.jpg')}
    />
    <div className={style['o-hero__container__overlay']} />
    <img className={style['o-hero__container__logo']}
      src={require('../../shared/assets/ThriveAB3.png')}
    />
  </div>
)

export default LaunchHero