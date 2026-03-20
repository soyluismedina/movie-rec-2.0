import Poster from "./Poster";

export default function SearchMovies({ movie }) {
  return (
    <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto w-11/12 gap-4 pb-12 max-w-7xl">
      {movie.map(
        ({ id, title, poster_path, vote_average }) =>
          poster_path && (
            <Poster
              key={id}
              id={id}
              poster_path={poster_path}
              title={title}
              vote_average={vote_average}
            />
          ),
      )}
    </section>
  );
}
