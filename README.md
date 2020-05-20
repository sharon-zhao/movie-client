# Movie Library Project
## Technologies used:
- HTML
- CSS(scss)
- Javascript
- Jquery
- Ajax
- Json
- cURL
- mongoose
- mongodb, heroku, AWS

## Planning
- Write comment router and schema
- Test all the function in back-end is ok
- Build front-end HTML
- Add function to target elements
- Add upload image funtion on the back-end, and test if it works
- Make proper front-end upload image input and button
- Set up the show image function on the back-end
- Put change background function to front-end
## As a user:
- I want to see all my movies in the library, and can add comment to each movie.
- I can delete update and show some specific element
- I'd like to put image on each book as coversheet
## Wireframes
- https://user-images.githubusercontent.com/62820094/82355432-3171a480-99d0-11ea-9d91-d8843d5f6db0.jpeg
- https://user-images.githubusercontent.com/62820094/82355466-3fbfc080-99d0-11ea-8316-cc2067f121d6.jpeg
- https://user-images.githubusercontent.com/62820094/82355495-477f6500-99d0-11ea-91b1-1b08a183003c.jpeg

## Story about process
This project looks not that difficult, but it contains a lot of tricky problems.
Fist, the methods upload delete of the comment are not similar as the methods of movie and person, since the comment is subelement of movie. All the action of comment should under the parent scope of movie, if you want to delete the comment only by id of comment, you have to loop the movies object then filter the comment id. However, we only learned how to use forEach in array, how to loop object is tough problem.

Second, change the background using upload image is the other challenge. The images upload to s3 database, in the beginning I am not quite understand how to use this database, so I don't know how to get the data. I recheck the step of upload image to figure out how to use it then write the router of getting image on the back-end. Now it's ok to get image, you may think it's easy on the front-end. That's wrong, put image in HTML is easy, but using function to set background is the first time I've done. I don't know how to describe my issue, so it's hard to search the proper solution online. However, I still find the way to solve the problem, just spend more time.

## Unsolved Problems
- let users add image to each book
