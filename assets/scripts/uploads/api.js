const config = require('../config')
const store = require('../store')

const createUpload = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/uploads',
    method: 'POST',
    data: formData,
    headers: {
       Authorization: 'Token token=' + store.user.token
     },
    // To send multipart/form-data, set the contentType to false
    // so $.ajax does not set the content type itself
    contentType: false,
    // To make sure that $.ajax does not treat our file data as a query string
    // we set processData to false
    processData: false
  })
}

const showImage = function(){
  return $.ajax({
   url:config.apiUrl + '/uploads',
   method: 'GET',
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getImage = function(data){
  return $.ajax({
   url:config.apiUrl + '/uploads/' + data,
   method: 'GET',
   contentType:'application/json',
   data:JSON.stringify(data),
   headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createUpload,
  showImage,
  getImage
}
