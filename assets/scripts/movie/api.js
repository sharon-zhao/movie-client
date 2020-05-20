'use strict'
const config = require('../config')
const store = require('../store')


const showMovie = function(){
  return $.ajax({
   url:config.apiUrl + '/movies',
   method: 'GET'
  })
}


const createMovie = function(data){
  return $.ajax({
   url:config.apiUrl + '/movies',
   method: 'POST',
   contentType:'application/json',
   data:JSON.stringify(data)
  })
}

const deleteMovie = function(id){
  return $.ajax({
   url:config.apiUrl + '/movies/' + id,
   method: 'DELETE'
  })
}

const updateMovie = function(data){
  return $.ajax({
   url:config.apiUrl + '/movies/' + data.movie.id,
   method: 'PATCH',
   contentType:'application/json',
   data:JSON.stringify(data)
  })
}

const movieShow = function(data){
  return $.ajax({
   url:config.apiUrl + '/movies/' + data.movie.id,
   method: 'GET',
   contentType:'application/json',
   data:JSON.stringify(data)
  })
}


module.exports = {

  showMovie,
  createMovie,
  deleteMovie,
  updateMovie,
  movieShow,

}
