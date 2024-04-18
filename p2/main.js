const items =
    [
        {
            "title": "Dicision to Leave",
            "page": "index.html",
            // "category": ["Romance"],
            "img": 'Dicision to Leave.jpeg',
            "time": 2022,
            "selected": true,
            "color": 'red'
        },
        {
            "title": "Get Out",
            "page": "page.html",
            "img": 'getout.jpg',
            // "category": ["thriller"],
            "time": 2017,
            "selected": false
        },
        {
            "title": "Eternal Sunshine",
            "page": "eternal.html",
            "img": 'Eternal Sunshine.jpg',
            // "category": ["thriller"],
            "time": 2004,
            "selected": true
        },

        {
            "title": "Léon",
            "page": "leon.html",
            "img": 'leon2.jpeg',
            // "category": ["thriller"],
            "time": 1994,
            "selected": true
        },
        {
            "title": "Saltburn",
            "page": "saltburn.html",
            "img": 'saltburn.jpeg',
            // "category": ["thriller"],
            "time": 2023,
            "selected": true
        },
        {
            "title": "The Handmaiden",
            "page": "handmaiden.html",
            "img": '아가씨(2016).png',
            // "category": ["thriller"],
            "time": 2016,
            "selected": true
        },
        {
            "title": "Fallen Angels",
            "page": "fallen.html",
            "img": 'fallen angels.jpg',
            // "category": ["romance"],
            "time": 1995,
            "selected": true
        },
        {
            "title": "Memento",
            "page": "page.html",
            "img": 'memento.jpg',
            // "category": ["romance", "sci-fi"],
            "time": 2000,
            "selected": false
        },
        {
            "title": "Parasite",
            "page": "javascript.html",
            "img": 'parasite2.jpeg',
            // "category": ["romance"],
            "time": 2019,
            "selected": false
        },
        {
            "title": "The Notebook",
            "page": "page.html",
            "img": 'the notebook.jpeg',
            // "category": ["romance"],
            "time": 2004,
            "selected": false
        },

        {
            "title": "Moonrise Kingdom",
            "page": "moon.html",
            "img": 'the moonrise kingdom4.jpeg',
            // "category": ["thriller"],
            "time": 2012,
            "selected": true
        },
        {
            "title": "The Grand Budapest Hotel",
            "page": "page.html",
            "img": 'grand budapest.jpeg',
            // "category": ["thriller"],
            "time": 2014,
            "selected": false
        },
        {
            "title": "Breakfast at Tiffany's",
            "page": "page.html",
            "img": 'bat.jpg',
            // "category": ["thriller"],
            "time": 1962,
            "selected": false
        },
        {
            "title": "Lady Vengeance",
            "page": "page.html",
            "img": 'Lady Vengeance.jpeg',
            // "category": ["thriller"],
            "time": 2005,
            "selected": false
        },
        {
            "title": "Titanic",
            "img": 'titanic.jpg',
            "page": "page.html",
            // "category": ["thriller"],
            "time": 1997,
            "selected": false
        },
        {
            "title": "Happy Together",
            "page": "happy.html",
            "img": 'happy together.jpg',
            // "category": ["thriller"],
            "time": 1997,
            "selected": true
        },
        {
            "title": "Inception",
            "page": "page.html",
            "img": 'inception.jpg',
            // "category": ["romance", "sci-fi"],
            "time": 2010,
            "selected": false
        },
        {
            "title": "The Devil Wears Prada",
            "page": "page.html",
            "img": 'devil.jpg',
            // "category": ["romance"],
            "time": 2006,
            "selected": false
        },
        {
            "title": "Flipped",
            "page": "flipped.html",
            "img": 'flipped2.jpeg',
            // "category": ["romance"],
            "time": 2010,
            "selected": true
        },
        {
            "title": "Her",
            "page": "page.html",
            "img": 'her.jpeg',
            // "category": ["thriller"],
            "time": 2013,
            "selected": false
        },
        {
            "title": "Us",
            "page": "page.html",
            "img": 'US(2019).jpeg',
            // "category": ["thriller"],
            "time": 2019,
            "selected": false
        },
        {
            "title": "Call Me By Your Name",
            "page": "callme.html",
            "img": 'callmebyyourname(2017)-2.jpeg',
            // "category": ["thriller"],
            "time": 2017,
            "selected": true
        },
        {
            "title": "About Time",
            "page": "css.html",
            "img": 'about time.jpeg',
            // "category": ["thriller"],
            "time": 2013,
            "selected": false
        },
        {
            "title": "The Lobster",
            "page": "lobster.html",
            "img": 'the lobster.jpg',
            // "category": ["thriller"],
            "time": 2015,
            "selected": true
        },
        {
            "title": "Old Boy",
            "page": "css.html",
            "img": 'Old Boy(2003)-1.jpeg',
            // "category": ["thriller"],
            "time": 2003,
            "selected": false
        },
        

    ]


const filters = {
    selected: document.querySelector('#selected-filter'),
    time: document.querySelector('#time-filter'),
    timeValue: document.querySelector('output[for="time-filter"]')
};
const toolbox = document.querySelector('#toolbox');

let showCategory = 'all';
let minTime = 0;

function generateItem(item) {
    return `
        <div class="item ${item.selected ? 'selected' : ''}" onclick="toggleSelected(this)">
            ${item.img ? `<img src="imgs/${item.img}" alt="${item.title}">` : ''}
            <p>${item.title} (${item.time}) </p>
            ${item.category ? item.category.map(tag => `<span>${tag}</span>`).join('') : ''}
            ${item.page ? `<a href="./pages/${item.page}">⊕</a>` : ''}
        </div>
    `;
}


function renderItems() {
    const filteredItems = items.filter(item => {
        const condition = showCategory === 'all' ||
            (showCategory === 'selected' && item.selected) ||
            (showCategory === 'notSelected' && !item.selected);
        return item.time >= minTime && condition;
    });

    toolbox.innerHTML = ''

    filteredItems.forEach(item => {
        toolbox.innerHTML += generateItem(item);
    });
}





function handleSelectedFilterChange() {
    showCategory = filters.selected.value;
    renderItems();
}

function handleTimeFilterChange() {
    filters.timeValue.textContent = filters.time.value;
    minTime = filters.time.value;
    renderItems();
}

function initializeEventListeners() {
    filters.selected.addEventListener('change', handleSelectedFilterChange);
    filters.time.addEventListener('input', handleTimeFilterChange);
}

initializeEventListeners();
renderItems();

function generateItem(item) {
    const isSelected = item.selected ? 'selected' : '';
    return `
        <div class="item ${isSelected}" onclick="toggleSelected(this)">
            ${item.img ? `<img src="imgs/${item.img}" alt="${item.title}" style="${isSelected ? 'filter: drop-shadow(3px 3px 3px red);' : ''}">` : ''}
            <p>${item.title} (${item.time}) </p>
            ${item.category ? item.category.map(tag => `<span>${tag}</span>`).join('') : ''}
            ${item.page ? `<a href="./pages/${item.page}">⊕</a>` : ''}
        </div>
    `;
}

function generateItem(item) {
    const isSelected = item.selected ? 'selected' : '';
    const plusSign = item.selected ? '⊕' : ' '; // Here we choose the character based on the value of "selected"
    return `
        <div class="item ${isSelected}" onclick="toggleSelected(this)">
            ${item.img ? `<img src="imgs/${item.img}" alt="${item.title}" style="${isSelected ? 'filter: drop-shadow(3px 3px 3px red);' : ''}">` : ''}
            <p>${item.title} (${item.time}) </p>
            ${item.category ? item.category.map(tag => `<span>${tag}</span>`).join('') : ''}
            ${item.page ? `<a href="./pages/${item.page}">${plusSign}</a>` : ''}
        </div>
    `;
}

// Select the popup and info elements
const popup = document.querySelector('.popup');
const infoContainer = document.querySelector('.info');

// Add click event listeners to each image
itemImages.forEach(image => {
    image.addEventListener('click', () => {
        // Retrieve the index of the clicked item from the data-info attribute
        const dataIndex = image.parentElement.getAttribute('data-info');
        const selectedItem = items[dataIndex];

        // Generate HTML to display the item's information
        const infoHTML = `
            <h2>${selectedItem.title}</h2>
            <p>Time: ${selectedItem.time}</p>
            <p>Page: ${selectedItem.page ? selectedItem.page : 'N/A'}</p>
            ${selectedItem.category ? `<p>Category: ${selectedItem.category.join(', ')}</p>` : ''}
        `;

        // Update the info container with the generated HTML
        infoContainer.innerHTML = infoHTML;

        // Show the popup
        popup.style.display = 'block';
    });
});

// Function to close the popup when clicked outside
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});


