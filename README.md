# Doka Case Study - Cihan Alp İncir

This application for Doka Bilişim Case Study.

DEMO
------
https://cihannos.github.io/doka-case-study/

Project Details
------
This case study made with React.
The time spent doing the project is 6 hours.
The time spent solving the Github pages react router issue is 14 hours.


Homepage And Search
------
-We have a homepage and our homepage lists major movies.
-You can search for a movie if you want.
-The pagination component is updated depending on the number of results according to the movie title you searched for.
-It does this without refreshing the page.
-Of course, you can use the search and page url parameters to reach the outside with a single url.

API Call and display 20 data
------
Omdb API returns us 10 movies in each API call.
I create a 2-time API request to display 20 movies on the page.
And when calculating a url page parameter, a request is made with 1 more.
For example, you searched for "the war of" in this application and there is a total of 65 pages of data.
In fact, this data is actually 130 pages of data.
But the app throws 2 page requests for each page.
For example, you are on page five and have gone to page six, the system automatically gets the data of pages 6 and 7.

Cache
------
Another feature is the cache structure.
When you look at a movie, the cache structure first checks the local memory with the imdb id of that movie.
If it does not exist, it makes an API call for the movie and saves the movie data as a javascript object in the local memory with its imdb id.
If there is, it gets the movie data from local data instead of requesting it and prints it to the screen.
