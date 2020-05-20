const store = require('../store')

$('#start-button').hide()
$('.container').hide()
$('.number').hide()
$('#sign-up').hide()
$('#sign-in').hide()
$('#change-password').hide()
$('#sign-out').hide()
$('#navbar3').hide()
$('#navbarDropdown').hide()
$('#navbar4').hide()
$('#show-movie').hide()
$('.bd-example-command').hide()
$('#hideimage').hide()


const showSignUpSuccess = function(){
$('#sign-up').show()
}

const signUpSuccess = function (data){
   $('#mess').text('Signed up Successfully')
   $('#mess').removeClass()
   $('#mess').addClass('Success')
   $('#sign-up').hide()
   $('#sign-in').show()
   $('form').trigger('reset')


}
const signUpFailure = function (error){

   $('#mess').text('Signed up failed')
   $('#mess').removeClass()
   $('#mess').addClass('failure')
   // $('form').trigger('reset')
}

const showSignInSuccess = function(){
   $('#sign-in').show()
}

const signInSuccess = function (data){

   $('#mess').text('Signed in Successfully')
   $('#mess').removeClass()
   $('#mess').addClass('Success')
   store.user = data.user
   $('form').trigger('reset')
   $('#navbar3').show()
   $('#navbar4').show()
   $('#navbarDropdown').show()
   $('#sign-in').hide()
   $('#show-movie').show()
   $('#sign-up').hide()
   $('.bd-example-command').show()
   $('#hideimage').show()


}

const signInFailure = function (error){

   $('#mess').text('Signed in failed')
   $('#mess').removeClass()
   $('#mess').addClass('failure')
   $('form').trigger('reset')
}

const showChangePasswordSuccess =function(){
   $('#change-password').show()
}

const changePasswordSuccess = function (data){

   $('#mess').text('changed password in Successfully')
   $('#mess').removeClass()
   $('#mess').addClass('Success')
   $('form').trigger('reset')
   $('#change-password').hide()

}
const changePasswordFailure = function (error){

   $('#mess').text('change Password failed')
   $('#mess').removeClass()
   $('#mess').addClass('failure')
   $('form').trigger('reset')
}



const signOutSuccess = function (data){
   $('#mess').text('sign out Successfully')
   $('#mess').removeClass()
   $('#mess').addClass('Success')
   store.user = null
   $('form').trigger('reset')
}

const signOutFailure = function (error){

   $('#mess').text('sign out failed')
   $('#mess').removeClass()
   $('#mess').addClass('failure')

}

const onUploadFileSuccess = function(response){
  $('#mess').html(`<img src="${response.upload.imageUrl}" >`)
}

const onUploadFileFailure = function(response){
  $('#mess').text('Upload failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  onUploadFileFailure,
  onUploadFileSuccess,
  showSignUpSuccess,
  showSignInSuccess,
  showChangePasswordSuccess,

}
