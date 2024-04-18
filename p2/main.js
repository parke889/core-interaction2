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
            "page": "javascript.html",
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
            "page": "javascript.html",
            "img": 'the notebook.jpeg',
            // "category": ["romance"],
            "time": 2004,
            "selected": false
        },

        {
            "title": "Moonrise Kingdom",
            "page": "css.html",
            "img": 'the moonrise kingdom4.jpeg',
            // "category": ["thriller"],
            "time": 2012,
            "selected": true
        },
        {
            "title": "The Grand Budapest Hotel",
            "page": "css.html",
            "img": 'grand budapest.jpeg',
            // "category": ["thriller"],
            "time": 2014,
            "selected": true
        },
        {
            "title": "Breakfast at Tiffany's",
            "page": "css.html",
            "img": 'bat.jpg',
            // "category": ["thriller"],
            "time": 1962,
            "selected": false
        },
        {
            "title": "Lady Vengeance",
            "page": "css.html",
            "img": 'Lady Vengeance.jpeg',
            // "category": ["thriller"],
            "time": 2005,
            "selected": false
        },
        {
            "title": "Titanic",
            "page": "css.html",
            "img": 'titanic.jpg',
            // "category": ["thriller"],
            "time": 1997,
            "selected": false
        },
        {
            "title": "Happy Together",
            "page": "css.html",
            "img": 'happy together.jpg',
            // "category": ["thriller"],
            "time": 1997,
            "selected": true
        },
        {
            "title": "Inception",
            "page": "javascript.html",
            "img": 'inception.jpg',
            // "category": ["romance", "sci-fi"],
            "time": 2010,
            "selected": false
        },
        {
            "title": "The Devil Wears Prada",
            "page": "javascript.html",
            "img": 'devil.jpg',
            // "category": ["romance"],
            "time": 2006,
            "selected": false
        },
        {
            "title": "Flipped",
            "page": "javascript.html",
            "img": 'flipped2.jpeg',
            // "category": ["romance"],
            "time": 2010,
            "selected": false
        },
        {
            "title": "Her",
            "page": "css.html",
            "img": 'her.jpeg',
            // "category": ["thriller"],
            "time": 2013,
            "selected": true
        },
        {
            "title": "Us",
            "page": "css.html",
            "img": 'US(2019).jpeg',
            // "category": ["thriller"],
            "time": 2019,
            "selected": false
        },
        {
            "title": "Call Me By Your Name",
            "page": "css.html",
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
            "page": "css.html",
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

function toggleSelected(element) {
    // Find the index of the item in the items array based on its title
    const title = element.querySelector('p').textContent;
    const itemIndex = items.findIndex(item => item.title === title);
    
    // Toggle the "selected" property of the item between true and false
    items[itemIndex].selected = !items[itemIndex].selected;

    // Update the class of the element to reflect the new selection state
    element.classList.toggle('selected', items[itemIndex].selected);
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
