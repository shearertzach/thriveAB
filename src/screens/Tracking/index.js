import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import style from './Tracking.module.scss'
import { SubHeader, InfoSection } from '../../shared/components'
import AuthorizationForm from '../../features/Authorization/components/AuthorizationForm'
import Survey from '../../features/Tracking/components/Survey'
import Graph from '../../features/Tracking/components/Graph'
import { PropTypes } from 'prop-types'

class Tracking extends PureComponent {
  renderAuthorized = () => (
    <div>
      <InfoSection extraStyle={style['o-tracker']}>
        <Survey />
        <Graph />
      </InfoSection>
    </div>
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
    const { loggedIn, user } = this.props
    if (loggedIn) {
      console.log(user)
      return this.renderAuthorized()
    } else return this.renderUnAuthorized()
  }
}

Tracking.propTypes = {
  loggedIn: PropTypes.bool,
  user: PropTypes.object

}

const mapStateToProps = ({ authorization }) => {
  const { loggedIn } = authorization
  const { user } = authorization
  return { loggedIn, user }
}

export default connect(mapStateToProps, null)(Tracking)