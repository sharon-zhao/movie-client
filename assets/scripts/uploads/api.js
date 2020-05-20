const config = require('../config')
const createUpload = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/uploads',
    method: 'POST',
    data: formData,
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
   method: 'GET'
  })
}

const getImage = function(data){
  console.log(data)
  return $.ajax({
   url:config.apiUrl + '/uploads/' + data,
   method: 'GET',
   contentType:'application/json',
   data:JSON.stringify(data)
  })
}

module.exports = {
  createUpload,
  showImage,
  getImage
}
