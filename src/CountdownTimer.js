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
      <div className={styles.wrapper}>
        <div className={styles.header}>TIME LEFT</div>
        <div className={styles.timeContainer}>
          <div>{months}</div>
          <div>{days}</div>
          <div>{hours}</div>
          <div>{minutes}</div>
        </div>
        <div className={styles.timeUnitsContainer}>
          <div>MONTH</div>
          <div>DAYS</div>
          <div>HRS</div>
          <div>MIN</div>
        </div>
      </div>
    )
  }
}