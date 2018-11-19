import { h, Component } from 'preact';
import countdown from 'countdown';
import styles from './CountdownTimer.scss';

const MINUTE = 1000 * 60;

export default class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: this.getCountdownTime(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.updateCountdown, MINUTE)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateCountdown = () => {
    this.setState({
      countdown: this.getCountdownTime(),
    });
  };

  getCountdownTime = countdown.bind(
    null,
    null, // null counts as 'from now'
    new Date(this.props.date),
    countdown.MONTHS | countdown.DAYS | countdown.HOURS | countdown.MINUTES
  );

  render() {
    const { months, days, hours, minutes } = this.state.countdown;

    return (
      <div className={`${styles.wrapper} ${this.props.wrapperClassName}`}>
        <div className={styles.header}>TIME LEFT</div>
        <div className={styles.timeContainer}>
          <div className={styles.time}>{months}</div>
          <div className={styles.time}>{days}</div>
          <div className={styles.time}>{hours}</div>
          <div className={styles.time}>{minutes}</div>
        </div>
        <div className={styles.timeUnitsContainer}>
          <div className={styles.timeUnit}>MONTH</div>
          <div className={styles.timeUnit}>DAYS</div>
          <div className={styles.timeUnit}>HRS</div>
          <div className={styles.timeUnit}>MIN</div>
        </div>
      </div>
    )
  }
}