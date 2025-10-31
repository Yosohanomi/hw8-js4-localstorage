import productsData from './data/products.json';
import productsTemplate from './templates/template.hbs';

const products = productsData.products;

function renderProducts(productsArray) {
  const productList = document.querySelector('.product-list');
  productList.innerHTML = productsTemplate(productsArray);
}

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Пошук продуктів...';
searchInput.className = 'search-input';

searchInput.addEventListener('input', function(e) {
  const searchTerm = e.target.value.toLowerCase();
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
});

const container = document.querySelector('#products-container');
container.insertBefore(searchInput, container.querySelector('.product-list'));

renderProducts(products);