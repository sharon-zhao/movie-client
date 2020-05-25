'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const imageEvents= require('../uploads/events')

const showSignUp = function(event){
  ui.showSignUpSuccess()
}

const onSignUp = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
   .then(ui.signUpSuccess)
   .catch(ui.signUpFailure)
}

const showSignIn = function(event){
  ui.showSignInSuccess()
}

const onSignIn = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
   .then(ui.signInSuccess)
   .catch(ui.signInFailure)


}

const showChangePassword = function(event){
  ui.showChangePasswordSuccess()
}

const onChangePassword = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
   .then(ui.changePasswordSuccess)
   .catch(ui.changePasswordFailure)
}


const onSignOut = function(event){

  event.preventDefault()
  api.signOut()
   .then(ui.signOutSuccess)
   .catch(ui.signOurFailure)

}

const onUploadFile = function(event) {
  event.preventDefault()
  const form = event.target
  const data = new FormData(form)

  for ( let i of data) {
  }
  api.uploadFile(data)
    .then(ui.onUploadFileSuccess)
    .catch(ui.onUploadFileFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onUploadFile,
  onChangePassword,
  onSignOut,
  showSignUp,
  showSignIn,
  showChangePassword,

}
