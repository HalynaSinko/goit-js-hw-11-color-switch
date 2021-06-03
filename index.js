import { colors } from './colors.js';

const refs = {
  srart: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
  body: document.body,
};

let intervalColorSwitchId = null;

refs.srart.addEventListener('click', onStartClick);

//При нажатии на кнопку Старт:
//  - кнопка Старт стает не активной;
//  - меняем бекграунд боди на рандомный в первую секунду;
//  - запускаем интервал для рандомного изменения бекграунда боди каждую последующею секунду;
//  - на кнопку Стоп добавляем слушателя событий;
//  - c кнопки Старт снимаем слушателя сбытий.

//При нажатии на Стоп :
//  - останавливается интервал изменения бекграунда;
//  - кнопка Старт стает активной;
//  - на кнопку Старт добавляем слушателя сбытий;
//  - с кнопки Стоп удаляем слушателя событий;

function onStartClick(e) {
  refs.srart.disabled = true;
  
  colorSwitch();
 
  intervalColorSwitchId = setInterval(colorSwitch, 1000);
  // console.log(colorSwitchId);
  refs.stop.addEventListener('click', onStopClick);
  refs.start.removeEventListener('click', onStartClick);
}

function onStopClick() {
  refs.srart.disabled = false;
  // console.log('Клик на кнопку Стоп'); 
  clearInterval(intervalColorSwitchId);

  refs.start.addEventListener('click', onStartClick);
  refs.stop.removeEventListener('click', onStopClick);  
}

function colorSwitch() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
  // console.log(colors[randomIntegerFromInterval(0, colors.length - 1)]);
};

// функция для генерации случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
