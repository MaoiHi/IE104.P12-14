document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');
    const products = document.querySelectorAll('.product');
  
    categories.forEach(category => {
      category.addEventListener('click', () => {
        const categoryType = category.getAttribute('data-catagory');
  
        products.forEach(product => {
          product.style.display = 'none';
        });
  
        products.forEach(product => {
          if (product.getAttribute('data-catagory') === categoryType) {
            product.style.display = 'block';
          }
        });
      });
    });
  });
  