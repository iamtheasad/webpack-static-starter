import generateJoke from './generateJoke';
import './styles/main.scss';
import facebook from './assets/fb.svg';

const social = document.getElementById('imageId');
social.src = facebook;

console.log(generateJoke());
