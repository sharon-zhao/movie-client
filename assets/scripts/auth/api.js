'use strict'
const config = require('../config')
const store = require('../store')

const signUp = function(data){
  return $.ajax({
    url: config.apiUrl + "/sign-up",
    method: 'POST',
    data: data
  })
}

const signIn = function(data){
  return $.ajax({
    url: config.apiUrl + "/sign-in",
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  console.log(store.user)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function(){
  return $.ajax({
   url:config.apiUrl + '/sign-out',
   method: 'DELETE',
   headers:{
       Authorization:'Token token=' + store.user.token
     }
  })
}


const uploadFile = function(data){
  return $.ajax({
    url: config.apiUrl + "/uploads",
    method: 'POST',
    data: data,
    contentType: false,
    processData: false,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  uploadFile,
  changePassword,
  signOut
}
