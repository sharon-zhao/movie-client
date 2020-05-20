'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const movieEvents = require('./movie/event.js')
const uploadEvents = require('./uploads/events')
const authEvents = require('./auth/events')
const commentEvents = require('./comment/event')
const personEvents = require('./person/event')
// const movieEvents = require('./display/events')

$(() => {
$('#navbar1').on('click', authEvents.showSignUp)
$('#navbar2').on('click', authEvents.showSignIn)
$('#navbar3').on('click', authEvents.showChangePassword)



//auth
$('#sign-up').on('submit', authEvents.onSignUp)
$('#sign-in').on('submit', authEvents.onSignIn)
$('#change-password').on('submit', authEvents.onChangePassword)
$('#navbar4').on('click', authEvents.onSignOut)

  //image
$('#create-upload').on('submit', uploadEvents.onCreateUpload)
$('#chooseImage').on('change', uploadEvents.onStayUpload)
$('#changeBG').on('click', uploadEvents.onShowImage)
$('#infomovietitle').on('click', '.imagebtn', uploadEvents.onGetImage)

  //about person
$('#it1').on('click', personEvents.showAllPersonFunction)
$('#person').on('click',personEvents.onShowPerson)
$('#hideperson').on('click', personEvents.hidePerson)
$('#create-person').on('submit',personEvents.onCreatePerson)
$('#item1').on('click',personEvents.personCreate)
$('#hidepersonbar').on('click',personEvents.personHideBar)
$('#delete-peoples').on('click',personEvents.personDestroyShow)
$('#show-person').on('submit',personEvents.personShow)
$('#show-peoples').on('click',personEvents.givePerson)
$('#update-person').on('submit',personEvents.personUpdate)
$('#update-peoples').on('click',personEvents.upPerson)
$('#info').on('click', '.removebtnper', personEvents.personDestroy)

//about movies
$('#movie').on('click', movieEvents.onShowMovie)
$('#hidemovie').on('click', movieEvents.hideMovie)
$('#it2').on('click', movieEvents.showAllBookFunction)
$('#create-movies').on('click', movieEvents.showCreateMovie)
$('#create-movie').on('submit', movieEvents.onCreateMovie)
$('#delete-movies').on('click', movieEvents.showDeleteMovie)
$('#update-movies').on('click', movieEvents.showUpdateMovie)
$('#update-movie').on('submit', movieEvents.onUpdateMovie)
// $('#show-movies').on('click', movieEvents.showShowMovie)
$('#show-movie').on('submit', movieEvents.onMovieShow)
$('#infomovietitle').on('click', '.removebtn', movieEvents.onDeleteMovie)
$('#hidemoviefunc').on('click', movieEvents.hideMovieFunc)

//about comments
$('#it3').on('click', commentEvents.showAllCommentFunction)
$('#create-comments').on('click', commentEvents.showCreateComment)
$('#add-comments').on('submit', commentEvents.onCreateComment)
$('#destroycomment').on('click', commentEvents.showDeleteComment)
$('#updatecomment').on('click', commentEvents.showUpdateComment)
$('#update-comments').on('submit', commentEvents.onUpdateComment)
$('#infomovietitle').on('click', '.removebtnco', commentEvents.onDeleteComment)
$('#hidecomment').on('click', commentEvents.hideCommentFunc)

$('#upload-file').on('submit', authEvents.onUploadFile)

})
