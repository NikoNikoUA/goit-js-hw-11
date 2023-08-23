export default class serviceAPI {
  constructor() {
    this.inputValue = '';
    this.params.page = 1;
  }

  picturesSearch(inputValue) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
      key: '38986631-ae11b42db00bd05f0f2571500',
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: 1,
      per_page: 40,
    });

    return fetch(`${BASE_URL}?${params}`).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json().then(data => {
        this.increasePageNumber();
      });
    });
  }
  increasePageNumber() {
    this.params.page += 1; - вішаємо на кнопку показати ще 
  }

  resetPage() {
    this.params.page = 1; - вішаємо на кнопку пошуку
  }

  get inputValue() {
    return this.InputValue;
  }

  set inputValue(newValue) {
    return (this.inputValue = newValue);
  }
}
