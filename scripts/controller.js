function onPageLoad() {
    document.getElementById("add_movie").onclick = onAddMovieClicked;
    document.getElementById("create").onclick = onCreateClicked;
    document.getElementById("cancel").onclick = clearInputForm;
    

    var movies = modelGetAllMovies();
    for (movie in movies) {
        addGridItem(movies[movie]);
    }

    clearInputForm();
}

function onDeleteClicked() {
    modelDeleteMovie(this.id);

    var grid = document.getElementById("movie_items");
    var header;
    for (var i = 0; i < grid.childNodes.length; i++) {
        if (grid.childNodes[i].className == 'movie_item') {
            header = grid.childNodes[i];
            break;
        }
    }

    grid.innerHTML = '';
    grid.appendChild(header);

    var movies = modelGetAllMovies();
    for (var i = 0; i < movies.length; i++) {
        addGridItem(movies[i]);
    }
}

function addGridItem(movie) {
    var movieItems = document.getElementById("movie_items");

    var movieItem = document.createElement("div");
    movieItem.id = 'row' + movie.id;
    movieItem.className = 'movie_item';
    var html = '';
    html += `<div id="display_title">${movie.title}</div>`;
    html += `<div id="display_rating">${movie.rating}</div>`;
    html += `<div id="display_personal_rating">${movie.personalRating}</div>`;
    html += `<div id="display_bluray">${movie.isBluRay ? 'Yes' : 'No'}</div>`;
    html += `<button type="button" value="Edit" class="edit" id="edit${movie.id}">Edit</button>`;
    html += `<button type="button" class="delete" id="delete${movie.id}">Delete</button>`;

    movieItem.innerHTML = html;
    movieItems.appendChild(movieItem);

    var deleteID = document.getElementById('delete' + movie.id);
    deleteID.onclick = onDeleteClicked;
}

function validateFields() {
    var form = document.getElementById("movie_input_form");
    var title_error = document.getElementById("title_error");
    var year_error = document.getElementById("year_error");
    var rating_error = document.getElementById("rating_error");
    var my_rating_error = document.getElementById("my_rating_error");
    var genre_error = document.getElementById("genre_error");
    
    if (form.title.value == '') {
        title_error.innerText = 'You must enter a title';
        title_error.style.display = 'block';
        form.title.style.borderBottom = "2px solid #D00000";
    }
    else if (form.title.value.length > 40) {
        title_error.innerText = 'Title must be 40 characters or less';
        title_error.style.display = 'block';
        form.title.style.borderBottom = "2px solid #D00000";
    }
    else {
        form.title.style.borderBottom = "none";
        title_error.style.display = "none";
        title_error.innerText = '';
    }

    if (form.year.value == '') {
        year_error.innerText = 'You must enter a year';
        year_error.style.display = 'block';
        form.year.style.borderBottom = "2px solid #D00000";
    }
    else if (isNaN(parseInt(form.year.value))) {
        year_error.innerText = 'The year must be a number';
        year_error.style.display = 'block';
        form.year.style.borderBottom = "2px solid #D00000";
    } 
    else if (form.year.value < '1888' || form.year.value > '2020') {
        year_error.innerText = 'The year must be between 1888 and 2020.';
        year_error.style.display = 'block';
        form.year.style.borderBottom = "2px solid #D00000";
    }
    else {
        form.year.style.borderBottom = "none";
        year_error.style.display = "none";
        year_error.innerText = '';
    }

    if (form.rating.value == '') {
        rating_error.innerText = 'Please select a rating';
        rating_error.style.display = 'block';
        form.rating.style.borderBottom = "2px solid #D00000";
    }
    else {
        form.rating.style.borderBottom = "none";
        rating_error.style.display = "none";
        rating_error.innerText = '';
    }

    if (form.my_rating.value == '') {
        my_rating_error.innerText = 'Please select your rating of the movie';
        my_rating_error.style.display = 'block';
        form.my_rating.style.borderBottom = "2px solid #D00000";
    }
    else {
        form.my_rating.style.borderBottom = "none";
        my_rating_error.style.display = 'none';
        my_rating_error.innerText = '';
    }

    if (form.elements['genre'].value == '') {
        genre_error.innerText = 'Please select a movie genre';
        genre_error.style.display = 'block';
        document.getElementById("genre").style.borderBottom = "2px solid #D00000";
    }
    else {
        document.getElementById("genre").style.borderBottom = "none";
        genre_error.style.display = 'none';
        genre_error.innerText = '';
    }

    if (title_error.innerText != '' || year_error.innerText != '' || rating_error.innerText != '' || my_rating_error.innerText != '' || genre_error.innerText != '') {
        return false;
    }

    return true;
}

function onCreateClicked() {
    var form = document.forms["add_movie_form"];

    if (!validateFields()) return;

    var title = form.title.value;
    var rating = form.rating.value;
    var year = form.year.value;
    var my_rating = form.my_rating.value;
    var genre = form.elements["genre"].value;
    var bluray = form.bluray.checked;

    addGridItem(modelCreateMovie(title, rating, year, my_rating, genre, bluray));
    clearInputForm();
}

function clearInputForm() {
    document.getElementById("movie_input_form").style.display = "none";
    document.getElementById("display_movies").style.display = "block";
    document.getElementById("area_title").innerText = "Movie Database";

    var form = document.forms["add_movie_form"];

    form.title.value = "";
    form.year.value = "";

    form.action_adventure.checked = false;
    form.drama.checked = false;
    form.comedy.checked = false;
    form.romance.checked = false;
    form.scifi_fantasy.checked = false;

    form.rating.selectedIndex = -1;
    form.my_rating.selectedIndex = -1;

    form.bluray.checked = false;

}

function onAddMovieClicked() {
    document.getElementById("movie_input_form").style.display = "block";
    document.getElementById("display_movies"). style.display = "none";
    document.getElementById("area_title").innerText = "Enter Movie Information";
}