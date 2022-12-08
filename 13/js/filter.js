import {renderUserPhotos} from './pictures.js';
import {getRandomUniqueElements, debounce} from './util.js';


const RANDOM_QUANTITY = 10;
const filters = document.querySelector('.img-filters');
const defaultButton = document.querySelector('#filter-default');
const randomButton = document.querySelector('#filter-random');
const discussedButton = document.querySelector('#filter-discussed');


const compareComments = (photoFirst, photoSecond) => {
  const rankA = photoFirst.comments.length;
  const rankB = photoSecond.comments.length;
  return rankB - rankA;
};

const createDefaultFilter = (pictures) => pictures.slice();

const createRandomFilter = (pictures) => {
  const picturesArray = pictures.slice();
  return getRandomUniqueElements(picturesArray).slice(0, RANDOM_QUANTITY);
};

const createDiscussedFilter = (pictures) => {
  const picturesArray = pictures.slice();
  return picturesArray.sort(compareComments);
};

const removeActiveClass = () => {
  const activeButton = document.querySelector('.img-filters__button--active');
  activeButton.classList.remove('img-filters__button--active');
};

const clearPicturesContainer = () => {
  const picturesAll = document.querySelectorAll('.picture');
  picturesAll.forEach((picture) => {
    picture.remove();
  });
};

const renderPicturesFilter = (pictures) => {
  clearPicturesContainer();
  renderUserPhotos(pictures);
};

const showFilteredPictures = (photo) => {
  filters.classList.remove('img-filters--inactive');
  defaultButton.addEventListener('click', debounce((event) => {
    removeActiveClass();
    if (event.target === defaultButton) {
      defaultButton.classList.add('img-filters__button--active');
    }
    renderPicturesFilter(createDefaultFilter(photo));
  }));
  randomButton.addEventListener('click', debounce((event) => {
    removeActiveClass();
    if (event.target === randomButton) {
      randomButton.classList.add('img-filters__button--active');
    }
    renderPicturesFilter(createRandomFilter(photo));
  }));
  discussedButton.addEventListener('click', debounce((event) => {
    removeActiveClass();
    if (event.target === discussedButton) {
      discussedButton.classList.add('img-filters__button--active');
    }
    renderPicturesFilter(createDiscussedFilter(photo));
  }));
};

export {showFilteredPictures};
