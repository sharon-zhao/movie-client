
const tryShowImage = function(data){
  const imageUrl=data.uploads[data.uploads.length -1].imageUrl
  $('body').css("background-image", "url(" + imageUrl + ")")
  $('#messages').hide()

}


const tryShowImageFailure=function(error){
  $('#messa').text('error')

}


const onCreateUploadSuccess = function (responseData) {
  const imgHtml = `
    <img src="${responseData.upload.imageUrl}">
  `
  $('#messages').html(imgHtml)

}

const onCreateUploadFailure = function(error){

}

module.exports = {
  onCreateUploadSuccess,
  onCreateUploadFailure,
  tryShowImage,
  tryShowImageFailure
}
