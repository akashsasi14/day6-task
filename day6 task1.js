class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  

  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  

  const movies = [
    new Movie("Movie A", "Studio A", "PG"),
    new Movie("Movie B", "Studio B", "R"),
    new Movie("Movie C", "Studio C", "PG-13"),
    new Movie("Movie D", "Studio D", "PG"),
  ];
  

  const pgMovies = Movie.getPG(movies);
  console.log("Movies with a rating of 'PG':", pgMovies);
  
 
  console.log(casinoRoyale);
  