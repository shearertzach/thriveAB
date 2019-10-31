import React from 'react'
import style from './ContactForm.module.scss'

const ContactForm = () => (
  <div className={style['o-contactForm']}>
    <h1 className={style['o-contactForm__header']}>Contact Us!</h1>
    <div className={style['o-contactForm__form']}>
      <div className={style['o-contactForm__form__main']}>
        <textarea className={style['o-contactForm__form__main__nameField']} placeholder='Full Name' />
        <textarea className={style['o-contactForm__form__main__subjectField']} placeholder='Subject' />
        <textarea className={style['o-contactForm__form__main__emailField']} placeholder='Email' />
      </div>
      <textarea className={style['o-contactForm__form__bodyField']} placeholder='Write your message here.' />
    </div>
  </div>
)


export default ContactForm