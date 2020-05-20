'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')


const showAllCommentFunction = function(event){
  ui.showAllComment()
}

const showCreateComment = function(event){
  ui.showCreateCommentSuccess()
}

const onCreateComment = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createComment(formData)
   .then(ui.createCommentSuccess)
   .catch(ui.createCommentFailure)
}

const showDeleteComment = function(event){
 ui.showDeleteCommentSuccess()
}

// const onDeleteComment = function(event){
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.deleteComment(formData.movie.id, formData.comment.id)
//    .then(ui.deleteCommentSuccess)
//    .catch(ui.deleteCommentFailure)
// }

const onDeleteComment = function(event){
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteComment(id)
   .then(ui.deleteCommentSuccess(id))
   .catch(ui.deleteCommentFailure)
}

const showUpdateComment = function(event){
  ui.showUpdateCommentSuccess()
}

const onUpdateComment = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateComment(formData)
   .then(ui.updateCommentSuccess(formData))
   .catch(ui.updateCommentFailure)
}

const hideCommentFunc = function(event){
  ui.hideCommentFuncSuccess()
}

module.exports = {
  showAllCommentFunction,
  showCreateComment,
  onCreateComment,
  onDeleteComment,
  showDeleteComment,
  onUpdateComment,
  showUpdateComment,
  showAllCommentFunction,
  hideCommentFunc
}
