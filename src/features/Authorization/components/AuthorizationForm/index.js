import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { userSignIn } from '../../redux/authorizationActions'
import { Button, Input } from '../../../../shared/components'
import style from './AuthorizationForm.module.scss'
import { PropTypes } from 'prop-types'

class AuthorizationForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleTextChange = (text, key) => {
    this.setState({ [key]: text.target.value })
  }

  render() {
    return (
      <div className={style['c-form']}>
        <div className={style['c-form__input']}>
          <div className={style['c-form__input__section']}>
            <p>Email:</p>
            <Input onChange={(text) => this.handleTextChange(text, 'email')} type='email' />
          </div>
          <div className={style['c-form__input__section']}>
            <p style={{ marginTop: '2rem' }}>Password:</p>
            <Input onChange={(text) => this.handleTextChange(text, 'password')} type='password' />
          </div>
          <p style={{ color: 'red', alignSelf: 'center' }}>{this.props.error}</p>
          <Button
            disabled={this.props.loggingIn}
            onClick={() => this.props.userSignIn(this.state.email, this.state.password)}
            title='Login'
          />
        </div>
      </div>
    )
  }
}

AuthorizationForm.propTypes = {
  error: PropTypes.string,
  loggingIn: PropTypes.bool,
  userSignIn: PropTypes.func
}

const mapStateToProps = ({ authorization }) => {
  const { meta } = authorization
  const { error, loggingIn } = meta
  return { error, loggingIn }
}

export default connect(mapStateToProps, { userSignIn })(AuthorizationForm)