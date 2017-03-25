class RatingCommentController {
  constructor(users) {
    users.get(this.rating.userId).then(
      response => this.user = response.data,
      error => console.log(error)
    );
  }
}

RatingCommentController.$inject = ['users'];

export default RatingCommentController;
