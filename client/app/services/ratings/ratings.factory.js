const RatingsFactory = () => {
  return {
    list: () => {
      console.log('ratings.list()');
      return [
        {user: 'Klaus Kleber', score: 4, text: 'Offiziell bezeichnet \"Alexa\" die Alexa Sprachdienste von Amazon. Amazon bietet dafür zwei Geräte an: Die große Röhre Echo und die kleine Röhre Echo dot. Wir nennen die Geräte einfach Alexa.'},
        {user: 'Gundula Gause', score: 3, text: '...hat nichts zu sagen. Sprachlos.'}
      ];
    }
  }
};

// RatingsFactory.$inject = '$http';

export default RatingsFactory;
