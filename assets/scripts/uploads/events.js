const ui = require('./ui')
const api = require('./api')


const onGetImage = function(event){
  event.preventDefault()
  const id = $(event.target).data('id')
  api.getImage(id)

}

const onCreateUpload = function (event) {
  event.preventDefault()
  const form = event.target
  // To send multipart/form-data (images/files)
  // we need to wrap the html form in a FormData object
  const formData = new FormData(form)
  api.createUpload(formData)
    .then(ui.onCreateUploadSuccess)
    .catch(ui.onCreateUploadFailure)
}


const onShowImage = function(){
  api.showImage()
   .then(ui.tryShowImage)
   .catch(ui.tryShowImageFailure)
}


module.exports = {
  onCreateUpload,
  onShowImage,
  onGetImage
}
