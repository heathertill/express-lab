$.ajax({
    method: 'GET',
    url: '/films'
})
    .then(films => {
    
        films.forEach(film => {
            $('.list-group').append(`
            <li class="list-group-item">${film.name} likes <i>${film.filmTitle}</i></li>
    `)
            
})

})


