import { h, render } from 'preact';
import Countdown from './Countdown';

const insertWidgetComponent = (elementNode) => {
  render((<Countdown />), elementNode)
};
const widgetsRootElements = document.querySelectorAll('div[data-tkm-countdown-widget]');
widgetsRootElements.forEach(insertWidgetComponent);
