### How to use `getFormFields`

To be able to send data to an API, we'll need a way to retrieve that data from
forms in the DOM. It turns out that needing to grab some user
input and send it to the API is a very common problem in front-end web
development.

To help solve that problem, we've included a function called `getFormFields` in
this template. Let's take a look at how to use that function. In this example,
the user is inputting information about a movie.

First, your `<input>`s will need to be wrapped in a `<form>`, like this:

```html
<form id="create-movie">
  <input name="movie[title]" type="text">
  <input name="movie[director]" type="text">
  <button type="submit">Create Movie</button>
</form>
```
Then, in your Javascript, you'd do something like this:

```js
const getFormFields = require('<path to lib>/get-form-fields.js')

$('#create-movie').on('submit', function (event) {
  event.preventDefault()

  const form = event.target
  const movieData = getFormFields(form)
})
```

Then, the `movieData` variable would look like this:

```js
{
  movie: {
    title: "<whatever was entered in the title input >",
    director: "<whatever was entered in the director input>"
  }
}
```

Note that in your projects, the code above will be spread out over several
files.
