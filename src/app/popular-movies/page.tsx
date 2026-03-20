import ListOfMovies from "@components/ListOfMovies";
import Nav from "@components/Nav";
import { getPopularMovies } from "@services/index";
import { Suspense } from "react";

async function PopularMoviesContent() {
  const popularMovies = await getPopularMovies();

  return (
    <ListOfMovies
      movies={popularMovies}
      title="All Popular Movies"
      viewAll={false}
      limit={100}
    />
  );
}

export const metadata = {
  title: "All Popular Movies - Movie Rec",
  description:
    "Browse all popular movies with detailed information and ratings",
};

export default async function PopularMoviesPage() {
  return (
    <main className="suspense-content">
      <div className="w-11/12 max-w-7xl mx-auto">
        <Nav />
        <div className="flex justify-center items-center mb-6 mt-8">
          <div className="text-center">
            <h1 className="font-semibold text-2xl md:text-3xl text-gray-800 mb-1">
              Popular Movies Collection
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Discover the most watched and loved movies worldwide
            </p>
          </div>
        </div>
      </div>
      <Suspense
        fallback={
          <div className="loading-spinner">Loading popular movies...</div>
        }
      >
        <PopularMoviesContent />
      </Suspense>
    </main>
  );
}
