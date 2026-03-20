import ListOfMovies from "../../components/ListOfMovies";
import { getPopularMovies } from "../../services";
import { Suspense } from "react";
import Nav from "../../components/Nav";
import Link from "next/link";

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
        <div className="flex justify-between items-center mb-8 mt-8">
          <div className="text-center flex-1">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2">
              Popular Movies Collection
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              Discover the most watched and loved movies worldwide
            </p>
          </div>
          <Link
            href="/"
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base"
          >
            ← Back to Home
          </Link>
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
