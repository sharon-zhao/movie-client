'use strict'

const store = require('../store')
const commentTemplate = require('../templates/comment.handlebars')
const showMovieTemplate = require('../templates/showmovie.handlebars')
const updateCommentTemplate = require('../templates/updatecomment.handlebars')
const movieEvent = require('./../movie/event')

 $('#add-comments').hide()
 $('#comments').hide()
 $('#item-3').hide()
 $('#delete-movie').hide()
 $('#item-2-2').hide()
 $('#deletemovie').hide()
 $('#update-movie').hide()
 $('#item-2-3').hide()
 $('#updatemovie').hide()
 // $('#show-movie').hide()
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
  $('#deletecomment').show()
  $('#deletecomment').text("Delete your comment success!").css('color','green')
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

// const updateCommentSuccess = function(data){
//   $('#item-3-2').show()
//   $('#updatecomments').show()
//   $('#message').show()
//   $('#updatecommentfail').text('update comment success').css('color','green')
//   $('#updatecomments').html(updateCommentTemplate({ comment: data.comment}))
//   // $('#updatecomments').text(JSON.stringify(data))
//   $('form').trigger('reset')
//   movieEvent.onShowMovie()
// }

const updateCommentSuccess = function(){
  $('#message').show()
  $('#updatecommentfail').text('update comment success, see below movies').css('color','green')
  movieEvent.onShowMovie()
}

const updateCommentFailure = function(error){
  $('#updatecommentfail').show()
  $('#updatecommentfail').text('You can not update comments which are not yours').css('color','red')
}

const hideCommentFuncSuccess = function(){
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
