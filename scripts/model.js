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

function modelUpdateMovie(id, title, year, rating, personalRating, isBluRay, genre) {
    var movie = modelGetItemById(id);
    if (!movie) {
        return undefined;
    }

    movie.title = title;
    movie.year = year;
    movie.rating = rating;
    movie.personalRating = personalRating;
    movie.isBluRay = isBluRay;
    movie.genre = genre;

    return movie;
};

function modelDeleteMovie(id) {
    for (var i = 0; i < movieList.length; i++) {
        if (movieList[i].id == id) {
            movieList.splice(i, 1);
            break;
        }
    }
};

function modelGetAllMovies() {
    return movieList;
};

function modelGetItemById(id) {
    for (movie in movieList) {
        if (movieList[movie].id == id) {
            return movieList[movie];
        }
    }

    return undefined;
};