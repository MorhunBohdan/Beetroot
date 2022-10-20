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

  $(".pagination .pagination-item:gt(pageLimit)").hide();

  

  for (let i = 1; i <= resultPages; i++) {
    $(".pagination").append($("<a/>", { class: "pagination-item", href: "javascript:void(0)", text: i }));
    $(".pagination .pagination-item:gt(" + (pageLimit - 1) + ")").hide();
  }

  $(".pagination-item").on("click",function (pageNumber) {
    if ($(this).hasClass("active")) {
      return false;
    } else {
      $(".pagination a").removeClass("active");
      $(this).addClass("active");
      $(".content .movie-block").hide();
      pageNumber = $(this).index();
      console.log(pageNumber)
      $(".pagination a").removeClass("active");
      $(this).addClass("active");
        ajaxRequest({
          title: title,
          type: type,
          pageNumber: pageNumber
        });
    }
  });
}

$(".Next").on("click", function(){
  let currentPage = $(".pagination a.active").index();
  currentPage = currentPage++;
  console.log(currentPage)
})



