import { h, Component } from 'preact';
import styles from './Countdown.scss';
import CountdownTimer from './countdown-timer/CountdownTimer';

import tmLogo from 'assets/images/tm-black-pearl-logo.svg';

const THEME_CLASSES = {
  small: 'tkm-countdown-small-theme',
  large: 'tkm-countdown-large-theme',
};

export default class Countdown extends Component {
  componentDidMount() {
    console.log('hello');
  }

  render() {
    const themeModifier = THEME_CLASSES[this.props.theme] || '';

    return (
      <div className={`${styles.wrapper} ${themeModifier}`}>
        <div className={styles.gradient}>
          <CountdownTimer date="2018-11-20T01:15:00Z" wrapperClassName={styles.countdownWrapper}/>
          <div className={styles.eventName}>RUTGERS SCARLET KNIGHTS FOOTBALL AT PENN STATE NITTANY LION fdsf sdf sd fsdfs df sfds fsdfdsf daf dsf a dfa df adsf adf adsf asdf asdf sdfs f fsd fsdf sf sdS FOOTBAFDS FSD FDSF SD end</div>
          <div className={styles.eventDate}>Sat, Nov 30, 2019</div>
          <div className={styles.eventVenue}>Beaver StadiumCurtin Rd & Porter Rd</div>
          <div className={styles.buyActionContainer}>
            <a className={styles.buyButton} href="#">BUY NOW</a>
            <a className={styles.poweredByText} target="_blank" href="https://www.ticketmaster.com/">
              <span>Powered by</span>
              <img className={styles.tmLogo} src={tmLogo} alt="Ticketmaster logo"/>
            </a>
          </div>
          <a className={styles.legalNotice} target="_blank" href="http://developer.ticketmaster.com/support/terms-of-use/">Legal Notice</a>
        </div>
      </div>
    )
  }
}
