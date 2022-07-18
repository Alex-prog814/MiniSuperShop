let db = [
    {
        title: 'Samsung S10',
        category: 'electronics',
        price: 700,
        desc: 'Super phone for your life!',
        img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_1809_0_6.png'
    },
    {
        title: 'iPhone 13 Pro',
        category: 'electronics',
        price: 1100,
        desc: 'One of the most powerful cameras!',
        img: 'https://www.tradeinn.com/f/13885/138855059/apple-iphone-13-pro-256gb-6.1-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg'
    },
    {
        title: 'Apple',
        category: 'fruits',
        price: 2,
        desc: 'Healthy fruit that is used in many dishes and desserts.',
        img: 'https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg'
    },
    {
        title: 'Orange',
        category: 'fruits',
        price: 7,
        desc: 'Fruit for one of the most popular types of juice.',
        img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/whole-halved-oranges.jpg'
    },
    {
        title: 'Audi R8',
        category: 'cars',
        price: 98000,
        desc: 'A sports car that can reach tremendous speed.',
        img: 'https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg'
    }
];

// render logic
function addCategories() {
    let categories = db.map(item => item.category);
    categories = new Set(categories);
    let categoriesList = document.querySelector('.dropdown-menu');
    categories.forEach(item => {
        categoriesList.innerHTML += `<li><a class="dropdown-item" href="#">${item}</a></li>`
    });
};

function addProducts(data = db) {
    let container = document.querySelector('.container');
    container.innerHTML = '';
    data.forEach(item => {
        container.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${item.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.desc}</p>
                    <p class="card-text"><b>Price</b>: ${item.price}</p>
                    <p class="card-text"><b>Category</b>: ${item.category}</p>
                    <a href="#" class="btn btn-primary">Detail</a>
                </div>
            </div>
        `
    });
}; 

function render() {
    addCategories();
    addProducts();
};

render();

// filter logic
function filterOnCategory(e) {
    let category = e.target.innerText;
    let data = db.filter(item => item.category === category); 
    addProducts(data);
};

let categoryItem = document.querySelectorAll('.dropdown-item');
categoryItem.forEach(item => item.addEventListener('click', filterOnCategory));

// search logic
let searchForm = document.querySelector('#search-form');

function searchProducts(e) {
    e.preventDefault();
    let searchInp = document.querySelector('#search-inp').value;
    let data = db.filter(item => {
        return item.desc.toLowerCase().indexOf(searchInp.toLowerCase()) !== -1 || item.title.toLowerCase().indexOf(searchInp.toLowerCase()) !== -1;
    });
    searchInp = '';
    addProducts(data);
};

searchForm.addEventListener('submit', searchProducts);

// go to home logic
let homeLink = document.querySelector('#home-link');
homeLink.addEventListener('click', () => addProducts());
