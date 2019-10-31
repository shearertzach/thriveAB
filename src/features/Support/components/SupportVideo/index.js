import React from 'react'
import style from './SupportVideo.module.scss'

const SupportVideo = ({ video }) => (
  <div className={style['o-supportVideo']}>
    <video className={style['o-supportVideo__video']} controls>
      <source src={video} type='video/mp4' />
    </video>
  </div>
)


export default SupportVideo