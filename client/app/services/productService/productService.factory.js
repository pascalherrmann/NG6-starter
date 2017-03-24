const product = (type, name, description, features) => {
  return {
    type: type,
    name: name,
    description: description,
    features: features
  }
};

const getProducts = () => {
  return [
    product('unfall', 'Spinnenverschluck-Police', 'Zahlt zuverlässig bei versehntlich verschluckten Spinnen', [
      'Zahlt bei Kreuzspinnen',
      'Zahlt bei Schwarzen Wittwen',
      'Zahlt bei Weberknechten'
    ]),
    product('kranken', 'Hals-und-Beinbruch-Police', 'Schnell wieder gesund mit Moos', [
      'Ultimative Therapieverfahren',
      'Zahlt bei Hals- UND Beinbrüchen',
      'Sonst aber nicht'
    ]),
    product('kfz', 'Einkaufswagen-Police', 'Sicher im Straßenverkehr mit ungewöhnlichen Verkehrsmitteln', [
      'Gilt auch bei Discountern',
      'Personenschäden bis 10.000.000 € eingeschlossen'
    ])
  ];
};

const ProductService = () => {
  return {
    getProducts
  }
};

export default ProductService;
