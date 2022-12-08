import {showAlert} from './util.js';
const getData = (isSuccess) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((answer) =>
      answer.json())
    .then((picture) => {
      isSuccess(picture);
    })
    .catch(() => {
      showAlert('Не удалось загрузить изображения с сервера');
    });
};

const sendData = (isSuccess, isFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((answer) => {
      if (answer.ok) {
        isSuccess();
      } else {
        isFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      isFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
