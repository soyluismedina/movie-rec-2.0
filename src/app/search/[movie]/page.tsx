import FormSearch from "../../../components/FormSearch";
import Nav from "../../../components/Nav";
import SearchMovies from "../../../components/SearchMovies";
import { getSearchMovie } from "../../../services";

export default async function MovieSearch(props: {
  params: Promise<{ movie: string }>;
}) {
  const params = await props.params;
  const movieSearch = await getSearchMovie(params.movie);

  const bgImage = {
    backgroundImage:
      movieSearch.results.length > 1
        ? `url('https://image.tmdb.org/t/p/original/${movieSearch.results[0].backdrop_path}')`
        : 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/220px-Black_flag.svg.png")',
  };

  return (
    <main>
      <div
        className="h-72 relative flex flex-col text-white bg-center bg-no-repeat bg-cover"
        style={bgImage}
      >
        <Nav />
        <div className="flex flex-col w-10/12 mx-auto z-20">
          <FormSearch />
          <p className="mt-5 text-center">
            Your search was <i>{`"${params.movie}"`}</i>
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
    </main>
  );
}
