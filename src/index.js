import {
  physics,
  spring,
  styler,
  value,
  listen,
  easing,
  tween,
} from 'popmotion';
import './style.scss';

const gift = document.querySelector('.gift img');
const shadow = document.querySelector('.shadow');

const shadowStyler = styler(shadow);
const shadowScale = value(1, v => shadowStyler.set('scale', v));

const giftStyler = styler(gift);
const giftY = value(0, v => giftStyler.set('y', Math.min(0, v)));
const giftScale = value(1, v => {
  giftStyler.set('scaleX', 1 + (1 - v));
  giftStyler.set('scaleY', v);
});
let isFalling = false;

const checkBounce = () => {
  // if (isFalling && giftY.get() > 0)
  if (!isFalling || giftY.get() < 0) return;

  isFalling = false;
  const impactVelocity = giftY.getVelocity();
  const compression = spring({
    to: 1,
    from: 1,
    velocity: -impactVelocity * 0.01,
    stiffness: 600,
  })
    .pipe(s => {
      // spring low to 1 first, when over 1 means it should bounce
      if (s >= 1) {
        s = 1;
        compression.stop();
      }
      return s;
    })
    .start(giftScale);
};

const changeShadow = v => {
  if (v > 0) return;
  if (v < -100) {
    v = -100;
  }
  const scale = 1 + v / 100;
  shadowScale.update(scale);
};

const gravity = physics({
  acceleration: 2000,
  restSpeed: false,
}).start(v => {
  changeShadow(v);
  giftY.update(v);
  checkBounce(v);
});

let interval;
interval = setInterval(() => {
  isFalling = true;
  gravity.set(0).setVelocity(-500);
}, 1600);

listen(gift, 'mouseenter').start(e => {
  clearInterval(interval);
  tween({
    from: giftStyler.get('scale'),
    to: { scale: 2 },
    duration: 500,
    ease: easing.backOut,
  }).start(giftStyler.set);
});
listen(gift, 'mouseleave').start(e => {
  tween({
    from: giftStyler.get('scale'),
    to: { scale: 1 },
    duration: 500,
    ease: easing.backOut,
  }).start(giftStyler.set);
  interval = setInterval(() => {
    isFalling = true;
    gravity.set(0).setVelocity(-500);
  }, 1600);
});

listen(gift, 'click').start(() => {
  import('./main.js').then(module => {
    module.setMain();
  });
  giftStyler.set('scale', 2);
  document.querySelector('.main-scene').style.animation = '2s circle forwards';
  setTimeout(() => {
    document.querySelector('.gift-scene').remove();
  }, 2000);
});
