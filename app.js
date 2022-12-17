const splashScreen = document.getElementById('splash-screen');

window.onload = function() {
    splashScreen.classList.add('inactive')

    function removeLoadingScreen() {
        splashScreen.remove()
    }

    setTimeout(removeLoadingScreen, 1500)
}

import { propertyListings } from "./property-listings.js";

const contentContainer = document.querySelector(".content-container");

function ready() {
    function renderProperties(property) {
        let html = ''

        property.forEach((house) => {
        html = html + `

        <div class='house-card'>
            <div class='image-container'>
                <div class="bookmark-icon">
                    <i class="bi-suit-heart-fill bookmark"></i>
                </div>
                <img src=${house.image} alt="" />
            </div>

            <div class='text-container'>
                <div class='house-details'>
                    <h3 title="${house.address}" class="address">${house.address}</h3>
    
                    <div class="icon-container">
                        <p class="type"><i class="bi bi-house"></i>${house.type}</p>
                        <p class="bedrooms"><img class="icon" src="icons/icons8-bedroom-96.png" alt="">${house.bedrooms}</p>
                        <p class="bathrooms"><img class="icon" src="icons/icons8-bath-100.png" alt="">${house.bathrooms}</p>
                    </div>

                    <div class="home-status">
                        <div class="new-home">${house.newHome}</div>
                        <div class="recently-added">${house.recentlyAdded}</div>
                    </div>
                </div>

                <div class="description">
                    <h2>Description</h2>
                    <p>${house.description}</p>
                </div>

                <div class="button-container">
                    <h2 class="price">£${house.price}</h2>                    
                    <button class="view-property">
                        <p>View Property</p>
                    </button>
                </div>
            </div>
        </div>
        `

        })
    contentContainer.insertAdjacentHTML('beforeend', html)

    }

renderProperties(propertyListings)

// Filter Lists for Quick Searches

const recentlyAdded = propertyListings.filter((item) => {
    return item.recentlyAdded === 'Recently Added';
})

const newHomes = propertyListings.filter((item) => {
    return item.newHome === 'New Home';
})

const apartments = propertyListings.filter((item) => {
    return item.type === 'Apartment'
})

const twoBedHouses = propertyListings.filter((item) => {
    return item.bedrooms === 2;
})

const threeBedHouses = propertyListings.filter((item) => {
    return item.bedrooms === 3;
})

const fourBedroomsPlus = propertyListings.filter((item) => {
    return item.bedrooms > 3;
})

function toggleOptions(list) {
    contentContainer.innerHTML = ''
    renderProperties(list)
    addBookMark()
    sortByPrice()
    sortByBedrooms()
    sortByBathrooms()
    renderDetailedView()
}

const toggleLists = [propertyListings, recentlyAdded, newHomes, apartments, twoBedHouses, threeBedHouses, fourBedroomsPlus]
const toggleMenuSearchButtons = document.querySelectorAll('ul.toggle-searches li')

for (let i = 0; i < toggleMenuSearchButtons.length; i++) {
    toggleMenuSearchButtons[i].addEventListener('click', function() {
        toggleOptions(toggleLists[i]);
    })
}

const belowMarketButton = document.querySelector('.below-market-value')

belowMarketButton.addEventListener('click', function() {
    let total = 0;

    for (let i = 0; i < houseCards.length; i++ ) {
        total += parseFloat(houseCards[i].lastElementChild.lastElementChild.
        querySelector('h2').innerText.replace(/£/g, ''));
    }

    let totalProperties = houseCards.length;
    let averagePrice = (total/totalProperties);

    for (let i = 0; i < houseCards.length; i++ ) {
        let houses = houseCards[i].lastElementChild.lastElementChild.
        querySelector('h2').innerText.replace(/£/g, '');

        if (houses <= averagePrice) {
            houseCards[i].classList.remove('hidden')
        } else {
            houseCards[i].classList.add('hidden')
        }
    }
});

sortByBedrooms()
sortByPrice()
sortByBathrooms()
}

ready()

// sort price ascending and descending

const sortingOptionsToggleDisplay = document.querySelector('.sorting-options-toggle');
const sortingOpttionsContainer = document.querySelector('.sorting-options');
const sortingOptionsToggleIcon = document.querySelector('.sorting-options-toggle i');

sortingOptionsToggleDisplay.addEventListener('click', ()=> {
    sortingOpttionsContainer.classList.toggle('hidden');
    sortingOptionsToggleIcon.classList.toggle('active');
})

function sortByAscending(element) {
    Array.from(houseCards).sort(function(a, b) {
        a = parseInt(a.querySelector(element).innerText.replace(/£/g, ''));
        b = parseInt(b.querySelector(element).innerText.replace(/£/g, ''));
        return (a > b) - (a < b)
    }).forEach(function(n, i) {
        n.style.order = i;
    });
}

function sortByDescending(element) {
    Array.from(houseCards).sort(function(a, b) {
        a = parseInt(a.querySelector(element).innerText.replace(/£/g, ''));
        b = parseInt(b.querySelector(element).innerText.replace(/£/g, ''));
        return (a < b) - (a > b)
    }).forEach(function(n, i) {
        n.style.order = i;
    });
}

function sortByPrice() {
    const sortPriceAscending = document.querySelector('.sort-by-price.ascending');
    const sortPriceDescending = document.querySelector('.sort-by-price.descending');

    sortPriceAscending.addEventListener('click', ()=> {
        sortByAscending('.price')})
    sortPriceDescending.addEventListener('click', ()=> {
        sortByDescending('.price')})
}

function sortByBedrooms() {
    const sortBedroomsAscending = document.querySelector('.sort-by-bedrooms.ascending');
    const sortBedroomsDescending = document.querySelector('.sort-by-bedrooms.descending');

    sortBedroomsAscending.addEventListener('click', ()=> {
        sortByAscending('.bedrooms')})
    sortBedroomsDescending.addEventListener('click', ()=> {
        sortByDescending('.bedrooms')})
}

function sortByBathrooms() {
    const sortBathroomsAscending = document.querySelector('.sort-by-bathrooms.ascending');
    const sortBathroomsDescending = document.querySelector('.sort-by-bathrooms.descending');

    sortBathroomsAscending.addEventListener('click', ()=> {
        sortByAscending('.bathrooms')})
    sortBathroomsDescending.addEventListener('click', ()=> {
        sortByDescending('.bathrooms')})
    }

// Price slider code

const priceSlider = document.getElementById('slider')
const sliderValue = document.querySelector('#slider-value')
const houseCards = contentContainer.children;
sliderValue.innerHTML = priceSlider.value;

priceSlider.oninput = function() {
    let value = (this.value - this.min)/(this.max - this.min)*100;
    priceSlider.style.background = 'linear-gradient(to right, #1a1a1a 0%, #1a1a1a ' + value + '%, #9b9b9b ' + value + '%, #9b9b9b 100%)';

    sliderValue.innerHTML = Math.round((this.value/1000))*1000;
    const sliderPrice = parseInt(sliderValue.innerHTML)

    for (let i = 0; i < houseCards.length; i++) {
        const housePrice = houseCards[i].lastElementChild.lastElementChild.querySelector('h2')
        .innerText.replace(/£/g, '');
        const price = parseInt(housePrice)

        if (price > sliderPrice) {
            houseCards[i].classList.add('hidden')
        } else {
            houseCards[i].classList.remove('hidden')
        }
    }
}

// Bookmark Code

const bookmark = document.getElementsByClassName('bookmark-icon');
const savedPropertiesContainer = document.querySelector('.saved-property-list');
const bookmarkEmptyMessage = document.querySelector('.panel-top p');
const bookmarkCount = document.getElementById('bookmark-count');

function checkBookMarkIsEmpty() {
    if ( localStorage.getItem('saved-properties') !== '0' && localStorage.getItem('saved-properties') !== null) {
        bookmarkCount.style.backgroundColor = '#f93c3c';
        bookmarkEmptyMessage.classList.add('hidden');
    } else {
        bookmarkCount.style.backgroundColor = '#969696'
        bookmarkEmptyMessage.classList.remove('hidden');
    }
}

function addBookMark() {

for (let i = 0; i < bookmark.length; i++ ) {
    bookmark[i].addEventListener('click', () => {

        const image = houseCards[i].firstElementChild.querySelector('img').src;
        const address = houseCards[i].querySelector('h3').innerText;
        const price = parseInt(houseCards[i].querySelector('h2.price').innerText.replace(/£/g, ''));
        const bedrooms = houseCards[i].querySelector('p.bedrooms').innerText;
        const bathrooms = houseCards[i].querySelector('p.bathrooms').innerText;
        const houseType = houseCards[i].querySelector('p.type').innerText;
        const description = houseCards[i].querySelector('.description').querySelector('p').innerText;
        const newHome = houseCards[i].querySelector('.new-home').innerText;
        const recentlyAdded = houseCards[i].querySelector('.recently-added').innerText;

        savedPropertiesContainer.innerHTML += `

            <div class="bookmark-card">
                <div class="image">
                    <div class="remove-bookmark-button">
                        <i class="bi bi-trash bookmark"></i>
                    </div>
                    <img src="${image}" alt="">
                </div>

                <div class="details">
                    <h3 class="address">${address}</h3>

                    <div class="icon-container">
                        <p class="type"><i class="bi bi-house"></i>${houseType}</p>
                        <p class="bedrooms"><img class="icon" src="icons/icons8-bedroom-96.png" alt="">${bedrooms}</p>
                        <p class="bathrooms"><img class="icon" src="icons/icons8-bath-100.png" alt="">${bathrooms}</p>
                    </div>

                    <div class="home-status">
                        <div class="new-home">${newHome}</div>
                        <div class="recently-added">${recentlyAdded}</div>
                    </div>

                    <div class="description">${description}</div>

                    <div class="button-container">
                        <h2 class="price">£${price}</h2>                    
                        <button class="view-property">
                            <p>View Property</p>
                        </button>
                    </div>
                </div>
            </div>
        `;

        checkBookMarkIsEmpty()
        savePropertyListings()
        renderDetailedViewFromBookmarks()
    });
}}

function savePropertyListings() {
    localStorage.setItem('property-listings', savedPropertiesContainer.innerHTML);
    let bookmarksCount = savedPropertiesContainer.children.length;
    localStorage.setItem('saved-properties', bookmarksCount);
    let count = localStorage.getItem('saved-properties');
    bookmarkCount.innerText = count;
    checkBookMarkIsEmpty()
    removeBookmark()
}

function renderSavedProperties() {
    let bookmarks = localStorage.getItem('property-listings');
    let count = localStorage.getItem('saved-properties');

    if (count == null && bookmarks == null) {
        savedPropertiesContainer.innerHTML = ''
        bookmarkCount.innerText = '0';
    } else {
        savedPropertiesContainer.insertAdjacentHTML('afterbegin', bookmarks);
        bookmarkCount.innerText = count;
    }

    checkBookMarkIsEmpty()
    removeBookmark()
}

function removeBookmark() {
    const bookmarkedProperties = savedPropertiesContainer.children;
    for (let i = 0; i < bookmarkedProperties.length; i++ ) {
        bookmarkedProperties[i].querySelector('.remove-bookmark-button').addEventListener('click', deleteBookmark);
    }
}

function deleteBookmark(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove()
    savePropertyListings()
    checkBookMarkIsEmpty()
}

renderSavedProperties()
addBookMark()
renderDetailedViewFromBookmarks()

// Bookmarks Panel Code

const dimBackground = document.querySelector('.dim-background')
const bookmarksPanel = document.querySelector('.bookmarks-panel');
const showBookmarksPanelButton = document.querySelector('li.show-bookmarks');
const hideBookmarksPanelButton = document.querySelector('i.bi.bi-x-circle')

showBookmarksPanelButton.addEventListener('click', () => {
    bookmarksPanel.classList.add('visible');
    dimBackground.classList.add('visible');
});

function hideBookmarksPanel() {
    bookmarksPanel.classList.remove('visible');
    dimBackground.classList.remove('visible');
}

document.addEventListener('keydown', function(event) {
    if (event.key == 'Escape') {
        hideBookmarksPanel()
    }
})

dimBackground.addEventListener('click', () => {
    hideBookmarksPanel()
})

hideBookmarksPanelButton.addEventListener('click', hideBookmarksPanel);

// Toggle Card View Code

const toggleView = document.querySelector('.grid-view')
const text = toggleView.querySelector('span')
const toggleIcon = toggleView.firstChild;

function toggleCardView() {
    for (let i = 0; i < houseCards.length; i++) {
        if (houseCards[i].classList.contains('list')) {
            houseCards[i].classList.remove('list')
        } else {
            houseCards[i].classList.add('list')
        }
    }

    if (toggleIcon.classList.contains('bi-grid')) {
        toggleIcon.classList.remove('bi-grid')
        toggleIcon.classList.add('bi-list-ul')
        text.innerText = 'List'
    } else {
        toggleIcon.classList.remove('bi-list-ul')
        toggleIcon.classList.add('bi-grid')
        text.innerText = 'Grid'
    }
}

toggleView.addEventListener('click', toggleCardView);

// Dark Mode Code

const darkModeToggle = document.querySelector('li.toggle-lighting-mode');
const toggleThemeButtonIcon = darkModeToggle.firstElementChild;
const toggleThemeButtonText = darkModeToggle.querySelector('p');
let pageTheme = document.getElementById('theme-link')

darkModeToggle.addEventListener('click', toggleTheme)

function toggleTheme() {
    if (pageTheme.getAttribute('href') == 'styles-light.css') {
        setDarkTheme()
    } else {
        setLightTheme()
    }
}

function setDarkTheme() {
    pageTheme.href = 'styles-dark.css';
    localStorage.setItem('theme', 'styles-dark.css')
    toggleThemeButtonIcon.classList.remove('bi-moon')
    toggleThemeButtonIcon.classList.add('bi-sun')
    toggleThemeButtonText.innerText = 'Toggle Light Mode'
}

function setLightTheme() {
    pageTheme.href = 'styles-light.css';
    localStorage.setItem('theme', 'styles-light.css')
    toggleThemeButtonIcon.classList.remove('bi-sun')
    toggleThemeButtonIcon.classList.add('bi-moon')
    toggleThemeButtonText.innerText = 'Toggle Dark Mode'
}

if (localStorage.getItem('theme') == 'styles-dark.css') {
    setDarkTheme()
} else {
    setLightTheme()
}

// Mobile Side Panel

const toggleSidePanelMobile = document.querySelector('.toggle-menu');
const sidePanel = document.querySelector('.side-panel');
const sidePanelCloseMobile = document.querySelector('.side-panel-top i');

toggleSidePanelMobile.addEventListener('click', () => {
    sidePanel.classList.toggle('active')
    if (!sortingOpttionsContainer.classList.contains('hidden')) {
        sortingOpttionsContainer.classList.add('hidden')
        sortingOptionsToggleIcon.classList.remove('active')
    }
})

sidePanelCloseMobile.addEventListener('click', () => {
    sidePanel.classList.remove('active')
})

const sidePanelActiveButtons = sidePanel.getElementsByTagName('li')

for (let i = 0; i < sidePanelActiveButtons.length; i++) {
    sidePanelActiveButtons[i].addEventListener('click', () => {
        if (sidePanelActiveButtons[i].classList.contains('toggle-search')) {
            sidePanel.classList.remove('active')
        }
    })
}

// Search Bar Filter

const searchBar = document.querySelector('.search-bar-input');

searchBar.oninput = function() {
    let filter = searchBar.value.toUpperCase();
    let houses = document.querySelectorAll('.house-card');

    for (let i = 0; i < houses.length; i++) {
        if (houses[i].lastElementChild.firstElementChild.
            querySelector('h3.address').innerText.toUpperCase().includes(filter)) {
                houses[i].style.display = ''
            } else {
                houses[i].style.display = 'none'
            }
    }
}

// Open more detailed view of cards

function renderDetailedView() {

    for (let i = 0; i < houseCards.length; i++) {
    const viewPropertyButtons = houseCards[i].lastElementChild.lastElementChild.querySelector('.view-property')
    
    viewPropertyButtons.addEventListener('click', ()=> {
        
        const image = houseCards[i].firstElementChild.querySelector('img').src;
        const address = houseCards[i].querySelector('h3').innerText;
        const price = parseInt(houseCards[i].querySelector('h2.price').innerText.replace(/£/g, ''));
        const bedrooms = houseCards[i].querySelector('p.bedrooms').innerText;
        const bathrooms = houseCards[i].querySelector('p.bathrooms').innerText;
        const houseType = houseCards[i].querySelector('p.type').innerText;
        const description = houseCards[i].querySelector('.description').querySelector('p').innerText;
        const newHome = houseCards[i].querySelector('.new-home').innerText;
        const recentlyAdded = houseCards[i].querySelector('.recently-added').innerText;

        let detailedView = ''
        detailedView = detailedView + `

            <div class="detailed-view">
                <div class="first-content-wrapper">
                    <div class="detailed-image-container">
                        <img src="${image}" alt="">
                    </div>

                    <div class="text-content">
                        <div>
                        
                            <h1 class="address">${address}</h1>

                            <div class="house-details">
                                <h1 class="price">£${price}</h1>
                                <div class="new-home">${newHome}</div>
                                <div class="recently-added">${recentlyAdded}</div>
                            </div>

                            <div class="icon-container">
                                <p class="type"><i class="bi bi-house"></i>${houseType}</p>
                                <p class="bedrooms"><img class="icon" src="icons/icons8-bedroom-96.png" alt="">${bedrooms}</p>
                                <p class="bathrooms"><img class="icon" src="icons/icons8-bath-100.png" alt="">${bathrooms}</p>
                            </div>

                            <div class="description">
                                <h2>Description</h2>

                                <p>${description}</p>
                            </div>
                        </div>

                        <div class="detailed-view-button">
                            <button class="close-detailed-view">Close</button>
                            <button class="view-property">Visit Property Link</button>
                        </div>
                    </div>
                </div>
            </div>
            `

            const detailedViewContainer = document.querySelector('.detailed-view-container');
            detailedViewContainer.insertAdjacentHTML('afterbegin', detailedView)

            dimBackground.classList.add('visible')

            const closeWindowButton = document.querySelector('.close-detailed-view');
            const detailedViewCard = document.querySelector('.detailed-view');

            document.addEventListener('keydown', function(event) {
                if (event.key == 'Escape') {
                    removeDetailedCard()
                }
            })

            closeWindowButton.addEventListener('click', removeDetailedCard);

            function removeDetailedCard() {
                detailedViewCard.remove()
                dimBackground.classList.remove('visible')
            }

            if (dimBackground.classList.contains('visible')) {
                dimBackground.addEventListener('click', removeDetailedCard)
            }
        });
    };
}

renderDetailedView()

function renderDetailedViewFromBookmarks() {

const bookmarkCards = savedPropertiesContainer.children;
for (let i = 0; i < bookmarkCards.length; i++) {
    const viewSavedPropertyButton = bookmarkCards[i].lastElementChild.lastElementChild.querySelector('.view-property');
    viewSavedPropertyButton.addEventListener('click', ()=> {

        const image = bookmarkCards[i].firstElementChild.querySelector('img').src;
        const address = bookmarkCards[i].querySelector('h3').innerText;
        const price = parseInt(bookmarkCards[i].querySelector('h2.price').innerText.replace(/£/g, ''));
        const bedrooms = bookmarkCards[i].querySelector('p.bedrooms').innerText;
        const bathrooms = bookmarkCards[i].querySelector('p.bathrooms').innerText;
        const houseType = bookmarkCards[i].querySelector('p.type').innerText;
        const description = bookmarkCards[i].querySelector('.description').innerText;
        const newHome = houseCards[i].querySelector('.new-home').innerText;
        const recentlyAdded = houseCards[i].querySelector('.recently-added').innerText;

        let detailedView = ''
        detailedView = detailedView + `

            <div class="detailed-view">
                <div class="first-content-wrapper">
                    <div class="detailed-image-container">
                        <img src="${image}" alt="">
                    </div>

                    <div class="text-content">
                        <div>
                        
                            <h1 class="address">${address}</h1>

                            <div class="house-details">
                                <h1 class="price">£${price}</h1>
                                <div class="new-home">${newHome}</div>
                                <div class="recently-added">${recentlyAdded}</div>
                            </div>

                            <div class="icon-container">
                                <p class="type"><i class="bi bi-house"></i>${houseType}</p>
                                <p class="bedrooms"><img class="icon" src="icons/icons8-bedroom-96.png" alt="">${bedrooms}</p>
                                <p class="bathrooms"><img class="icon" src="icons/icons8-bath-100.png" alt="">${bathrooms}</p>
                            </div>

                            <div class="description">
                                <h2>Description</h2>

                                <p>${description}</p>
                            </div>
                        </div>

                        <div class="detailed-view-button">
                            <button class="close-detailed-view">Close</button>
                            <button class="view-property">Visit Property Link</button>
                        </div>
                    </div>
                </div>
            </div>
            `

            const detailedViewContainer = document.querySelector('.detailed-view-container');
            detailedViewContainer.insertAdjacentHTML('afterbegin', detailedView)

            const closeWindowButton = document.querySelector('.close-detailed-view');
            const detailedViewCard = document.querySelector('.detailed-view');

            document.addEventListener('keydown', function(event) {
                if (event.key == 'Escape') {
                    removeDetailedCard()
                }
            })

            closeWindowButton.addEventListener('click', removeDetailedCard);

            function removeDetailedCard() {
                detailedViewCard.remove()
            }
        })
    }
};