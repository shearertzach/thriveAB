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
            subtitle='Monitoring your health with a daily self-assessment utilizing the Edinburgh Postnatal Depression Scale.'
          />
          <SupportVideo />
        </InfoSection>
      </div>
    )
  }
}

export default Support