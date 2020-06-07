'use strict'
const config = require('../config')
const store = require('../store')

const showMovie = function(){
  return $.ajax({
   url:config.apiUrl + '/movies',
   method: 'GET',
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


const createMovie = function(data){
  return $.ajax({
   url:config.apiUrl + '/movies',
   method: 'POST',
   contentType:'application/json',
   data:JSON.stringify(data)
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteMovie = function(id){
  return $.ajax({
   url:config.apiUrl + '/movies/' + id,
   method: 'DELETE',
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMovie = function(data){
  return $.ajax({
   url:config.apiUrl + '/movies/' + data.movie.id,
   method: 'PATCH',
   data: data,
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const movieShow = function(data){
  return $.ajax({
   url:config.apiUrl + '/movies/' + data.movie.id,
   method: 'GET',
   data: data,
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


module.exports = {

  showMovie,
  createMovie,
  deleteMovie,
  updateMovie,
  movieShow,

}
