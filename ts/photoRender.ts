const pictureComments = document.createElement('span')
pictureComments.textContent = '123'
pictureComments.classList.add('picture__comments')

const pictureLikes = document.createElement('span')
pictureLikes.textContent = '34556'
pictureLikes.classList.add('picture__likes')

const pictureInfo = document.createElement('p')
pictureInfo.classList.add('picture__info')

const pictureImg = document.createElement('img')
pictureImg.classList.add('picture__img')
pictureImg.src = 'photos/1.jpg'
pictureImg.width = 182
pictureImg.height = 182
pictureImg.alt = 'Случайная фотография'

const pictureAnchor = document.createElement('a')
pictureAnchor.classList.add('picture')
pictureAnchor.href = '#'

const picture = document.createElement('div')
picture.id = 'picture'

pictureInfo.appendChild(pictureComments)
pictureInfo.appendChild(pictureLikes)

pictureAnchor.appendChild(pictureImg)
pictureAnchor.appendChild(pictureInfo)

picture.appendChild(pictureAnchor)

const picturesContainer = document.querySelector('.pictures.container')
picturesContainer?.appendChild(picture)

