import Footer from "../components/Footer";
import Header from "../components/Header";
import ListOfMovies from "../components/ListOfMovies";
import PopularMovies from "../components/PopularMovies";
import { getPopularMovies, getPoster, getTrending } from "../services";
import { Suspense } from "react";

async function HomePageContent() {
  const [poster, popularMovies, trendingMovies] = await Promise.all([
    getPoster(),
    getPopularMovies(),
    getTrending(),
  ]);

  return (
    <>
      <Header poster={poster} />
      <PopularMovies popularMovies={popularMovies} />
      <ListOfMovies movies={trendingMovies} title="Trending" viewAll />
      <Footer popularMovies={popularMovies} />
    </>
  );
}

export const metadata = {
  title: "Movie Rec",
  description: "Page of movies, to see the details and its genre",
};

export default async function Home() {
  return (
    <main className="suspense-content">
      <Suspense
        fallback={<div className="loading-spinner">Loading movies...</div>}
      >
        <HomePageContent />
      </Suspense>
    </main>
  );
}
