import React from 'react'
import style from './SupportVideo.module.scss'

const SupportVideo = () => (
  <div className={style['o-supportVideo']}>
    <video className={style['o-supportVideo__video']} controls>
      <source src={require('../../../../shared/assets/Summer.mp4')} type='video/mp4' />
    </video>
  </div>
)


export default SupportVideo