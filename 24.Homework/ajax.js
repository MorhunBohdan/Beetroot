let apiKey = "64d74b72";
let omdbUrl = "http://www.omdbapi.com/";
let selectedType;
let buttonSearch = $(".form__search-button");
let pageNumber = 1;
let content = $(".content");
$(".select-input").change(function () {
  selectedType = $(".select-input option:selected").val();
});

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
        pageNumber = 1;
        movieResults(data);
    },
    error: function (jqXhr, textStatus, errorMessage) {
      errorSearch (data)
    },
  });
}

$(".form__search-button").click(function () {
  title = $("#t").val();
  type = $(".select-input option:selected").val();
  let pageNumber = 1;
  ajaxRequest({
    title: title,
    type: type,
    pageNumber: pageNumber
  });
});

function movieResults(data) {
  movies = data.Search;
  let totalResult = data.totalResults;
  let pageLimit = 10;
  pageNumber = 1;
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
  content.addClass("active");
  $('.pagination-conteiner').twbsPagination({
    totalPages: resultPages,
    visiblePages: 10,
    onPageClick: function (event, pageNumber) {
      $(".last").addClass("none")
      $(".first").addClass("none")
      $(".page-item").on("click",function (e) {
        pageNumber++
            ajaxRequest({
              title: title,
              type: type,
              pageNumber: pageNumber
            });
      });
    }
  });
} 