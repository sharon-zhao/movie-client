'use strict'
const config = require('../config')
const store = require('../store')



const createComment = function(data){
  return $.ajax({
   url:config.apiUrl + '/comments',
   method: 'POST',
   contentType:'application/json',
   data:JSON.stringify(data),
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const deleteComment = function(movieid, commentid){
//   return $.ajax({
//    url:config.apiUrl + '/comments/' + movieid + '/' + commentid,
//    method: 'DELETE'
//   })
// }

const deleteComment = function(commentid){
  return $.ajax({
   url:config.apiUrl + '/comments/' + commentid,
   method: 'DELETE',
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateComment = function(data){
  const movieid = data.comment.movie_id
  const commentid = data.comment.comment_id
  delete data.comment.comment_id
  delete data.comment.movie_id
  return $.ajax({
   url:config.apiUrl + '/comments/' + movieid + '/' + commentid,
   method: 'PATCH',
   data: data,
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createComment,
  deleteComment,
  updateComment
}
