import {isEscapeKey} from './util.js';

const MAX_COMMENTS_SHOW = 5;
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentLoader = bigPicture.querySelector('.comments-loader');
const commentContainer = bigPicture.querySelector('.social__comments');
const commentsToShowCount = bigPicture.querySelector('.social__comment-count');
const body = document.querySelector('body');
let count = 0;

const createCommentItem = (feedback) => {
  const newCommentItem = document.createElement('li');
  newCommentItem.classList.add('social__comment');
  const commentImage = document.createElement('img');
  commentImage.classList.add('social__picture');
  commentImage.src = feedback.avatar;
  commentImage.alt = feedback.name;
  commentImage.width = 35;
  commentImage.height = 35;
  newCommentItem.appendChild(commentImage);

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = feedback.message;
  newCommentItem.appendChild(commentText);
  return newCommentItem;
};

const showBigPicture = (picture) => {

  const popupEscKeydown = (event) => {
    if (isEscapeKey(event)) {
      event.preventDefault();
      closeBigPicture();
    }
  };

  const popupCloseButtonClick = () => {
    closeBigPicture();
  };

  function closeBigPicture() {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', popupEscKeydown);
    document.removeEventListener('click', popupCloseButtonClick);
    commentLoader.removeEventListener('click', commentsLoaderOnClick);
    count = 0;
  }

  function commentsLoaderOnClick() {
    // изменяем значение count прибавляя 5, следовательно slice станет (5, 10), отрисуется еще 5 штук
    count += MAX_COMMENTS_SHOW;
    renderCommentsSlice();
  }

  function renderCommentsSlice() {
    commentContainer.innerHTML = '';
    const commentsFragment = document.createDocumentFragment();
    // создаем срез комментов, будет показываться 5 штук, при клике count перезапишется
    const commentsToShow = picture.comments.slice(0, count + MAX_COMMENTS_SHOW);
    commentsToShow.forEach((comment) => {
      commentsFragment.appendChild(createCommentItem(comment));
    });
    commentContainer.appendChild(commentsFragment);
    commentLoader.classList.toggle('hidden', picture.comments.length === commentsToShow.length);
    commentsToShowCount.innerHTML = `${commentsToShow.length} из <span class="comments-count">${picture.comments.length}</span> комментариев`;
  }

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  renderCommentsSlice();
  commentLoader.addEventListener('click', commentsLoaderOnClick);

  closeButton.addEventListener('click', popupCloseButtonClick);
  document.addEventListener('keydown', popupEscKeydown);
};

export {showBigPicture};
