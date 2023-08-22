const gallery = document.querySelector('.gallery');

export function serviceMarkup(pictures) {
  const pictureInfo = pictures[0].hits[0];
  console.log(pictureInfo);
  const markup = pictures
    .map(picture => {
      return `<div class="photo-card">
            <img src="${pictureInfo.webformatURL}" alt="${pictureInfo.tags}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes: ${pictureInfo.likes}</b>
              </p>
              <p class="info-item">
                <b>Views: ${pictureInfo.views}</b>
              </p>
              <p class="info-item">
                <b>Comments: ${pictureInfo.comments}</b>
              </p>
              <p class="info-item">
                <b>Downloads: ${pictureInfo.downloads}</b>
              </p>
            </div>
          </div>`;
    })
    .join('');
  gallery.innerHTML = markup;
}
