$.ajax({
    method: 'GET',
    url: '/films'
}).then(films => {
    films.forEach(film => {
        $('.list-group').append(`
            <li class="list-group-item">${film.name} likes <i>${
            film.filmTitle
        }</i></li>
    `);
    });
});

$('.btn').click(e => {
    e.preventDefault();

    let body = {
        name: $('[name="name"]').val(),
        filmTitle: $('[name="filmTitle"]').val()
    };

    console.log(body);
});
