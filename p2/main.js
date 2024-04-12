const items =
    [
        {
            "title": "About Time",
            "page": "html.html",
            // "category": ["Romance"],
            "img": '헤어질결심(2022).jpeg',
            "time": 2013,
            "selected": true,
            "color": 'red'
        },
        {
            "title": "Movie",
            "page": "css.html",
            "img": 'getout.jpg',
            // "category": ["thriller"],
            "time": 2022,
            "selected": true
        },
        {
            "title": "Learn Javascript",
            "page": "javascript.html",
            "img": 'Eternal Sunshie.jpg',
            // "category": ["romance"],
            "time": 10,
            "selected": true
        },
        {
            "title": "Learn Figma",
            "img": '헤어질결심(2022).jpeg',
            // "category": ["romance", "sci-fi"],
            "time": 20,
            "selected": false
        },
        {
            "title": "Learn p5",
            "img": 'saltburn.jpeg',
            // "category": ["romance"],
            "time": 15,
            "selected": false
        },
        {
            "title": "Learn how to make fried rice",
            "img": '헤어질결심(2022).jpeg',
            // "category": ["romance"],
            "time": 15,
            "selected": false
        }
        
        

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
            (showCategory === 'incomplete' && !item.selected);
        return item.time >= minTime && condition;
    });

    toolbox.innerHTML = ''

    filteredItems.forEach(item => {
        toolbox.innerHTML += generateItem(item);
    });
}

function toggleSelected(element) {
    element.classList.toggle('selected');
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
