export function picturesSearch(inputValue, currentPage = '1') {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '38986631-ae11b42db00bd05f0f2571500',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 100,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
