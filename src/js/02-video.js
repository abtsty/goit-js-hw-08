import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = evt => {
  const sData = JSON.stringify(evt);

  localStorage.setItem('videoplayer-current-time', sData);
};

const timeSaver = () => {
  const savedDataTime = localStorage.getItem('videoplayer-current-time');
  const pData = JSON.parse(savedDataTime) ?? {};

  if (savedDataTime) {
    player.setCurrentTime(pData.seconds);
  }
};

timeSaver();
player.on('timeupdate', throttle(currentTime, 1000));
