import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const refs = {
    formEl: document.querySelector('.js-search-form'),
    imgEl: document.querySelector('.js-image-container'),
    loaderEl: document.querySelector('.loader'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const query = e.target.elements.text.value.trim();

    if (!query) {
        iziToast.error({
            position: "topRight",
            message: 'Please enter a search query!',
        });
        return;
    }

    // toggleLoader(true);

    getImg(query)
        .then(data => {
            renderImg(data);
            // toggleLoader(false);

            if (data.hits.length === 0) {
                iziToast.error({
                    position: "topRight",
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
            e.target.elements.text.value = '';
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            // toggleLoader(false);
            iziToast.error({
                position: "topRight",
                message: 'Failed to fetch images. Please try again later.',
            });
        });
        
}

function getImg(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '42295751-6e09ed05d50a99192d667c3e9';

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    const url = `${BASE_URL}?${params.toString()}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

function imgTemplate(photo) {
    
    return `
        <a href="${photo.largeImageURL}" class="photo-container" data-lightbox="photos">
            <img
                src="${photo.webformatURL}"
                alt="${photo.tags}"
                class="photo"
            />
            <div class="photo-body">
                <p class="photo-name">Likes ${photo.likes}</p>
                <p class="photo-name">Views ${photo.views}</p>
                <p class="photo-name">Comments ${photo.comments}</p>
                <p class="photo-name">Downloads ${photo.downloads}</p>
            </div>
        </a>
    `;
}

function renderImg(data) {
    refs.imgEl.innerHTML = data.hits.map(img => imgTemplate(img)).join('');
    const lightbox = new SimpleLightbox('[data-lightbox="photos"]');
    
    lightbox.refresh();
}

// function toggleLoader(isVisible) {
//     refs.loaderEl.style.display = isVisible ? 'inline-block' : 'none';
// }
