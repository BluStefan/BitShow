$(document).ready(() => {
    shows();
})

const shows = (() => {
    $.ajax({
        url: urlToSearch,
        method: 'GET',

    }).done((response) => {
        response.sort((a, b) => {
            return b.rating.average - a.rating.average
        });
        let firstTopMovies = response.slice(0, 50)

        firstTopMovies.forEach((element) => {
            let card = $(`<div class="  card border-0  col-3"  onclick='goToShow(${element.id})'>
            <img src='${element.image.medium}' class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">${element.name}</h5>
            </div>
          </div>`);
            cardHolder.append(card);
        })

    }).fail(() => {
        alert('Network error')
    })
});