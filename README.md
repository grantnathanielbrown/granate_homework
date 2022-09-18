Design and build an app that displays a list of restaurants. Each restaurant has a name, cuisine type, and star ranking. The user should be able to search by restaurant name, filter restaurants by cuisine type, and sort by star ranking. This may be a web app or native app. The app does not need to be deployed anywhere but it should be able to run locally.

I’m designing this with the premise that it is simulating how an app would really work.

Comments on everything

Add mock server?

Need input validation for search
Need loading spinner for search
X results found

For results, you store all results from search. Any reordering or filtering that happens, you clone the results then run those operations on the clone

TESTS

Basic text appears
SearchBar appears

Input phrase x into searchbar
-handleChange is called for each input
-valid inputs are actually displayed
-invalid inputs don’t work

Input phrase x into SearchBar, press Search
-little window mounts
-startSearch is called
-If startSearch gets called on SearchBar, LoadingSpinner mounts, then unmounts when SearchResults appear
-SearchResults commensurate with search phrase are displayed (use snapshot perhaps?)



COMPONENTS

App
Index
SearchBar
SearchResults?
RestaurantListing


