'use strict'
const config = require('../config')
const store = require('../store')

const showAllPerson = function(){
  return $.ajax({
   url:config.apiUrl + '/persons',
   method: 'GET'
  })
}


const createPerson = function(data){
  return $.ajax({
   url:config.apiUrl + '/persons',
   method: 'POST',
   contentType:'application/json',
   data:JSON.stringify(data)
  })
}

const destroyPerson = function(id){
  return $.ajax({
   url:config.apiUrl + '/persons/' + id,
   method: 'DELETE'
  })
}

const showPerson = function(id){
  return $.ajax({
   url:config.apiUrl + '/persons/' + id,
   method: 'GET',
   contentType:'application/json',
   data:JSON.stringify(id)
  })
}

const updatePerson = function(data){
  return $.ajax({
   url:config.apiUrl + '/persons/' + data.person.id,
   method: 'PATCH',
   contentType:'application/json',
   data:JSON.stringify(data)
  })
}




module.exports = {
  showAllPerson,
  createPerson,
  destroyPerson,
  showPerson,
  updatePerson

}
