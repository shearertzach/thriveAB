import React, { Component } from 'react'
import style from './Disclaimers.module.scss'

class Disclaimers extends Component {
  render() {
    return (
      <div className={style['c-disclaimers']}>
        <h1 className={style['c-disclaimers__header']}>Information Disclaimer</h1>
        <p className={style['c-disclaimers__info']}>Information on this Web site is only intended as general summary information that is made available to the public. It is not intended to provide specific medical advice or to take the place of either the written law or regulations.</p>
        <p className={style['c-disclaimers__info']}>Information resources are designed to help users better understand the health care system, health services research and medical effectiveness, and their own health and diagnosed conditions. Individuals are urged to consult with qualified health care providers for diagnosis and treatment and for answers to personal health care questions.</p>
        <h1 className={style['c-disclaimers__header']}>Liability Disclaimer</h1>
        <p className={style['c-disclaimers__info']}>Every effort has been made to ensure the accuracy and completeness of the documents and resources provided on this Web site. However, ThriveAB makes no warranties, expressed or implied, regarding errors or omissions and assumes no legal liability or responsibility for loss or damage resulting from the use of information contained within.</p>
        <p className={style['c-disclaimers__info']}>ThriveAB cannot endorse, or appear to endorse, derivative or excerpted materials, and it cannot be held liable for the content or use of adapted products that are incorporated on other Web sites. Any adaptations of these electronic documents and resources must include a disclaimer to this effect. Advertising or implied endorsement for any commercial products or services is strictly prohibited.</p>
        <h1 className={style['c-disclaimers__header']}>Endorsement Disclaimer</h1>
        <p className={style['c-disclaimers__info']}>Reference on this Web site to any specific commercial products, process, service, manufacturer, company, or trademark does not constitute its endorsement or recommendation by ThriveAB.  ThriveAB cannot endorse or appear to endorse any specific commercial products or services.</p>
        <p className={style['c-disclaimers__info']}>This Web app has links to other institutions and agencies, and in a few cases links to private organizations. The inclusion of external hyperlinks does not constitute endorsement or recommendation by ThriveAB of the linked Web resources or the information, products, or services contained therein. The Agency does not exercise any control over the content on these sites. You are subject to that site's privacy policy when you leave this site.</p>
        <p className={style['c-disclaimers__info']}>When visiting our Web app, your Web browser may produce pop-up advertisements. These advertisements were most likely produced by other Web sites you visited or by third-party software installed on your computer. ThriveAB does not endorse or recommend products or services for which you may view a pop-up advertisement on your computer screen while visiting our site.</p>
        <h1 className={style['c-disclaimers__header']}>Intrusion Detection Notice</h1>
        <p className={style['c-disclaimers__info']}>This site is sponsored by ThriveAB. The use of this server and its contents are monitored for computer security purposes. Any unauthorized access to the computer systems is prohibited and is subject to criminal and civil penalties under Federal laws.</p>
        <p className={style['c-disclaimers__info']}>For site security purposes and to ensure that this service remains available to all users, software programs are used to monitor traffic and identify unauthorized attempts to upload or change information, or otherwise cause damage.</p>
        <p className={style['c-disclaimers__info']}>In the event of authorized law enforcement investigations, and pursuant to any required legal process, information from these sources may be used to help identify an individual.</p>
      </div>
    )
  }
}

export default Disclaimers