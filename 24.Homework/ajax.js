let apiKey = "64d74b72";
let omdbUrl = "http://www.omdbapi.com/";
let inputSearch;
let selectedType;
let buttonSearch = $(".form__search-button");



$(".select-input").change(function () {
  selectedType = $(".select-input option:selected").val();
  console.log(selectedType);
});

inputSearch = $("#t").keypress(function(event){
  let keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    event.preventDefault();
    inputSearch = $("#t").val();
    ajaxRequest();
  }
})

function ajaxRequest(options) {
  $.ajax(omdbUrl, {
    type: "GET",
    data: {
      s: options.title,
      type: options.type,
      page: options.pageNumber,
      apiKey: apiKey
    },
    success: function (data, status, xhr) {
      movieResults(data);
      console.log(data);
    },
    error: function (jqXhr, textStatus, errorMessage) {
      console.log(errorMessage);
    },
  });
}

$(".form__search-button").click(function () {
  title = $("#t").val();
  type = $(".select-input option:selected").val();
  let pageNumber = 1;
  console.log(inputSearch)
  ajaxRequest({
    title: title,
    type: type,
    pageNumber: pageNumber
  });
});

function movieResults(data) {
  let movies = data.Search;
  console.log(movies)
  let totalResult = data.totalResults;
  let pageLimit = 10;
  let resultPages = Math.round(totalResult / pageLimit);
  let displayNumber = $('.pagination .pagination-item').length;

  $(".movie-block").remove();

  movies.forEach(function (movie) {
    $(".content").append(
      $("<div/>", { class: "movie-block" }).append(
        $("<img/>", { class: "movie-poster", src: movie.Poster }),
        $("<h2/>", { class: "movie-title", text: movie.Title }),
        $("<p/>", { class: "movie-type", text: movie.Type }),
        $("<p/>", { class: "movie-year", text: movie.Year })
      )
    );
  });
  $('.pagination').pagination({
    dataSource: function(done){
      let = result = [];
      for (let page = 1; page <= resultPages; page++) {
        result.push(page);
      }
      done (result);
    },
    totalNumber: resultPages,
    pageRange: 5,
    showPrevious: false,
    showNext: false,
})

  $(".paginationjs-page").on("click",function (e) {
    e.preventDefault();
      $(".content .movie-block").hide();
      pageNumber = $(this).index();
      console.log(pageNumber)
        ajaxRequest({
          title: title,
          type: type,
          pageNumber: pageNumber
        });
  });
}



