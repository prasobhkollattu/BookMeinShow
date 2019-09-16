const movies = [
  {
    _id: "12345",
    title: "Terminator",
    genre: { _id: "212345", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "12346",
    title: "Die Hard",
    genre: { _id: "212346", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 2.9,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "12348",
    title: "Get Out",
    genre: { _id: "212347", name: "Action" },
    numberInStock: 2,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "12349",
    title: "Airplane",
    genre: { _id: "212348", name: "Action" },
    numberInStock: 9,
    dailyRentalRate: 4.1,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "123410",
    title: "Trip to Italy",
    genre: { _id: "212349", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "123411",
    title: "Gone Girl",
    genre: { _id: "2123410", name: "Comedy" },
    numberInStock: 8,
    dailyRentalRate: 2.2,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "123412",
    title: "Wedding Crashers",
    genre: { _id: "2123411", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "123413",
    title: "The Sixth Sense",
    genre: { _id: "2123412", name: "Action" },
    numberInStock: 4,
    dailyRentalRate: 5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "123414",
    title: "The Avengers",
    genre: { _id: "2123413", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}
