import FormSearch from "../../../components/FormSearch";
import Nav from "../../../components/Nav";
import SearchMovies from "../../../components/SearchMovies";
import { getSearchMovie } from "../../../services";
import { Suspense } from "react";

async function SearchResults({ movie }: { movie: string }) {
  const movieSearch = await getSearchMovie(movie);

  const bgImage = {
    backgroundImage:
      movieSearch.results.length > 1
        ? `url('https://image.tmdb.org/t/p/original/${movieSearch.results[0].backdrop_path}')`
        : 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/220px-Black_flag.svg.png")',
  };

  return (
    <>
      <div
        className="h-72 relative flex flex-col text-white bg-center bg-no-repeat bg-cover"
        style={bgImage}
      >
        <Nav />
        <div className="flex flex-col w-10/12 mx-auto z-20">
          <FormSearch />
          <p className="mt-5 text-center">
            Your search was <i>{`"${decodeURIComponent(movie)}"`}</i>
          </p>
        </div>
        <div className="bg-[#00000080] absolute h-full w-full z-10 top-0 right-0" />
      </div>
      {movieSearch.results.length > 0 ? (
        <SearchMovies movie={movieSearch.results} />
      ) : (
        <div>
          <p className=" mt-10 text-center">
            There is no results for your search
          </p>
        </div>
      )}
    </>
  );
}

export default async function MovieSearch(props: {
  params: Promise<{ movie: string }>;
}) {
  const params = await props.params;

  return (
    <main className="suspense-content">
      <Suspense
        fallback={<div className="loading-spinner">Searching movies...</div>}
      >
        <SearchResults movie={params.movie} />
      </Suspense>
    </main>
  );
}
