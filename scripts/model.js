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

function modelDeleteMovie(id) {
    var realId = id.substring(6);

    for (var i = 0; i < movieList.length; i++) {
        if (movieList[i].id == realId) {
            movieList.splice(i, 1);
            break;
        }
    }
}

function modelGetAllMovies() {
    return movieList;
};

function modelGetMovie(id) {
    for (movie in movieList) {
        if (movieList[movie].id === id) {
            return movie;
        }
    }

    return undefined;
};