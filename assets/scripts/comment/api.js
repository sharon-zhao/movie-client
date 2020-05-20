'use strict'
const config = require('../config')
const store = require('../store')



const createComment = function(data){
  return $.ajax({
   url:config.apiUrl + '/comments',
   method: 'POST',
   contentType:'application/json',
   data:JSON.stringify(data)
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
   method: 'DELETE'
  })
}

const updateComment = function(data){
  return $.ajax({
   url:config.apiUrl + '/comments/' + data.comment.movie_id + '/' + data.comment.comment_id,
   method: 'PATCH',
   contentType:'application/json',
   data:JSON.stringify(data)
  })
}

module.exports = {
  createComment,
  deleteComment,
  updateComment
}
