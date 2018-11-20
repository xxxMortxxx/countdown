import { h, Component } from 'preact';
import styles from './Countdown.scss';
import CountdownTimer from './countdown-timer/CountdownTimer';

import tmLogo from 'src/assets/images/tm-black-pearl-logo.svg';

export default class Countdown extends Component {
  componentDidMount() {
    console.log('hello');
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.gradient}>
          <CountdownTimer date="2018-11-20T01:15:00Z" wrapperClassName={styles.countdownWrapper}/>
          <div className={styles.eventName}>RUTGERS SCARLET KNIGHTS FOOTBALL AT PENN STATE NITTANY LIONS FOOTBAFDS FSD FDSF SD</div>
          <div className={styles.eventDate}>Sat, Nov 30, 2019</div>
          <div className={styles.eventVenue}>Beaver StadiumCurtin Rd & Porter Rd</div>
          <div className={styles.buyActionContainer}>
            <a className={styles.buyButton} href="#">BUY NOW</a>
            <span className={styles.poweredByText}>Powered by</span>
            <img className={styles.tmLogo} src={tmLogo} alt="Ticketmaster logo"/>
          </div>
          <a className={styles.legalNotice} target="_blank" href="#">Legal Notice</a>
        </div>
      </div>
    )
  }
}