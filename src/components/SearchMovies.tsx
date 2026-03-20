import Poster from "./Poster";

export default function SearchMovies({ movie }) {
  return (
    <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto w-10/12 gap-10 pb-10 max-w-5xl">
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
