const getRandom = function (min, max){
  if (min > 0 && max > min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  throw new Error('Неправильный диапазон');
};
getRandom(1, 4);
