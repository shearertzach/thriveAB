import React, { PureComponent } from 'react'
import style from './Support.module.scss'
import { SubHeader, InfoSection } from '../../shared/components'
import SupportVideo from '../../features/Support/components/SupportVideo'

class Support extends PureComponent {
  render() {
    return (
      <div>
        <InfoSection>
          <SubHeader
            title='Support'
            subtitle='Reach Out and Discover Helpful Solutions.'
          />
          <SupportVideo video={require('../../shared/assets/Summer.mp4')} />
          <div className={style['c-duo-video-container']}>
            <div className={style['c-duo-video-container__box']}>
              <iframe className={style['c-duo-video-container__box__video']}
                src='https://www.youtube.com/embed/V64PqXKs02g'
                title='video1'>
              </iframe>
            </div>
            <div className={style['c-duo-video-container__box']}>
              <iframe className={style['c-duo-video-container__box__video']}
                src='https://www.youtube.com/embed/e6iQp-JdjkU'
                title='video1'>
              </iframe>
            </div>
          </div>
        </InfoSection>
      </div>
    )
  }
}

export default Support