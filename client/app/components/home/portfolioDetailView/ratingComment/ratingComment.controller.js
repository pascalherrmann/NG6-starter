class RatingCommentController {
  constructor(ratings) {
    this.ratings = ratings.list();
  }
}

RatingCommentController.$inject = ['ratings'];

export default RatingCommentController;
