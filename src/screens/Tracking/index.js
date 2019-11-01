import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import style from './Tracking.module.scss'
import { SubHeader, InfoSection } from '../../shared/components'
import AuthorizationForm from '../../features/Authorization/components/AuthorizationForm'
import Survey from '../../features/Tracking/components/Survey'
import Graph from '../../features/Tracking/components/Graph'

class Tracking extends PureComponent {
  renderAuthorized = () => (
    <InfoSection extraStyle={style['o-tracker']}>
      <Survey />
      <Graph />
    </InfoSection>
  )

  renderUnAuthorized = () => (
    <InfoSection>
      <SubHeader
        title='Tracking'
        subtitle='Monitoring your health with a daily self-assessment utilizing the Edinburgh Postnatal Depression Scale.'
      />
      <AuthorizationForm />
    </InfoSection>
  )

  render() {
    const { loggedIn } = this.props
    if (loggedIn) {
      return this.renderAuthorized()
    } else return this.renderUnAuthorized()
  }
}

const mapStateToProps = ({ authorization }) => {
  const { loggedIn } = authorization
  return { loggedIn }
}

export default connect(mapStateToProps, null)(Tracking)