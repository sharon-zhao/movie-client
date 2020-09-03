const store = require('../store')

$('#sign-up').hide()
$('#sign-in').hide()
$('#change-password').hide()
$('#sign-out').hide()
$('#navbar3').hide()
$('#navbarDropdown').hide()
$('#navbar4').hide()
// $('#show-movie').hide()
$('.bd-example-command').hide()
$('#hideimage').hide()
$('#navbar5').hide()

const showSignUpSuccess = function(){
$('#sign-up').show()
}

const signUpSuccess = function (data){
   $('#mess').text('Signed up Successfully').css('color', 'green')
   $('#mess').removeClass()
   $('#mess').addClass('Success')
   $('#sign-up').hide()
   $('#sign-in').show()
   $('form').trigger('reset')


}
const signUpFailure = function (error){

   $('#mess').text('Signed up failed').css('color', 'red')
   $('#mess').removeClass()
   $('#mess').addClass('failure')
   // $('form').trigger('reset')
}

const showSignInSuccess = function(){
   $('#sign-in').show()
}

const signInSuccess = function (data){

   $('#mess').text('Signed in Successfully').css('color', 'green')
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
   $('#navbar1').hide()
   $('#navbar2').hide()
   $('#navbar5').show()
   $('#test').hide()

}

const signInFailure = function (error){

   $('#mess').text('Signed in failed').css('color', 'red')
   $('#mess').removeClass()
   $('#mess').addClass('failure')
   $('form').trigger('reset')
}

const showChangePasswordSuccess =function(){
   $('#change-password').show()
}

const changePasswordSuccess = function (data){

   $('#mess').text('changed password in Successfully').css('color', 'green')
   $('#mess').removeClass()
   $('#mess').addClass('Success')
   $('form').trigger('reset')
   $('#change-password').hide()

}
const changePasswordFailure = function (error){

   $('#mess').text('change Password failed').css('color', 'red')
   $('#mess').removeClass()
   $('#mess').addClass('failure')
   $('form').trigger('reset')
}



const signOutSuccess = function (data){
   $('#mess').text('sign out Successfully').css('color', 'green')
   $('#mess').removeClass()
   $('#mess').addClass('Success')
   store.user = null
   $('form').trigger('reset')
   $('#change-password').hide()
   $('#sign-out').hide()
   $('#navbar3').hide()
   $('#navbarDropdown').hide()
   $('#navbar4').hide()
   $('#show-movie').hide()
   $('.bd-example-command').hide()
   $('#hideimage').hide()
   $('#navbar5').hide()
   $('#navbar1').show()
   $('#navbar2').show()
   $('#test').show()

}

const signOutFailure = function (error){

   $('#mess').text('sign out failed').css('color', 'red')
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
