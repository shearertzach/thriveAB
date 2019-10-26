import React, { PureComponent } from 'react'
import style from './Tracking.module.scss'
import { SubHeader, InfoSection } from '../../shared/components'

class Tracking extends PureComponent {
  render() {
    return (
      <InfoSection>
        <SubHeader
          title='Tracking'
          subtitle='Monitoring your health with a daily self-assessment utilizing the Edinburgh Postnatal Depression Scale.'
        />
      </InfoSection>
    )
  }
}

export default Tracking