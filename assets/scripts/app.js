const productList = {
  products: [
    {
      title: 'A Pillow',
      imageUrl:
        'https://media.4rgos.it/i/Argos/8374831_R_Z002A?w=750&h=440&qlt=70',
      price: 19.99,
      description: 'A soft pillow'
    },
    {
      title: 'A Carpet',
      imageUrl: 'https://products.empiretoday.com/img/8598.jpg',
      price: 89.99,
      description: 'A carpet which you might like – or not.'
    }
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render();
