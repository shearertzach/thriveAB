import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import style from './Tracking.module.scss'
import { SubHeader, InfoSection } from '../../shared/components'
import AuthorizationForm from '../../features/Authorization/components/AuthorizationForm'
import Survey from '../../features/Tracking/components/Survey'
import Graph from '../../features/Tracking/components/Graph'
import { PropTypes } from 'prop-types'

class Tracking extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'survey'
    }
  }

  handleTabSwitch = (tabName) => {
    this.setState({ selectedTab: tabName })
    console.log(tabName)
  }

  renderAuthorized = () => (
    <div>
      <InfoSection extraStyle={style['o-tracker']}>
        <div className={style['o-tracker__tabContainer']}>
          <button onClick={() => this.handleTabSwitch('survey')}>Survey</button>
          <button onClick={() => this.handleTabSwitch('results')}>Results</button>
        </div>
        {this.state.selectedTab === 'survey' ? <Survey /> : null}
        {this.state.selectedTab === 'results' ? <Graph /> : null}
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