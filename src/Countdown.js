import { h, Component } from 'preact';
import styles from './Countdown.scss';
import CountdownTimer from './CountdownTimer';

export default class Countdown extends Component {
  componentDidMount() {
    console.log('hello');
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <CountdownTimer date="2018-11-20T01:15:00Z"/>
        <div className={styles.eventName}>RUTGERS SCARLET KNIGHTS FOOTBALL AT PENN STATE NITTANY LIONS FOOTBAFDS FSD FDSF SD</div>
        <div cl>Sat, Nov 30, 2019</div>
        <div>Beaver StadiumCurtin Rd & Porter Rd</div>
        <div className={styles.buyActionContainer}>
          <a className={`${styles.buyButton}`} href="#">BUY NOW</a>
          Powered by ticketmaster
        </div>
        <a className={styles.legalNotice} href="#">Legal Notice</a>
      </div>
    )
  }
}