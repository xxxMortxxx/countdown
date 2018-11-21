import { h, render } from 'preact';
import Countdown from './components/countdown/Countdown';
import './index.scss';

const insertWidgetComponent = (elementNode) => {
  render((<Countdown theme=""/>), elementNode)
};
const widgetsRootElements = document.querySelectorAll('div[data-tkm-countdown-widget]');
widgetsRootElements.forEach(insertWidgetComponent);
