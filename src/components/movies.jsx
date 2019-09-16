import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: { path: "Title", order: "asc" }
  };
  handleDelete = movie => {
    console.log(movie);

    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  componentDidMount() {
    const allGenres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: allGenres });
  }

  handleLike = movie => {
    const movies = this.state.movies;
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(g => g.genre.name === selectedGenre.name)
        : allMovies;

    const sortedMovies = _.orderBy(
      filtered,
      [sortColumn.path],
      [sortColumn.order]
    );
    const moviesLength = sortedMovies.length;
    console.log("moviesLength " + moviesLength);

    const movies = paginate(sortedMovies, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {moviesLength} movies in the database</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={moviesLength}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
