import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { userSignIn } from '../../redux/authorizationActions'
import { Button, Input } from '../../../../shared/components'
import style from './AuthorizationForm.module.scss'
import classnames from 'classnames'

class AuthorizationForm extends PureComponent {
  constructor(props) { 
    super(props)
    this.state = {
      flipping: false,
      flipped: false,
      email: '',
      password: ''
    }
  }

  handleTextChange = (text, key) => {
    this.setState({ [key]: text.target.value })
  }

  renderFlippedForm = () => (
    <div className={style['c-form__input']}>
      <div className={style['c-form__input__section']}>
        <p>Email:</p>
        <Input onChange={(text) => this.handleTextChange(text, 'email') } type='email' />
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
  )

    handleAnimationEnd = (e) => {
      if (e.animationName.includes("flipImage")) this.setState({ flipped: true })
    }

  renderPicture = () => (
    <>
      <img
        onAnimationEnd={this.handleAnimationEnd}
        src={require('../../../../shared/assets/bar.png')}
        className={classnames(style['c-form__img'],
          { [style['c-form__img--flipping']]: this.state.flipping })}
      />
      { !this.state.flipped
        ? (
          <Button
            extraStyle={style['c-form__button']}
            onClick={() => this.setState({ flipping: true })}
            title='Log In'
          />
        ) : null}
    </>
  )

  render() {
    const { flipped } = this.state
    return (
      <div className={style['c-form']}>
        { flipped ? this.renderFlippedForm() : this.renderPicture() }
      </div>
    )
  }
}

const mapStateToProps = ({ authorization }) => {
  const { meta } = authorization
  const { error, loggingIn } = meta
  return { error, loggingIn }
}

export default connect(mapStateToProps, { userSignIn })(AuthorizationForm)