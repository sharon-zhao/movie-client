'use strict'

const store = require('../store')
const showPersonTemplate = require('../templates/persons.handlebars')
const showAllPersonTemplate = require('../templates/allperson.handlebars')
const api = require('./api')

 $('#info').hide()
 $('#message').hide()
 $('#2message').hide()
 $('#infomovietitle').hide()
 $('#create-person').hide()
 $('#item-1-2').hide()
 $('#createpeople').hide()
 $('#delete-person').hide()
 $('#item-1-3').hide()
 $('#deletepersons').hide()
 $('#update-person').hide()
 $('#item-1-4').hide()
 $('#updatepersons').hide()
 $('#show-person').hide()
 $('#item-1-5').hide()
 $('#showpersons').hide()
 $('#item-2-1').hide()


const showPersonSuccess = function(data){
   $('#info').show()
   $('#2message').show()
   $('#2message').text('show person success').css('color','green')
   const showPeopleHtml = showAllPersonTemplate({ persons: data.person })
   $('#info').html(showPeopleHtml)
}

const hidePersonSuccess = function(){
   $('#info').hide()
   $('#message').hide()

}

const showPersonFailure = function(error){
 $('#message').show()
 $('#message').text('show person failed').css('color','red')
 $('form').trigger('reset')
}


const showAllPerson = function(){
  $('#show1').show()
}

const personHideBarSuccess = function(){
  $('#show1').hide()
  $('#create-person').hide()
  $('#update-person').hide()
  $('#show-person').hide()
  $('#peopleresult').hide()

}

const personCreateSuccess = function(){
  $('#create-person').show()
  $('#createpeople').show()

}

const allPersonHideSuccess = function(){
  $('#create-person').hide()
  $('#item-1-2').hide()
  $('#createpeople').hide()
  $('#show1').hide()
  $('#create-person').hide()
  $('#update-person').hide()
  $('#show-person').hide()

}

const createPersonSuccess = function(data){
  $('#message').show()
  const createPersonHtml=showPersonTemplate({person: data.person})
  // $('#createpersons').text(JSON.stringify(data))
  $('#createpersons').html(createPersonHtml)
  $('#message').text('create person success').css('color','green')
  $('#item-1-2').show()
  $('form').trigger('reset')
  api.showAllPerson()
  .then(showPersonSuccess)
}

const createPersonFailure = function(error){
  $('#message').show()
  $('#message').text('create person failed').css('color','red')
  $('form').trigger('reset')
}

const personDestroyShowSuccess = function(){
  $('#delete-person').show()

}

const personDestroySuccess = function(throwaway, personid){
  $('#message').show()
  $('#item-1-3').show()
  $('#deletepersons').show()
  $('#deletepersons').text('Destroy OK')
  $('#message').text('destroy person success').css('color','green')
  $(`section[data-id=${personid}]`).remove()
  $('form').trigger('reset')
  api.showAllPerson()
  .then(showPersonSuccess)

}

const personDestroyFailure = function(data){
  $('#message').show()
  $('#deletepersons').show()
  $('#deletepersons').text('Sorry, you are not the owner of this person, you can not delete it').css('color' ,'red')
  $('#message').text('delete person failed').css('color','red')
  $('form').trigger('reset')
}


const upPersonSuccess = function(){
  $('#update-person').show()
  $('#delete-person').hide()
  $('#item-1-3').hide()
  $('#deletepersons').hide()
}

const personUpdateSuccess = function(data){
  // $('#update-person').show()
  $('#message').show()
  $('#updatepersons').show()
  $('#item-1-4').show()
  const updatePersonHtml=showPersonTemplate({person: data.person})
  $('#updatepersons').html(updatePersonHtml)
  // $('#updatepersons').text(JSON.stringify(data))
  $('#message').text('update person by id success').css('color','green')
  $('form').trigger('reset')
  api.showAllPerson()
  .then(showPersonSuccess)

}

const personUpdateFailure = function(data){
$('#message').show()
$('#message').text('update person by id failed').css('color','red')
$('form').trigger('reset')
}

const givePersonSuccess = function(){
  $('#show-person').show()
  $('#delete-person').hide()
  $('#item-1-3').hide()
  $('#deletepersons').hide()

}

const personShowSuccess = function(data){
  $('#message').show()
  $('#item-1-5').show()
  $('#showpersons').show()
  const showPersonHtml=showPersonTemplate({person: data.person})
  $('#showpersons').html(showPersonHtml)
  // $('#showpersons').text(JSON.stringify(data))
  $('#message').text('show person by id success').css('color','green')
  $('form').trigger('reset')
}

const personShowFailure = function(data){
  $('#message').show()
  // $('#deletepersons').text(JSON.stringify(data))
  $('#message').text('show person by id failed').css('color','red')
  $('form').trigger('reset')
}



module.exports = {
  showPersonSuccess,
  showPersonFailure,
  createPersonSuccess,
  createPersonFailure,
  hidePersonSuccess,
  personCreateSuccess,
  allPersonHideSuccess,
  personDestroySuccess,
  personDestroyFailure,
  personDestroyShowSuccess,
  personShowSuccess,
  personShowFailure,
  givePersonSuccess,
  personUpdateSuccess,
  personUpdateFailure,
  upPersonSuccess,
  showAllPerson,
  personHideBarSuccess
}
