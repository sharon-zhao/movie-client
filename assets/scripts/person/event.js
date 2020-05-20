'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')


const onShowPerson = function(event){
  api.showAllPerson()
   .then(ui.showPersonSuccess)
   .catch(ui.showPersonFailure)
}

const hidePerson = function(event){
  ui.hidePersonSuccess()
}


const showAllPersonFunction = function(event){
  ui.showAllPerson()
}

const personHideBar = function(event){
  ui.personHideBarSuccess()
}

const onCreatePerson = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createPerson(formData)
   .then(ui.createPersonSuccess)
   .catch(ui.createPersonFailure)
}

const personCreate = function (event){
  ui.personCreateSuccess()
}

const allPersonHide = function(event){
  ui.allPersonHideSuccess()
}

const personDestroyShow = function(event){
  ui.personDestroyShowSuccess()
}


const personDestroy = function(event){
  event.preventDefault()
  const id = $(event.target).data('id')
  api.destroyPerson(id)
   .then(data => ui.personDestroySuccess(data, id))
   .catch(ui.personDestroyFailure)
}

const personShow = function (event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.showPerson(formData.person.id)
   .then(ui.personShowSuccess)
   .catch(ui.personShowFailure)
}

const givePerson = function(event){
  ui.givePersonSuccess()
}

const upPerson = function(event){
  ui.upPersonSuccess()
}

const personUpdate = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updatePerson(formData)
   .then(ui.personUpdateSuccess(formData))
   .catch(ui.personUpdateFailure)
}


module.exports = {
  onShowPerson,
  hidePerson,
  onCreatePerson,
  personCreate,
  allPersonHide,
  personDestroy,
  personDestroyShow,
  personShow,
  givePerson,
  personUpdate,
  upPerson,
  showAllPersonFunction,
  personHideBar
}
