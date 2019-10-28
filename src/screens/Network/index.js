import React, { PureComponent } from 'react'
import { InfoSection } from '../../shared/components'
import style from './Network.module.scss'
import Card from '../../features/Network/components/Card'
import { cardInfo } from '../../features/Network/constants/cardInfo'

class Network extends PureComponent {
  render() {
    return (
      <InfoSection>
        <div className={style['c-cardContainer']}>
          {
            cardInfo.map((card, index) => (
              <Card
                key={`${card.title}-${index}`}
                img={card.img}
                title={card.title}
                subtitle={card.subtitle}
                info1={card.info1}
                info2={card.info2}
                info3={card.info3}
                website={card.website}
              />
            ))
          }
        </div>
      </InfoSection>
    )
  }
}

export default Network