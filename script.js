fetch('https://dummyjson.com/carts')
.then(res => res.json())
.then(data => {
  console.log(data); // Check the structure of the fetched data

  let carts = data.carts;
  let productHtml = '';

  carts.forEach(cart => {
    cart.products.forEach(product => {
      productHtml += `
        <div class="col-md-3 mb-4">
          <div class="card animate__animated animate__fadeIn">
            <img src="${product.thumbnail}"
             class="card-img-top" alt="${product.title}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5> 
              <p class="card-text"><strong>Price:</strong> $${product.price}</p>
            </div>
          </div>
        </div>
      `;
    });
  });

  document.getElementById('product-list').innerHTML = productHtml;
})
.catch(error => console.error('Error fetching data:', error));
 