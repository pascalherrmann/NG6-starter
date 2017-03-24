const iconMapping = {
  'unfall': 'glyphicon-certificate'
};

class ProductDetailController {
  constructor() {
    this.productType = 'unfall';
    this.productName = 'Spinnenverschluck-Police';
    this.productDescription = 'Zahlt zuverlässig bei versehntlich verschluckten Spinnen';
    this.productFeatures = [
      'Zahlt bei Kreuzspinnen',
      'Zahlt bei Schwarzen Wittwen',
      'Zahlt bei Weberknechten'
    ];
    this.productIcon = () => iconMapping[this.productType];
  }
}

export default ProductDetailController;
