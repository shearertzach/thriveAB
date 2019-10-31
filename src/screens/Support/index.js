import React, { PureComponent } from 'react'
import style from './Support.module.scss'
import { SubHeader, InfoSection } from '../../shared/components'
import SupportVideo from '../../features/Support/components/SupportVideo'
import ContactForm from '../../features/Support/components/ContactForm'

class Support extends PureComponent {
  render() {
    return (
      <div>
        <InfoSection>
          <SubHeader
            title='Support'
            subtitle='Monitoring your health with a daily self-assessment utilizing the Edinburgh Postnatal Depression Scale.'
          />
          <SupportVideo video={require('../../shared/assets/Summer.mp4')} />
          <div className={style['c-duo-video-container']}>
            <div className={style['c-duo-video-container__box']}>
              <iframe className={style['c-duo-video-container__box__video']}
                src='https://www.youtube.com/embed/V64PqXKs02g'>
              </iframe>
            </div>
            <div className={style['c-duo-video-container__box']}>
              <iframe className={style['c-duo-video-container__box__video']}
                src='https://www.youtube.com/embed/e6iQp-JdjkU'>
              </iframe>
            </div>
          </div>
          <ContactForm />
        </InfoSection>
      </div>
    )
  }
}

export default Support