const getFilms = () => {
    $.ajax({
        method: 'GET',
        url: '/films'
    }).then(films => {
        $('.list-group').empty();
        films.forEach(film => {
            $('.list-group').append(`
                <li class="list-group-item">${film.name} likes <i>${
                film.filmTitle
            }</i></li>
        `);
        });
    }).catch((err) => {
        console.log(err);
    });
}

getFilms();

$('.btn').click(e => {
    e.preventDefault();

    let body = {
        name: $('[name="name"]').val(),
        filmTitle: $('[name="filmTitle"]').val()
    };

    $.ajax({
        method: 'POST',
        url: '/filmList',
        data: body
    })
        .then(() => {
            $('[name="name"]').val("");
            $('[name="filmTitle"]').val("");
            
            getFilms();
    }).catch((err) => {
        console.log(err);
    });
});
