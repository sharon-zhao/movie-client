'use strict'
const showMoviesTemplate = require('../templates/movie-listing.handlebars')
const store = require('../store')
const createMovieTemplate = require('../templates/createmovie.handlebars')
const showMovieTemplate = require('../templates/showmovie.handlebars')
const commentTemplate = require('../templates/comment.handlebars')
const updateMovieTemplate = require('../templates/updatemovie.handlebars')
const movieEvent = require('./event')
const api = require('./api')

 $('#info').hide()
 $('#message').hide()
 $('#infomovietitle').hide()
 $('#item-2-1').hide()
 $('#create-movie').hide()
 $('#createmovie').hide()
 $('#add-comments').hide()
 $('#comments').hide()
 $('#item-3').hide()
 $('#show1').hide()
 $('#show2').hide()
 $('#show3').hide()
 $('#delete-movie').hide()
 $('#item-2-2').hide()
 $('#deletemovie').hide()
 $('#update-movie').hide()
 $('#item-2-3').hide()
 $('#updatemovie').hide()
 $('#show-movie').hide()
 $('#item-2-4').hide()
 $('#showmovie').hide()

const showMyMoviesSuccess = function(data){
  $('message').show()
  $('message').text('Your movies')
  $('#infomovietitle').show()
  const showMyMoviesHtml = showMoviesTemplate({ movies: data })
  $('#infomovietitle').html(showMyMoviesHtml)
}

const showMovieSuccess = function(data) {
  const showMoviesHtml = showMoviesTemplate({ movies: data.movies })
  $('#infomovietitle').html(showMoviesHtml)
  $('#infomovietitle').show()
  // $('#infomovietitle').text(JSON.stringify(data))
  $('#message').show()
  $('#message').text('show movie success').css('color','green')
  $('form').trigger('reset')
}

const hideMovieSuccess = function(){
   $('#infomovietitle').hide()
   $('#message').hide()
}

const showMovieFailure = function(error){
 $('#message').show()
 $('#message').text('show movie failed').css('color','red')
 $('form').trigger('reset')
}


//movie function
const showAllBook = function(){
  $('#show2').show()
}

const showCreateMovieSuccess = function(){
  $('#create-movie').show()

}

const createMovieSuccess = function(data){
  $('#item-2-1').show()
  $('#message').show()
  $('#createmovie').show()
  const createMoviesHtml = createMovieTemplate({ movie: data.movie })
  $('#createmovie').html(createMoviesHtml)
  // $('#createmovie').text(JSON.stringify(data))
  $('#message').text('create movie success').css('color','green')
  $('form').trigger('reset')
  api.showMovie()
   .then(ui.showMovieSuccess)

}

const createMovieFailure = function(error){
  $('#message').show()
  $('#message').text('create movie failed').css('color','red')
  $('form').trigger('reset')
}

const showDeleteMovieSuccess = function(){
 $('#delete-movie').show()
}

const deleteMovieSuccess = function(throwaway, movieid){
  $('#delete-movie').show()
  $('#item-2-2').show()
  $('#deletemovie').show()
  $('#deletemovie').text('Destroy OK')
  $('#message').show()
  $('#message').text('destroy movie success').css('color','green')
  $(`section[data-id=${movieid}]`).remove()
  api.showMovie()
   .then(ui.showMovieSuccess)

}

const deleteMovieFailure = function(){
  $('#message').text('destroy movie failed').css('color','red')
}

const showUpdateMovieSuccess = function(){
$('#update-movie').show()
}

const movieUpdateSuccess = function(data){
  $('#message').show()
  $('#updatemovie').show()
  $('#item-2-3').show()
  const updateMoviesHtml = updateMovieTemplate({ movie: data.movie })
  $('#updatemovie').html(updateMoviesHtml)
  // $('#updatemovie').text(JSON.stringify(data))
  $('#message').text('update movie by id success').css('color','green')
  $('form').trigger('reset')
  api.showMovie()
   .then(ui.showMovieSuccess)
}

const movieUpdateFailure = function(data){
$('#message').show()
$('#message').text('You cannot update this movie, it is not yours').css('color','red')
$('form').trigger('reset')
}

const showShowMovieSuccess = function(){
  $('#show-movie').show()
}

const movieShowSuccess = function (data){
  $('#item-2-4').show()
  $('#showmovie').show()
  $('#message').show()
  $('#message').text('show movie by id success').css('color','green')
  const showMovieHtml = showMovieTemplate ({ movie: data[0] })
  $('#showmovie').html(showMovieHtml)
  // $('#showmovie').text(JSON.stringify(data))
  $('form').trigger('reset')
}

const movieShowFailure = function(data){
  $('#message').show()
  $('#message').text('show movie by id failed').css('color','red')
}

const hideMovieFuncSuccess = function(){
  $('#show2').hide()
  $('#create-movie').hide()
  $('#update-movie').hide()
  $('#movieresult').hide()

}



module.exports = {

  showCreateMovieSuccess,
  showMovieSuccess,
  showMovieFailure,
  createMovieSuccess,
  createMovieFailure,
  hideMovieSuccess,
  showDeleteMovieSuccess,
  deleteMovieSuccess,
  deleteMovieFailure,
  showUpdateMovieSuccess,
  movieUpdateSuccess,
  movieUpdateFailure,
  showShowMovieSuccess,
  movieShowSuccess,
  movieShowFailure,
  showAllBook,
  hideMovieFuncSuccess,
  showMyMoviesSuccess

}
