# About Movie BookMarker

## Data Source

- Trending Movies : They are sourced from TMDB API
  - Data that we get from TMDB API
    - Movie Img source
    - Movie name
    - Genre-> Type of movie
    - Rating
    - Popular

## Features (Product Team)

- Pages : We have two pages
  - Main Page: List of movies
    - Header : Movies,Favorites
    - Banner-> Banner of first movie
    - List of trending movies
    - Pagination
  - Favourites: Bookmarked Movies
    - Header
    - GroupBy Genre
    - SearchBar,Number of items modifier (How many movies must appear on each page)
    - Sort
    - List of Favourite Movies
      - Movie Name
      - Image
      - Rating
      - Popularity
      - Delete from Favourites
    - Pagination

## Technical Pre-requisites (Engineer Manager)

- How to make a (AJAX)request in react and render the data in UI
  - React -> Lifecycle Methods
- Favourite Page Features that are highly used:
  - Pagination,
  - Group By,
  - Sorting,
  - Searching,
- Multiple Pages -> Routing
- Practice : Communication between multiple components
- Sending data from one page to another.
- TailWind: Tailwind is better than Bootstrap

## UseEffect All 3 Variations

```function hookCheck() {
  let [count, setCount] = useState(0);
  let [count5, setCount5] = useState(0);
  console.log("component is executed");
  /*
  // 1 variation
  useEffect(() => {
    console.log("useEffect is executed");
  }, []);
  //2 variation
  useEffect(() => {
    console.log("useEffect is executed");
  });
  */
  //3 Variaion
  useEffect(() => {
    console.log("useEffect is executed");
  }, [count]);
  return (
    <>
      {console.log("render is done")}
      <h1>Hello</h1>
      <div>Count</div>
      <button onClick={() => { setCount(count + 1);}}>+</button>
      <div>Count5</div>
      <button onClick={() => {setCount5(count5 + 5);}}>+5
      </button>
    </>
  );
}
```

## How to get TMDB API for trending movies

- Go to website

  - [Click Me](https://www.themoviedb.org/)
  - signUp on TMDB
  - Verify your Email ID
  - Click on right side located profile pic and go to settings page
  - From there click on left side located API tab
  - Follow these steps
    - create
    - developer
    - request api
    - fill the form
    - You will get an api key

- Now, go to this website -[Click Me](https://developers.themoviedb.org/3)
  - search for trending
  - put your api key
    - select media -> movies
    - time_window -> week
  - Then you will get the link to get trending movies
    - copy it and use it in useEffect() hook.
