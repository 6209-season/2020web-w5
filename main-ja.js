const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '今日の気温は華氏35度で、外は雪が降っていた。:insertx:は、散歩した。:inserty:まで歩いた。そこは、:insertz:。体重120ポンドの:insertx:はとても楽しんだ、またボブも楽しい時間を過ごした。その日は、良い１日でした。';
let insertX = ['梅子さん','小平さん','鷹の台さん'];
let insertY = ['公園','友達の家','ショッピングモール'];
let insertZ = ['混んでいた','静かだった','賑やかだった'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ',name);
  }

  if(document.getElementById("ja").checked) {
    const weight = Math.round(120/2.2046226) + ' kg';
    const temperature =  '摂氏'+Math.round((35-32) * 5 / 9) + '度';
    newStory = newStory.replace('華氏35度',temperature);
    newStory = newStory.replace('120ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
