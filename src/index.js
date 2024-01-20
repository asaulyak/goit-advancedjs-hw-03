import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
// Описаний в документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import SlimSelect from 'slim-select';

function start() {
  fillBreeds();
}

function getElement(selector) {
  const element = document.querySelector(selector);

  if (!element) {
    throw new Error(`Element ${selector} select not found`);
  }

  return element;
}

function createSelect(data) {
  new SlimSelect({
    select: '.breed-select',
    data,
    events: {
      afterChange: ([breed]) => {
        fillCatInfo(breed.value);
      },
    },
  });
}

function getSelectElement() {
  return getElement('.select-wrapper');
}

function getLoaderElement() {
  return getElement('.loader');
}

function getInfoElement() {
  return getElement('.cat-info');
}

async function fillBreeds() {
  showLoader();
  showSelect(false);

  const breeds = await fetchBreeds().catch(() => {
    showError();
    showLoader(false);
  });

  createSelect(
    breeds.map(({ id, name }) => ({
      text: name,
      value: id,
    }))
  );

  showLoader(false);
  showSelect();
}

async function fillCatInfo(breedId) {
  showLoader();
  showInfo(false);

  const { url, name, description, temperament } = await fetchCatByBreed(
    breedId
  ).catch(() => {
    showError();
    showLoader(false);
  });

  const element = getInfoElement();

  element.innerHTML = `
          <img
            width="400"
            src="${url}"
            alt="${name}"
          />
          <div>
            <h1>${name}</h1>
            <p>
              ${description}
            </p>
            <h3>Temperament</h3>
            <p>${temperament}</p>
          </div>`;

  showLoader(false);
  showInfo();
}

function showElement(element, visible = true) {
  if (visible) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}

function showSelect(visible) {
  showElement(getSelectElement(), visible);
}

function showLoader(visible) {
  showElement(getLoaderElement(), visible);
}

function showError(
  message = 'Oops! Something went wrong! Try reloading the page!'
) {
  iziToast.show({
    message,
    color: 'red',
    position: 'topRight',
    timeout: false
  });
}

function showInfo(visible) {
  showElement(getInfoElement(), visible);
}

start();
