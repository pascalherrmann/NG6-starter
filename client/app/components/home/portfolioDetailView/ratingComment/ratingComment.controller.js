class RatingCommentController {
  constructor(ratings) {
    this.ratings = [];
    ratings.list().then(
      response => {
        const ratings = response.data._embedded.ratings;
        console.log(ratings);
        this.ratings = ratings;
      }, error => {
        console.log(error);
      }
    );
  }
}

RatingCommentController.$inject = ['ratings'];

export default RatingCommentController;
