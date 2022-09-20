Design and build an app that displays a list of restaurants. Each restaurant has a name, cuisine type, and star ranking. The user should be able to search by restaurant name, filter restaurants by cuisine type, and sort by star ranking. This may be a web app or native app. The app does not need to be deployed anywhere but it should be able to run locally.

For the most part, I have designed this with the intention of simulating how an actual application would work.

Comments on everything

X results found

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


