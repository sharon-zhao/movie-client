'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const showMyMovies = function(event){
  const myId = store.user._id
  api.showMovie()
  .then(data => {
    const movies = data.movies
    return movies.filter(movie => movie.author === myId)
  })
  .then(movie => ui.showMyMoviesSuccess(movie))
  .catch(ui.showMyMoviesFailure)
}

const onShowMovie = function(event){
  api.showMovie()
   .then(ui.showMovieSuccess)
   .catch(ui.showMovieFailure)
}
const hideMovie = function(event){
  ui.hideMovieSuccess()
}



const showAllBookFunction = function(){
  ui.showAllBook()
}

const showCreateMovie = function(){
  ui.showCreateMovieSuccess()
}

const onCreateMovie = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createMovie(formData)
   .then(ui.createMovieSuccess)
   .catch(ui.createMovieFailure)
}

const showDeleteMovie = function(event){
  ui.showDeleteMovieSuccess()
}

// const onDeleteMovie = function(event){
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.deleteMovie(formData.movie.id)
//    .then(ui.deleteMovieSuccess)
//    .catch(ui.deleteMovieFailure)
//
// }

const onDeleteMovie = (event)=>{
   event.preventDefault()
   const id = $(event.target).data('id')
   api.deleteMovie(id)
    .then(data => ui.deleteMovieSuccess(data, id))
    .catch(ui.deleteMovieFailure)
}

const showUpdateMovie = function(event){
  ui.showUpdateMovieSuccess()
}

const onUpdateMovie = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateMovie(formData)
   .then(ui.movieUpdateSuccess(formData))
   .catch(ui.movieUpdateFailure)
}

const showShowMovie = function(event){
 ui.showShowMovieSuccess()
}

// const onMovieShow = function(event){
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.movieShow(formData)
//    .then(ui.movieShowSuccess)
//    .catch(ui.movieShowFailure)
// }

const onMovieShow = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const movieTitle = formData.movie.title.toUpperCase()
  api.showMovie()
   .then(data =>
     data.movies.filter(movie => movie.title.toUpperCase() == movieTitle)
   )
   .then(movie =>ui.movieShowSuccess(movie))
   .catch(ui.movieShowFailure)
}

const hideMovieFunc = function(event){
  ui.hideMovieFuncSuccess()
}



module.exports = {

  onShowMovie,
  hideMovie,
  showAllBookFunction,
  showCreateMovie,
  onCreateMovie,
  showDeleteMovie,
  onDeleteMovie,
  showUpdateMovie,
  onUpdateMovie,
  showShowMovie,
  onMovieShow,
  hideMovieFunc,
  showMyMovies

}
