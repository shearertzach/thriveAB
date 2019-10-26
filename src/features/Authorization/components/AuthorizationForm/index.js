import React, { PureComponent } from 'react'
import { Button } from '../../../../shared/components'
import style from './AuthorizationForm.module.scss'
import classnames from 'classnames'

class AuthorizationForm extends PureComponent {
  constructor(props) { 
    super(props)
    this.state = {
      flipping: false,
      flipped: false,
      username: '',
      password: ''
    }
  }

  renderFlippedForm = () => (
    <div className={style['c-form__input']}>
      <div className={style['c-form__input__form']}>
        <p>Username:</p>
        <input type='username' />
        <p>Password:</p>
        <input type='password' />
      </div>
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

export default AuthorizationForm