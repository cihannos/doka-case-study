# Doka Case Study

This application for Doka Bilişim, made with React.

Demo
-----
https://cihannos.github.io/doka-case-study/

Project Details
-----
This app made with React.
It took 6 hours to build.
It took 14 hours to fix the React BrowserRoute issue on Github pages.


Usage
-----
The most prominent movies are displayed when the application is installed.
You can search for the movies you want using the search section.
Search component after the content changes (not with enter key), if there is no change, it will receive the movie data after 1000ms.
3 movies per row and 20 movies total on the page (if there are enough movies).

Getting 20 movie data
-----
The API returns 10 movie data for each call.
So I used the API Call with 2 Page data to be able to display 20 movies on the page.
For example, I search for "the war of" and it shows me 65 pages of data.
Actually, there are exactly 130 pages of data, because in each call I get the data of the current page and the next page, so 2 pages in total.
For example, when we go to page 5, the system will get the data of page 5 and page 6. That's why data from 130 pages downs to 65 pages.

Caching Data
-----
Of course we need to use local memory to reduce API calls.
When you open a movie, the system first checks the local memory instead of making a call.
If it finds a data belonging to the imdb id of the movie, it shows the movie data from an object in the local memory and does not make any calls.
If not, it first creates an API call and then saves a javascript object of movie data as "movie-/imdbid/" in local memory.And it shows the movie data from the api call.

Getting source code or want edit
-----
Anyone who wants to view and edit source files can download editable-react.zip.
And it should install several npm packages (one of them is axios)

