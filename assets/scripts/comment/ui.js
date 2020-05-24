'use strict'

const store = require('../store')
const commentTemplate = require('../templates/comment.handlebars')
const showMovieTemplate = require('../templates/showmovie.handlebars')
const updateCommentTemplate = require('../templates/updatecomment.handlebars')
const movieEvent = require('./../movie/event')

 $('#add-comments').hide()
 $('#comments').hide()
 $('#item-3').hide()
 $('#show1').hide()
 $('#show2').hide()
 $('#show3').hide()
 $('#delete-movie').hide()
 $('#item-2-2').hide()
 $('#deletemovie').hide()
 $('#update-movie').hide()
 $('#item-2-3').hide()
 $('#updatemovie').hide()
 $('#show-movie').hide()
 $('#item-2-4').hide()
 $('#showmovie').hide()
 $('#delete-comment').hide()
 $('#item-3-1').hide()
 $('#deletecomment').hide()
 $('#update-comments').hide()
 $('#item-3-2').hide()
 $('#updatecomments').hide()


const showAllComment = function(){
     $('#show3').show()
}

const showCreateCommentSuccess = function(){
   $('#add-comments').show()

}

const createCommentSuccess = function(data){
  $('#message').show()
  $('#comments').show()
  $('#item-3').show()
  $('#comments').html(commentTemplate({ comment: data.movie.comments[data.movie.comments.length - 1] }))
// const showCommentHtml = commentTemplate({ comment: data.movie.comments[data.movie.comments.length - 1] })

  // $('#comments').text(JSON.stringify(data))
  $('#message').text('create comments success').css('color','green')
  $('form').trigger('reset')
  movieEvent.onShowMovie()
}

const createCommentFailure = function(error){
  $('#message').show()
  $('#message').text('create comments failed').css('color','red')
  $('form').trigger('reset')
}

const showDeleteCommentSuccess = function(){
 $('#delete-comment').show()
}

const deleteCommentSuccess = function(commentid){
  $('#message').show()
  $('#deletecomment').show()
  $('#message').text('destroy comment success').css('color','green')
  $('#deletecomment').text("deleted")
  $(`section[data-id=${commentid}]`).remove()
  movieEvent.onShowMovie()

}

const deleteCommentFailure = function() {
  $('#deletecomment').show()
  $('#deletecomment').text("Sorry, you are not the owner of this comment, you can't delete it").css('color','red')
}

const showUpdateCommentSuccess = function(){
    $('#update-comments').show()
}

const updateCommentSuccess = function(data){
  $('#item-3-2').show()
  $('#updatecomments').show()
  $('#message').show()
  $('#message').text('update comment success').css('color','green')
  $('#updatecomments').html(updateCommentTemplate({ comment: data.comment}))
  // $('#updatecomments').text(JSON.stringify(data))
  $('form').trigger('reset')
  movieEvent.onShowMovie()

}

const updateCommentFailure = function(error){
  $('#message').show()
  $('#message').text('update comment failed').css('color','red')
}

const hideCommentFuncSuccess = function(){
  $('#show3').hide()
  $('#add-comments').hide()
  $('#update-comments').hide()
  $('#commentresult').hide()
}

module.exports = {
  showAllComment,
  showCreateCommentSuccess,
  createCommentSuccess,
  createCommentFailure,
  showDeleteCommentSuccess,
  deleteCommentSuccess,
  showUpdateCommentSuccess,
  updateCommentSuccess,
  updateCommentFailure,
  hideCommentFuncSuccess,
  deleteCommentFailure

}
