import FormSearch from "@components/FormSearch";
import Nav from "@components/Nav";
import SearchMovies from "@components/SearchMovies";
import { getSearchMovie } from "@services/index";
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
        className="h-96 relative flex flex-col text-white bg-center bg-no-repeat bg-cover"
        style={bgImage}
      >
        <Nav />
        <div className="flex flex-col items-center justify-center w-10/12 mx-auto z-20 h-full">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce">🎬</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {decodeURIComponent(movie)}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Discover movies, reviews, and more
            </p>
          </div>
          <div className="mt-8 w-full max-w-md">
            <FormSearch />
          </div>
        </div>
        <div className="bg-linear-to-t from-black via-black/80 to-transparent absolute h-full w-full z-10 top-0 right-0" />
      </div>

      {movieSearch.results.length > 0 ? (
        <div className="py-16 bg-linear-to-br from-gray-50 to-gray-100">
          <div className="w-11/12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Search Results
              </h2>
              <p className="text-gray-600 text-lg">
                Found {movieSearch.results.length} movies matching your search
              </p>
            </div>
            <SearchMovies movie={movieSearch.results} />
          </div>
        </div>
      ) : (
        <div className="py-24 bg-linear-to-br from-gray-50 to-gray-100">
          <div className="text-center">
            <div className="text-8xl mb-8 animate-pulse">🎬</div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              No Movies Found
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              We couldn't find any movies matching "{decodeURIComponent(movie)}
              ". Try searching for a different title, check your spelling, or
              explore our popular categories below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold mb-2">Action</h3>
                <p className="text-gray-600 text-sm">
                  Explosive adventures and thrilling chases
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">😂</div>
                <h3 className="text-lg font-semibold mb-2">Comedy</h3>
                <p className="text-gray-600 text-sm">
                  Laugh-out-loud moments and feel-good stories
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-lg font-semibold mb-2">Romance</h3>
                <p className="text-gray-600 text-sm">
                  Heartwarming love stories and emotional journeys
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">👽</div>
                <h3 className="text-lg font-semibold mb-2">Sci-Fi</h3>
                <p className="text-gray-600 text-sm">
                  Futuristic worlds and mind-bending concepts
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Try These Popular Searches:
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "The Matrix",
                  "Inception",
                  "Interstellar",
                  "The Godfather",
                  "Pulp Fiction",
                  "The Dark Knight",
                ].map((title) => (
                  <a
                    key={title}
                    href={`/search/${encodeURIComponent(title)}`}
                    className="bg-linear-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {title}
                  </a>
                ))}
              </div>
            </div>
          </div>
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
        fallback={
          <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-6 animate-spin">🔍</div>
              <p className="text-2xl text-white font-semibold">
                Searching the universe for movies...
              </p>
              <div className="w-64 h-2 bg-gray-600 rounded-full mx-auto mt-8">
                <div className="w-32 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        }
      >
        <SearchResults movie={params.movie} />
      </Suspense>
    </main>
  );
}
