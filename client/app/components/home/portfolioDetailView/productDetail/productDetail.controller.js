const iconMapping = {
  'unfall': 'glyphicon-certificate'
};

class ProductDetailController {
  constructor(products) {
    this.products = products.getProducts();
    this.productIcon = (product) => {
      let icon = iconMapping[product.type]
      return icon ? icon : 'glyphicon-ok-sign';
    };
  }
}

ProductDetailController.$inject = ['products'];

export default ProductDetailController;
