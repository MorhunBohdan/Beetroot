<template>
  <section class="movie-list">
   <div class="movie-list__main conteiner">
     <div class="movie-list__main-filter">
       <h2 class="movie-list__main-filter-options">Filter Option</h2>
       <div class="movie-list__main-filter-category">
         <h3 class="movie-list__main-filter-category-title">By Category</h3>
         <div class="movie-list__main-filter-category-checkboxes">
           <label for="Action">Action</label>
           <input type="checkbox" name="Action">
           <label for="Action">Action</label>
           <input type="checkbox" name="Action">
           <label for="Action">Action</label>
           <input type="checkbox" name="Action">
           <label for="Action">Action</label>
           <input type="checkbox" name="Action">
           <label for="Action">Action</label>
           <input type="checkbox" name="Action">
           <label for="Action">Action</label>
           <input type="checkbox" name="Action">
         </div>
       </div>
     </div>
     <div class="movie-list__main-movies">
       <h2 class="movie-list__main-movies-title">Movies</h2>
       <div class="movie-list__main-movies-content">
         <div class="movie-list__main-movies-content-filter">
           <a class="movie-list__main-movies-content-filter-item" href="">Today</a>
           <a class="movie-list__main-movies-content-filter-item" href="">This Week</a>
           <a class="movie-list__main-movies-content-filter-item" href="">This Month</a>
           <a class="movie-list__main-movies-content-filter-item" href="">Newest</a>
         </div>
         <div class="movie-list__main-movies-content-items">
           <div class="movie-list__main-movies-content-item">
             <div class="movie-list__main-movies-content-item-poster">
               <img src="" alt="">
             </div>
             <div class="movie-list__main-movies-content-item-info">
               <h3 class="movie-list__main-movies-content-item-title">Test Title</h3>
               <div class="movie-list__main-movies-content-item-caption">
                 <p class="movie-list__main-movies-content-item-caption-item">2018</p>
                 <p class="movie-list__main-movies-content-item-caption-item">ENGLAND</p>
                 <p class="movie-list__main-movies-content-item-caption-item">1hr 2min</p>
                 <div class="movie-list__main-movies-content-item-caption-item-viewers">
                   <i class="fa-solid fa-eye"></i>
                   <p class="movie-list__main-movies-content-item-caption-item-number">567k viewers</p>
                 </div>
               </div>
               <p class="movie-list__main-movies-content-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
               <a class="movie-list__main-movies-content-item-genre" href="">Drama</a>
             </div>
             <div class="movie-list__main-movies-content-item-buttons">
               <div class="movie-list__main-movies-content-item-buttons-rating">
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
               </div>
               <div class="movie-list__main-movies-content-item-buttons-items">
                 <button class="movie-list__main-movies-content-item-buttons-watchlist"><span class="icon-heart"></span></button>
                 <button class="movie-list__main-movies-content-item-buttons-watchnow">Watch Now</button>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div class="movie-list__main-movies-content-pagination">
         
       </div>
     </div>
   </div>
  </section>
 </template>
 
 <script>

 export default {
   name: 'MoviePage',
   components: {
   }
 }
 </script>