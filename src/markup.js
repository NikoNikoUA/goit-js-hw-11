const gallery = document.querySelector('.gallery');

export function serviceMarkup(pictures) {
  const markup = pictures.hits
    .map(picture => {
      return ` 
           <div class="photo-card">
            <a class="gallery-link link" href="${picture.largeImageURL}">
                <img src="${picture.webformatURL}" alt="${picture.tags}" width="300" height="200" loading="lazy" />
            </a>
            <div class="info">
              <p class="info-item">
                <b>Likes: ${picture.likes}</b>
              </p>
              <p class="info-item">
                <b>Views: ${picture.views}</b>
              </p>
              <p class="info-item">
                <b>Comments: ${picture.comments}</b>
              </p>
              <p class="info-item">
                <b>Downloads: ${picture.downloads}</b>
              </p>
            </div>
            </div>
          `;
    })
    .join('');
  return markup;
}
