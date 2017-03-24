const iconMapping = {
  'unfall': 'glyphicon-certificate'
};

class ProductDetailController {
  constructor(productService) {
    this.products = productService.getProducts();
    this.productIcon = (product) => {
      let icon = iconMapping[product.type]
      return icon ? icon : 'glyphicon-ok-sign';
    };
  }
}

ProductDetailController.$inject = ['productService'];

export default ProductDetailController;
