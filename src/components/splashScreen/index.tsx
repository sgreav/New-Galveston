import * as React from 'react'

import './splashScreen.scss'

export default class SplashScreen extends React.Component {
    renderTitle = () => <h1>New Galveston</h1>
    renderSubtitle = () => <h2>Visit Fabulous</h2>
    
    renderDesert = () => <div className='background desert'> </div>
    renderSky = () => <div className='background sky'> </div>
    renderSun = () => <div className='sun'></div>

    renderCactus = () => {
      return(
        <div className='cactus-container'>
          <div className='cactus stalk'/>
          <div className='cactus arm'/>
          <div className='cactus branch'/>
          <div className='cactus arm right'/>
          <div className='cactus branch right'/>
        </div>
      )
    }

    render = () => (
        <div className='splashScreen-container'>
          <div className='splashScreen-title'>
            { this.renderSubtitle() }
            { this.renderTitle() }
          </div>
            { this.renderSky() }
            <div className='splashScreen-items'>
              { this.renderSun() }
              { this.renderCactus() }
            </div>
            { this.renderDesert() }
        </div>
    )
}