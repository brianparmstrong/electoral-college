import { createRoot } from 'react-dom/client';
import './style.scss';
import ElectoralCollege from './ElectoralCollege';
// import * as serviceWorker from './serviceWorker';

const checkForStickyEVCounter = () => {
  const candidatesEVCounter = document.querySelector('.candidatesWrapper');
  const candidatesEVCounterOffsetTop = candidatesEVCounter.offsetTop;

  if (window.pageYOffset > candidatesEVCounterOffsetTop) {
    candidatesEVCounter.classList.add('sticky');
  } else {
    candidatesEVCounter.classList.remove('sticky');
  }
};

window.onscroll = () => checkForStickyEVCounter();

const root = createRoot(document.getElementById('root'));

root.render(<ElectoralCollege />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
