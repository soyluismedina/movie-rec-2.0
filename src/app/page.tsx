import Footer from "../components/Footer";
import Header from "../components/Header";
import ListOfMovies from "../components/ListOfMovies";
import PopularMovies from "../components/PopularMovies";
import { getPopularMovies, getPoster, getTrending } from "../services";

export const metadata = {
  title: "Movie Rec",
  discription: "Page of movies, to see the details and its genre",
};

export default async function Home() {
  const [poster, popularMovies, trendingMovies] = await Promise.all([
    getPoster(),
    getPopularMovies(),
    getTrending(),
  ]);

  return (
    <main>
      <Header poster={poster} />
      <PopularMovies popularMovies={popularMovies} />
      <ListOfMovies movies={trendingMovies} title="Trending" viewAll />
      <Footer popularMovies={popularMovies} />
    </main>
  );
}
