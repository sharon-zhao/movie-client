'use strict'
const config = require('../config')
const store = require('../store')

const showAllPerson = function(){
  return $.ajax({
   url:config.apiUrl + '/persons',
   method: 'GET',
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


const createPerson = function(data){
  return $.ajax({
   url:config.apiUrl + '/persons',
   method: 'POST',
   contentType:'application/json',
   data:JSON.stringify(data),
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroyPerson = function(id){
  return $.ajax({
   url:config.apiUrl + '/persons/' + id,
   method: 'DELETE',
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showPerson = function(id){
  return $.ajax({
   url:config.apiUrl + '/persons/' + id,
   method: 'GET',
   contentType:'application/json',
   data:JSON.stringify(id),
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePerson = function(data){
  return $.ajax({
   url:config.apiUrl + '/persons/' + data.person.id,
   method: 'PATCH',
   contentType:'application/json',
   data:JSON.stringify(data),
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}




module.exports = {
  showAllPerson,
  createPerson,
  destroyPerson,
  showPerson,
  updatePerson

}
