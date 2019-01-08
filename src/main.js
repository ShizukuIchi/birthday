import html from '../main.html';
import { listen, timeline, styler } from 'popmotion';

let isButtonsOn = [false, false, false, false, false];
let buttonListener;

export const setMain = () => {
  const main = document.querySelector('.main-scene');
  main.style.display = 'flex';
  main.innerHTML = html;
  const buttons = document.querySelector('.buttons');
  buttonListener = listen(buttons, 'click').start(buttonClickHandler);
  setHint();
};

function buttonClickHandler(e) {
  let id;
  try {
    id = e.target.closest('.button').id;
  } catch {
    return;
  }
  switch (id) {
    case 'button1':
      isButtonsOn[1] = !isButtonsOn[1];
      isButtonsOn[2] = !isButtonsOn[2];
      break;
    case 'button2':
      isButtonsOn[1] = !isButtonsOn[1];
      isButtonsOn[4] = !isButtonsOn[4];
      break;
    case 'button3':
      isButtonsOn[0] = !isButtonsOn[0];
      isButtonsOn[2] = !isButtonsOn[2];
      isButtonsOn[4] = !isButtonsOn[4];
      break;
    case 'button4':
      isButtonsOn[1] = !isButtonsOn[1];
      isButtonsOn[3] = !isButtonsOn[3];
      isButtonsOn[4] = !isButtonsOn[4];
      break;
    case 'button5':
      isButtonsOn[0] = !isButtonsOn[0];
      isButtonsOn[4] = !isButtonsOn[4];
      isButtonsOn[3] = !isButtonsOn[3];
      break;
    default:
      return;
  }
  const bulbs = document.querySelectorAll('.bulb');
  isButtonsOn.forEach((on, index) => {
    bulbs[index].style.opacity = on ? 1 : 0.1;
  });
  setLight();
}

function setLight() {
  const room = document.querySelector('.test');
  switch (isButtonsOn.filter(on => on).length) {
    case 5:
      room.style['-webkit-mask-image'] =
        'radial-gradient(circle at 50% 10%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,1) 100%)';
      const capoo = document.querySelector('.capoo');
      capoo.style['pointer-events'] = 'all';
      buttonListener.stop();
      capoo.querySelector('img').onclick = () =>
        alert('恭喜你成功惹，請用截圖換獎品XD');
      break;
    case 4:
      room.style['-webkit-mask-image'] =
        'radial-gradient(circle at 50% 10%, rgba(0,0,0,0.64) 0%, rgba(0,0,0,1) 36%)';
      break;
    case 3:
      room.style['-webkit-mask-image'] =
        'radial-gradient(circle at 50% 10%, rgba(0,0,0,0.72) 0%, rgba(0,0,0,1) 28%)';
      break;
    case 2:
      room.style['-webkit-mask-image'] =
        'radial-gradient(circle at 50% 10%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 20%)';
      break;
    case 1:
      room.style['-webkit-mask-image'] =
        'radial-gradient(circle at 50% 10%, rgba(0,0,0,0.88) 0%, rgba(0,0,0,1) 12%)';
      break;
    default:
      room.style['-webkit-mask-image'] =
        'radial-gradient(circle at 50% 10%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,1) 5%)';
  }
}

function setHint() {
  const hintStyler = styler(document.querySelector('.hint'));
  timeline([
    '600',
    [
      {
        track: 'skewX',
        from: '0deg',
        to: '-20deg',
        duration: 100,
      },
      {
        track: 'x',
        from: 0,
        to: -window.innerWidth,
        duration: 2000,
      },
    ],
    '-300',
    {
      track: 'skewX',
      from: '-20deg',
      to: '10deg',
      duration: 200,
    },
    {
      track: 'skewX',
      from: '10deg',
      to: '0deg',
      duration: 100,
    },
    '500',
    [
      {
        track: 'skewX',
        from: '0deg',
        to: '-20deg',
        duration: 500,
      },
      {
        track: 'x',
        from: -window.innerWidth,
        to: -window.innerWidth * 2,
        duration: 2000,
      },
    ],
  ]).start(hintStyler.set);
}
