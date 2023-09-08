import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const currentTime = localStorage.getItem('currentTime');

if (currentTime !== undefined) {
    player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(getCurrentVideoTime, 1000));

function getCurrentVideoTime(data) {
    localStorage.setItem('currentTime', data.seconds);
}

