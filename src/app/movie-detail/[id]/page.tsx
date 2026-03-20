import ListOfMovies from "../../../components/ListOfMovies";
import DetailView from "../../../modules/details/details";
import { getMovieDetail, getSimilarMovies } from "../../../services";
import { Suspense } from "react";

async function MovieDetails({ id }: { id: string }) {
  const movieDetails = await getMovieDetail(id);
  return <DetailView movieDetails={movieDetails} />;
}

async function SimilarMoviesList({ id }: { id: string }) {
  const similarMovies = await getSimilarMovies(id);
  return <ListOfMovies title="Similar Movies" movies={similarMovies} />;
}

export default async function MoviesDetail(props: { params: { id: string } }) {
  const params = await props.params;

  return (
    <main className="suspense-content">
      <Suspense
        fallback={
          <div className="loading-spinner">Loading movie details...</div>
        }
      >
        <MovieDetails id={params.id} />
        <SimilarMoviesList id={params.id} />
      </Suspense>
    </main>
  );
}
