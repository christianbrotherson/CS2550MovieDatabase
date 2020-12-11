var movieList = [];

var movieID = 0;

function Movie(
    title,
    rating,
    year,
    personalRating,
    genre,
    isBluRay
) {
    this.id = movieID++;
    this.title = title;
    this.rating = rating;
    this.year = year;
    this.personalRating = personalRating;
    this.genre = genre;
    this.isBluRay = isBluRay;
};

function modelCreateMovie(
    title,
    rating,
    year,
    personalRating,
    genre,
    isBluRay
) {
    var movie = new Movie(title, rating, year, personalRating, genre, isBluRay);
    movieList.push(movie);
    return movie;
};

function modelGetAllMovies() {
    return movieList;
};

function modelGetMovie(id) {
    for (x in movieList) {
        if (x.id === id) {
            return x;
        }
    }

    return undefined;
};